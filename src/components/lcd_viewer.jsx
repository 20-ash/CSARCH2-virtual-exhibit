import LcdModel from "./lcd_model.jsx";
import React, { useState } from "react";
import '../styles/modelo.css';
import '../styles/era.css';

const BASE_URL = import.meta.env.BASE_URL || "/";

const PARTS = [
    {
        id: "crystal",
        label: "Liquid Crystal Layer",
        description:
            "A material that has the ability to take the shape of its container like a liquid while still having its modecules be structured in a common pattern as seen with crystals.",
        processLCDDescription:
            "Once electric current is delivered into the crystal layer, it's individual molecules change orientation. This gives the liquid crystal layer the ability to act as a steering wheel as the angle of the light passing through it changes with the molecules' orientation. In practice, this means the liquid crystal layer determines the brightness of a display."
    },
    {
        id: "ccfl",
        label: "Cold Cathode Fluorescent Lamp (CCFL)",
        description:
            "A glass tube containing mercury vapor coated with phosphors. CCFL tubes produce their lighting by accepting electric current to excite the mercury vapor housed inside the tube. This process produces UV light which then hits the outer phosphor coating on the tube to produce white light to be used by the display.",
        processLCDDescription:
            "For the majority of modern displays, CCFL is widely considered to be obsolete. CCFL tubes are big, necessitating bulkier displays to fit and the fact that its brightness can be affected by the environment's temperature."
    },
    {
        id: "led",
        label: "Light-Emitting Diode (LED)",
        description:
            "The most popular type of backlighting currently in LCD displays replacing CCFL. LED bulbs instead contain a semiconductor that produces white light upon accepting electric current.",
        processLCDDescription:
            "LED displays deliver more brightness compared to CCFL on account of better electric efficiency. Thanks to the smaller size of LED bulbs, deeper blacks and more vibrant colors are achieved through LED displays thanks to less bloom."
    },
    {
        id: "miniled",
        label: "Mini Light-Emitting Diode (MiniLED)",
        description:
            "MiniLEDs for all intents and purposes are a variant of an LED display. The difference being that the LED bulbs are typically around half the size of normal LEDs.",
        processLCDDescription:
            "Displays utilizing MiniLED typically pack more bulbs into the backlight panel compared to their LED counterparts. The primary advantage of this backlight is better contrast and less bloom, granted the display supports local dimming."
    },
    {
        id: "firstfilter",
        label: "First Polarizing Filter",
        description:
            "The layer that typically sits close to the backlight source. This layer utilizes a chemical film applied to a piece of plastic. This film has the property of absorbing light waves.",
        processLCDDescription:
            "This layer's role is to filter lightwaves that match the angle of the film's orientation. Lightwaves that run parallel to the film are absorbed while the rest get to pass through."
    },
    {
        id: "secondfilter",
        label: "Second polarizing Filter",
        description:
            "This layer shares the same composition as the first polarizing filter. Where the second polairizing filter differs is the orientation of its chemical film. It's positioned to be perpendicular to that of the first polarizing filter.",
        processLCDDescription:
            "The second polarizing filter acts as the layer that blocks or let light pass through into the RGB filters depending on their angle from the liquid crystal layer."
    },
    {
        id: "rgb",
        label: "RGB Color Filters",
        description:
            "The RGB color filters are components present in every pixel on a display. These are the red, green, and blue subpixels. Eacn subpixel owns a transistor.",
        processLCDDescription:
            "If light is able to pass through the second polarizing filter, different combinations of electric current are then applied to change the structure of the subpixels. These differing structures determine how much light gets to pass into each subpixel and mix together to make the target color."
    },
    {
        id: "qdled",
        label: "Quantum Dot Light Emitting Diode (QDLED)",
        description:
            "This backlight still uses LED bulbs similar to LED and MiniLED displays. However, QDLED displays instead exchange white light for blue light. They also introduce a new quantum dot layer in between the backlight panel and the first polarizing filter.",
        processLCDDescription:
            "When blue light hits the quantum dot layer, some waves pass through as is resulting in pure blue light, others are transformed into pure red and pure green. Thanks to this, once the light reaches the color filters, the resulting pixels produce more accurate and vibrant colors."
    }
];

const lightType = [
    {
        id: "direct",
        label: "Direct-Lit",
        description: "The entire back panel of a display is packed with bulbs. This achieves uniform brightness across the screen along with good color accuracy.",
        processLCDDescription:
            "As the beam travels through the neck of the tube, it passes through the deflection system. Here, the current in the horizontal and vertical coils is being altered to control the trajectory of the electron beam to hit any position on the screen. Hence, the image may be displayed using the whole display screen."
    },
    {
        id: "edge",
        label: "Edge-lit",
        description: "Bulbs are only installed at the edges of a back panel. A plate then captures the light from the edges and distributes it across the display. This results in more affordable displays and less power consumption than direct-lit at the cost of poorer light uniformity across the screen."
    }
];

export default function LcdViewer() {
    const [selectedPart, setSelectedPart] = useState('ccfl');
    const [backlight, setBacklight] = useState('ccfl');     
    const [layout, setLayout] = useState('direct-lit');    
    const [animateLight, setAnimateLight] = useState(false);
    const activeBtn = (current, target) =>
        `btn ${current === target ? 'active' : ''}`;
    const layoutInfo = lightType.find(l => l.id === layout.replace('-lit', '')) || lightType[0];
    const activeInfo = PARTS.find((p) => p.id === selectedPart) || PARTS[0];

    return (
        <div>
            <div className="back-button-container" style={{ padding: '0.5rem' }}>
                <a href={`${BASE_URL}/displays`} className="link-pill lower">
                    ← Go Back
                </a>
            </div>

            <div className="lcd-split-layout">
                <div className="lcd-info-side">
                    <h2 className="lcd-info__title">General Process</h2>
                    <p className="lcd-info__desc">An LCD is composed of a light source, two polarizing glasses, RGB color filters, and a liquid crystal layer. 
                        The light source converts electric currents into light which then proceeds to the first polarizing glass.
                        Afterwards, light moves to the liquid crystal layer where the lightwave's angle changes. 
                        The second polarizing glass adjusts brightness by blocking some of the light.
                        From here, light now proceeds to each pixel's rgb filters and show up on a display as the pixel's color.
                        </p>

                    <div className="lcd-dynamic-box" style={{ marginTop: '2rem' }}>
                        <h3 className="lcd-info__title">{activeInfo.label}</h3>
                        <p className="lcd-info__desc">{activeInfo.description}</p>
                        <h3 className="lcd-info__title">Information</h3>
                        <p className="lcd-info__desc">{activeInfo.processLCDDescription}</p>
                        <h3 className="lcd-info__title">{layoutInfo.label}</h3>
                        <p className="lcd-info__desc">{layoutInfo.description}</p>                  
                    </div>
                </div>
                <div className="lcd-model-side">
                    <div className="controls">
                        <span>Backlight:</span>   
                        <button className={activeBtn(backlight, 'ccfl')} onClick={() => { setBacklight('ccfl'); setSelectedPart('ccfl')}  }>CCFL</button>
                        <button className={activeBtn(backlight, 'led')} onClick={() => { setBacklight('led'); setSelectedPart('led')}}>LED</button>
                        <button className={activeBtn(backlight, 'miniled')} onClick={() => { setBacklight('miniled'); setSelectedPart('miniled')}}>MiniLED</button>
                        <button className={activeBtn(backlight, 'qdled')} onClick={() => { setBacklight('qdled'); setSelectedPart('qdled')}}>QDLED</button>
                    </div>    
                    <div className="controls">   
                        <span>Layout:</span>
                        <button className={activeBtn(layout, 'direct-lit')} onClick={() => setLayout('direct-lit')}>Direct</button>
                        <button className={activeBtn(layout, 'edge-lit')} onClick={() => { setLayout('edge-lit'); if (backlight === 'fald') { setBacklight('led'); setSelectedPart('led'); } }}>Edge-lit</button>
                        {/* <button className={activeBtn(layout, 'fald')}>FALD</button> */}
                    </div>  
                    <div className="controls">   
                        <span>Light:</span>         
                        <button className={activeBtn(animateLight, true)} onClick={() => setAnimateLight(!animateLight)}>
                            {animateLight ? 'Stop Light' : 'Animate Light'}
                        </button>
                    </div> 
                        
                    
                    <LcdModel backlightType={backlight} layout={layout} animateLight={animateLight}
                        selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
                </div>
            </div>
        </div>
    );
}