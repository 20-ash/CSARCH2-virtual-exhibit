import LcdModel from "./lcd_model.jsx";
import React, { useState } from "react";
import '../styles/modelo.css';

const PARTS = [
    {
        id: "crystal",
        label: "Liquid Crystal Layer",
        description:
            "A material that has the ability to take the shape of its container like a liquid while still having its modecules be structured in a common pattern as seen with crystals.",
        processLCDDescription:
            "Once electric current is delivered into the crystal layer, it's individual molecules change orientation. This gives the liquid crystal layer the ability to act as a steering wheel as the angle of the light passing through it changes with the molecules' orientation."
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
            "Displays utilizing MiniLED typically pack more bulbs into the backlight panel compared to their LED counterparts. The primary advantage of this backlight is better contrast and less bloom granted the display supports local dimming."
    },
    {
        id: "firstfilter",
        label: "First Polarizing Filter",
        description:
            "Encloses the whole assembly so electrons can travel freely from the gun to the screen without being scattered by air molecules.",
        processLCDDescription:
            "The entire component is enclosed in a specialized vacuum tube to prevent the electrons from colliding with air molecules. Eliminating this interference ensures the electrons can travel freely in a straight direction toward the phosphorescent screen."
    },
    {
        id: "secondfilter",
        label: "Second polarizing Filter",
        description:
            "Encloses the whole assembly so electrons can travel freely from the gun to the screen without being scattered by air molecules.",
        processLCDDescription:
            "The entire component is enclosed in a specialized vacuum tube to prevent the electrons from colliding with air molecules. Eliminating this interference ensures the electrons can travel freely in a straight direction toward the phosphorescent screen."
    },
    {
        id: "rgb",
        label: "RGB Color Filters",
        description:
            "Encloses the whole assembly so electrons can travel freely from the gun to the screen without being scattered by air molecules.",
        processLCDDescription:
            "The entire component is enclosed in a specialized vacuum tube to prevent the electrons from colliding with air molecules. Eliminating this interference ensures the electrons can travel freely in a straight direction toward the phosphorescent screen."
    },
    {
        id: "qdled",
        label: "Quantum Dot Light Emitting Diode (QDLED)",
        description:
            "Encloses the whole assembly so electrons can travel freely from the gun to the screen without being scattered by air molecules.",
        processLCDDescription:
            "The entire component is enclosed in a specialized vacuum tube to prevent the electrons from colliding with air molecules. Eliminating this interference ensures the electrons can travel freely in a straight direction toward the phosphorescent screen."
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
    );
}