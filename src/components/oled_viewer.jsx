import OledModel from "./oled_model.jsx";
import React, { useState } from "react";
import '../styles/modelo.css';

const PARTS = [
    {
        id: "substrate",
        label: "Substrate",
        description:
            "The base layer, often made of glass, plastic or metalic foil, that provides structural support for the mechanical support for the device",
        processLCDDescription:
            "**"
    },
    {
        id: "anode",
        label: "Anode",
        description:
            "A transparent and conductive electrode, commonly made of indium tin oxide (ITO), that serves as the positive electrode of the OLED.",
        processLCDDescription:
            "**"
    },
    {
        id: "cathode",
        label: "Cathode",
        description:
            "The negative electrode of the OLED, that may be transparent or reflective, depending on the display's design.",
        processLCDDescription:
            "**"
    },
    {
        id: "htl",
        label: "Hole Transport Layer (HTL)",
        description:
            "The layer that facilitates hole movement from the anode, towards the emissive layer.",
        processLCDDescription:
            "**."
    },
    {
        id: "eml",
        label: "Emissive Layer (EML)",
        description:
            "The layer where electron–hole recombination occurs to produce light.",
        processLCDDescription:
            "**."
    },
    {
        id: "etl",
        label: "Electron Transport Layer (ETL)",
        description:
            "The layer that assists movement of electron flow from the cathode toward the emissive region.",
        processLCDDescription:
            "**."
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
                    <button className={activeBtn(layout, 'fald')}>FALD</button>
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