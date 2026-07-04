import CrtModel from "./crt_model.jsx";
import React, { useState } from "react";
import '../styles/crt.css';

{/* 
    CRT Parts Information:
    label: Name of CRT Part
    description: CRT Part Description
    processCrtTitle: Name of the Process Associated with the CRT Part
    processCrtDescription: Description of the Associated Process
*/}
const PARTS = [
    {
        id: "gun",
        label: "Electron Gun",
        description:
            "Generates, shapes, and focuses the stream of electrons into a beam. Consists of a heated cathode, anodes, and a focusing assembly.",
        processCrtTitle: "Thermionic Emission and Focusing",
        processCrtDescription:
            "The cathode inside the electron gun heats up, causing it to emit a huge amount of electrons. Positively charged anodes attract the negatively charged electrons from the cathode, accelerating them rapidly toward the screen. During this process, the electrons undergo a process called electrostatic focusing, wherein they are being focused into a beam so that it forms a small spot on the screen using a focusing assembly containing an electron lens.",
    },
    {
        id: "grid",
        label: "Control Grid",
        description:
            "Changes the display's brightness.",
        processCrtTitle: "Brightness Adjusting",
        processCrtDescription:
            "Controls the intensity of the electron beam by adjusting the number of electrons that pass through the grid into the anode area before hitting the screen. Adjusting the intensity of the electron beam would, in turn, change the brightness of the display.",
    },
    {
        id: "deflection",
        label: "Deflection System",
        description:
            "Consists of X-plates and Y-plates that direct the electron beam horizontally and vertically, so it can be precisely aimed at the correct spot on the screen.",
        processCrtTitle: "Deflection",
        processCrtDescription:
            "As the beam travels through the neck of the tube, it passes through the deflection system. Here, the current in the horizontal and vertical coils is being altered to control the trajectory of the electron beam to hit any position on the screen. Hence, the image may be displayed using the whole display screen.",
    },
    {
        id: "screen",
        label: "Phosphorescent Screen",
        description:
            "Coated with phosphorescent material (often tiny dots or stripes). It lights up when struck by the electron beam, creating the image.",
        processCrtTitle: "Display",
        processCrtDescription:
            "The electrons strike the phosphor coating of the screen. As they strike the phosphor coating, the electrons' kinetic energy is converted into visible light. Finally, an image is conjured.",
    },
    {
        id: "vacuum",
        label: "Vacuum Tube Container",
        description:
            "Encloses the whole assembly so electrons can travel freely from the gun to the screen without being scattered by air molecules.",
        processCrtTitle: "Containment",
        processCrtDescription:
            "The entire component is enclosed in a specialized vacuum tube to prevent the electrons from colliding with air molecules. Eliminating this interference ensures the electrons can travel freely in a straight direction toward the phosphorescent screen.",
    },
];

export default function CrtViewer() {
    const [selectedPart, setSelectedPart] = useState('pins');     
    const [animate, setAnimate] = useState(false);    

    const activeBtn = (current, target) => `btn ${current === target ? 'active' : ''}`;
    const activeInfo = PARTS.find((p) => p.id === selectedPart) || PARTS[0];

    return (
        <div className="crt-split-layout">
            
            {/* LEFT SIDE: Information Display */}
            <div className="crt-info-side">
                <h2 className="crt-info__title">{activeInfo.label}</h2>
                <p className="crt-info__desc">{activeInfo.description}</p>

                <div className="crt-dynamic-box" style={{ marginTop: '2rem' }}>
                    <h3 className="crt-info__title">{activeInfo.processCrtTitle}</h3>
                    <p className="crt-info__desc">{activeInfo.processCrtDescription}</p>
                </div>
            </div>

            {/* RIGHT SIDE: Controls and 2D Model */}
            <div className="crt-model-side">
                {/* 2D Model Parts */}
                <div className="controls">
                    <span>Parts:</span>
                    <button className={activeBtn(selectedPart, 'gun')} onClick={() => setSelectedPart('gun')}>Gun</button>
                    <button className={activeBtn(selectedPart, 'grid')} onClick={() => setSelectedPart('grid')}>Grid</button>
                    <button className={activeBtn(selectedPart, 'deflection')} onClick={() => setSelectedPart('deflection')}>Deflection</button>
                    <button className={activeBtn(selectedPart, 'screen')} onClick={() => setSelectedPart('screen')}>Screen</button>
                    <button className={activeBtn(selectedPart, 'vacuum')} onClick={() => setSelectedPart('vacuum')}>Vacuum</button>
                </div>

                {/* Beam Control */}
                <div className="controls">
                    <span>Action:</span>
                    <button className={activeBtn(animate, true)} onClick={() => setAnimate(!animate)}>
                        {animate ? 'Stop Beam' : 'Animate Beam'}
                    </button>
                </div>
                
                <CrtModel selectedPart={selectedPart} setSelectedPart={setSelectedPart} animate={animate} />
            </div>

        </div>
    );
}