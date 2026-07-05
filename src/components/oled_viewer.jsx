import OledModel from "./oled_model.jsx";
import React, { useState } from "react";
import '../styles/oled.css';

const PARTS = [
    {
        id: "substrate",
        label: "Substrate",
        description:
            "The base layer, often made of glass, plastic or metallic foil, that provides structural and mechanical support for the device.",
        processOLEDDescription:
            "Provides a stable foundation for depositing all other OLED layers; must be flat, clean, and resistant to heat and chemicals."
    },
    {
        id: "anode",
        label: "Anode",
        description:
            "A transparent and conductive electrode, commonly made of indium tin oxide (ITO), that serves as the positive electrode of the OLED.",
        processOLEDDescription:
            "Injects positive charge carriers (holes) into the organic layers when voltage is applied."
    },
    {
        id: "cathode",
        label: "Cathode",
        description:
            "The negative electrode of the OLED, that may be transparent or reflective, depending on the display's design.",
        processOLEDDescription:
            "Injects negative charge carriers (electrons) into the organic layers when voltage is applied."
    },
    {
        id: "htl",
        label: "Hole Transport Layer (HTL)",
        description:
            "The layer that facilitates hole movement from the anode towards the emissive layer.",
        processOLEDDescription:
            "Moves holes efficiently while blocking electrons to ensure recombination happens in the correct region."
    },
    {
        id: "eml",
        label: "Emissive Layer (EML)",
        description:
            "The layer where electron–hole recombination occurs to produce light.",
        processOLEDDescription:
            "When electrons and holes meet here, energy is released in the form of visible light; color depends on the organic material used."
    },
    {
        id: "etl",
        label: "Electron Transport Layer (ETL)",
        description:
            "The layer that assists movement of electrons from the cathode toward the emissive region.",
        processOLEDDescription:
            "Moves electrons efficiently while blocking holes to improve light output and efficiency."
    },
    {
        id: "encapsulation",
        label: "Encapsulation Layer",
        description:
            "Protective barrier that seals the OLED structure to prevent damage from moisture, oxygen, and physical contact.",
        processOLEDDescription:
            "Extends the lifespan of the display by keeping air and water away from sensitive organic materials."
    }
];

const panelType = [
    {
        id: "oled",
        label: "OLED Structure",
        description: "OLED displays are self-emissive — each pixel produces its own light without needing a separate backlight source. This allows thinner design, deeper blacks, and faster response times compared to LCD."
    }
];

export default function OledViewer() {
    const [selectedPart, setSelectedPart] = useState('substrate');
    const [animateLight, setAnimateLight] = useState(false);
    const activeBtn = (current, target) =>
        `btn ${current === target ? 'active' : ''}`;
    const panelInfo = panelType[0];
    const activeInfo = PARTS.find((p) => p.id === selectedPart) || PARTS[0];

    return (
        <div className="oled-split-layout">
            <div className="oled-info-side">
                <h2 className="oled-info__title">General Process</h2>
                <p className="oled-info__desc">An OLED is a self-emissive display made of organic semiconductor layers sandwiched between two electrodes. 
                    When voltage is applied, electrons and holes are injected from opposite sides and move toward each other.
                    They meet and recombine in the emissive layer, releasing energy as visible light through electroluminescence. 
                    Each pixel works independently and can be fully turned off, resulting in true black levels, high contrast, and fast response times. 

                </p>

                <div className="oled-dynamic-box" style={{ marginTop: '2rem' }}>
                    <h3 className="oled-info__title">{activeInfo.label}</h3>
                    <p className="oled-info__desc">{activeInfo.description}</p>
                    <h3 className="oled-info__title">Function</h3>
                    <p className="oled-info__desc">{activeInfo.processOLEDDescription}</p>
                    <h3 className="oled-info__title">{panelInfo.label}</h3>
                    <p className="oled-info__desc">{panelInfo.description}</p>
                </div>
            </div>
            <div className="oled-model-side">
                <div className="controls">
                    <span>Select Layer:</span>
                    {PARTS.map(part => (
                        <button
                            key={part.id}
                            className={activeBtn(selectedPart, part.id)}
                            onClick={() => setSelectedPart(part.id)}
                        >
                            {part.label.replace(' Layer', '').replace(' (', '\n(')}
                        </button>
                    ))}
                </div>

                <div className="controls">
                    <span>Light:</span>
                    <button className={activeBtn(animateLight, true)} onClick={() => setAnimateLight(!animateLight)}>
                        {animateLight ? 'Stop Light' : 'Animate Light'}
                    </button>
                </div>

                <OledModel
                    animateLight={animateLight}
                    selectedPart={selectedPart}
                    setSelectedPart={setSelectedPart}
                />
            </div>
        </div>
    );
}