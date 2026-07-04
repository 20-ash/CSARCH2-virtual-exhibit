import PlasmaModel from "./plasma_model.jsx";
import React, { useState } from "react";
import '../styles/plasma.css';

const PARTS = [
    {
        id: "substrates",
        label: "Glass Substrates",
        description:
            "Two parallel glass panels placed on both ends that compress the internal components. These form the structure for the display.",
        processPlasmaTitle: "Structural Containment",
        processPlasmaDescription:
            "The front and back glass substrates are sealed together at their edges, trapping every gas cell in between. This rigid sandwich keeps the noble gas mixture enclosed at the correct pressure so each cell can be reliably ionized without the gas leaking or contaminating its neighbors.",
    },
    {
        id: "address",
        label: "Address Electrodes",
        description:
            "Vertical electrodes on the back glass panel that are responsible for selecting which cells to be activated.",
        processPlasmaTitle: "Voltage Application",
        processPlasmaDescription:
            "Electric voltage pulses are sent through the address electrodes to target specific gas cells. Combined with the sustain electrodes on the front panel, this pinpoints exactly which cell, out of the millions on the panel, should be lit for the current frame.",
    },
    {
        id: "sustain",
        label: "Sustain Electrodes",
        description:
            "Pairs of horizontal electrodes on the front glass panel that maintain the discharge once a cell is activated.",
        processPlasmaTitle: "Gas Ionization",
        processPlasmaDescription:
            "Once a cell is addressed, the electric field between the sustain electrode pair causes the neon and xenon gas inside that cell to ionize, transforming it into plasma, the fourth state of matter, and keeping the discharge going for as long as the cell needs to stay lit.",
    },
    {
        id: "gas",
        label: "Neon & Xenon Gas Cells",
        description:
            "Millions of cells filled with noble gas mixtures. Each cell represents one subpixel shown on the display.",
        processPlasmaTitle: "Ultraviolet Emission",
        processPlasmaDescription:
            "Inside the ionized cell, the energized plasma causes the neon and xenon atoms to emit ultraviolet photons. This light is invisible to the human eye on its own, but it is the energy source that will ultimately produce the color seen on screen.",
    },
    {
        id: "mgo",
        label: "Magnesium Oxide (MgO) Layer",
        description:
            "A protective dielectric layer coating the electrodes. It improves discharge efficiency and protects electrodes from damage.",
        processPlasmaTitle: "Discharge Protection",
        processPlasmaDescription:
            "The MgO coating shields the sustain electrodes from the constant bombardment of ions during discharge, reducing wear over millions of ionization cycles while also releasing secondary electrons that make each discharge easier to sustain, improving efficiency.",
    },
    {
        id: "phosphor",
        label: "RGB Phosphor Coating",
        description:
            "Each cell is coated with either red, green, or blue phosphor material that converts ultraviolet light into colored light visible to the human eye.",
        processPlasmaTitle: "Phosphor Excitation & Image Formation",
        processPlasmaDescription:
            "Ultraviolet photons strike the phosphor coating inside each cell, exciting it into emitting visible red, green, or blue light depending on the phosphor color. Millions of these individually controlled RGB subpixels combine their light output to form a full-color image on screen.",
    },
];

export default function PlasmaViewer() {
    const [selectedPart, setSelectedPart] = useState('gas');
    const [animate, setAnimate] = useState(false);

    const activeBtn = (current, target) => `btn ${current === target ? 'active' : ''}`;
    const activeInfo = PARTS.find((p) => p.id === selectedPart) || PARTS[0];

    return (
        <div className="plasma-split-layout">

            {/* LEFT SIDE: Info Display */}
            <div className="plasma-info-side">
                <h2 className="plasma-info__title">{activeInfo.label}</h2>
                <p className="plasma-info__desc">{activeInfo.description}</p>

                <div className="plasma-dynamic-box" style={{ marginTop: '2rem' }}>
                    <h3 className="plasma-info__title">{activeInfo.processPlasmaTitle}</h3>
                    <p className="plasma-info__desc">{activeInfo.processPlasmaDescription}</p>
                </div>
            </div>

            {/* RIGHT SIDE: Controls, 2D Model */}
            <div className="plasma-model-side">
                {/* 2D Model Parts */}
                <div className="controls">
                    <span>Parts:</span>
                    <button className={activeBtn(selectedPart, 'substrates')} onClick={() => setSelectedPart('substrates')}>Substrates</button>
                    <button className={activeBtn(selectedPart, 'address')} onClick={() => setSelectedPart('address')}>Address</button>
                    <button className={activeBtn(selectedPart, 'sustain')} onClick={() => setSelectedPart('sustain')}>Sustain</button>
                    <button className={activeBtn(selectedPart, 'gas')} onClick={() => setSelectedPart('gas')}>Gas Cell</button>
                    <button className={activeBtn(selectedPart, 'mgo')} onClick={() => setSelectedPart('mgo')}>MgO Layer</button>
                    <button className={activeBtn(selectedPart, 'phosphor')} onClick={() => setSelectedPart('phosphor')}>Phosphor</button>
                </div>

                {/* Animation Control */}
                <div className="controls">
                    <span>Action:</span>
                    <button className={activeBtn(animate, true)} onClick={() => setAnimate(!animate)}>
                        {animate ? 'Stop Discharge' : 'Animate Discharge'}
                    </button>
                </div>

                <PlasmaModel selectedPart={selectedPart} setSelectedPart={setSelectedPart} animate={animate} />
            </div>

        </div>
    );
}
