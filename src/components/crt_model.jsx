/**
 * crt_model.jsx
 *
 * A labeled, interactive 2D diagram of a Cathode Ray Tube (CRT). Since a CRT's
 * function is best explained as a cross-section (electron gun -> deflection ->
 * phosphor screen), this is built as an SVG diagram rather than a 3D model --
 * matching the project proposal, which calls for a 2D image for CRT.
 *
 * Clicking a labeled part highlights it on the diagram and shows its
 * description, pulled from the CRT reference document. An animation toggle
 * shows the electron beam path travelling from the gun to the screen.
 *
 * ## Props
 * None -- this component is self-contained (mirrors LcdViewer/LcdModel usage).
 *
 * ## Usage Example
 *   <CrtModel client:load />
 */

import { useState, useEffect, useRef } from "react";

const PARTS = [
    {
        id: "gun",
        label: "Electron Gun",
        description:
            "Generates, shapes, and focuses a stream of electrons into a beam. Made up of a heated cathode, anodes, and a focusing assembly.",
    },
    {
        id: "grid",
        label: "Control Grid",
        description:
            "Controls the intensity of the electron beam by adjusting how many electrons pass through into the anode area before hitting the screen -- this changes the display's brightness.",
    },
    {
        id: "deflection",
        label: "Deflection System",
        description:
            "X-plates and Y-plates that direct the electron beam horizontally and vertically, so it can be precisely aimed at the correct spot on the screen.",
    },
    {
        id: "screen",
        label: "Phosphorescent Screen",
        description:
            "Coated with phosphorescent material (often tiny dots or stripes). It lights up when struck by the electron beam, creating the image.",
    },
    {
        id: "vacuum",
        label: "Vacuum Tube",
        description:
            "Encloses the whole assembly so electrons can travel freely from the gun to the screen without being scattered by air molecules.",
    },
];

export default function CrtModel() {
    const [selected, setSelected] = useState("gun");
    const [animate, setAnimate] = useState(false);
    const beamRef = useRef(null);

    const active = PARTS.find((p) => p.id === selected);

    // Restart the CSS beam animation cleanly whenever it's toggled on.
    useEffect(() => {
        if (animate && beamRef.current) {
            beamRef.current.style.animation = "none";
            // Force reflow so the animation restarts from the beginning.
            void beamRef.current.offsetWidth;
            beamRef.current.style.animation = "";
        }
    }, [animate]);

    const isOn = (id) => selected === id;

    return (
        <div className="crt-wrapper">
            <div className="crt-controls">
                {PARTS.map((p) => (
                    <button
                        key={p.id}
                        className={`crt-btn ${isOn(p.id) ? "active" : ""}`}
                        onClick={() => setSelected(p.id)}
                    >
                        {p.label}
                    </button>
                ))}
                <button
                    className={`crt-btn crt-btn--anim ${animate ? "active" : ""}`}
                    onClick={() => setAnimate((a) => !a)}
                >
                    {animate ? "Stop Beam" : "Animate Beam"}
                </button>
            </div>

            <div className="crt-stage">
                <svg
                    viewBox="0 0 800 360"
                    xmlns="http://www.w3.org/2000/svg"
                    className="crt-svg"
                >
                    {/* Vacuum tube outer envelope */}
                    <path
                        d="M 40 180
                           C 40 120, 90 90, 170 90
                           L 480 60
                           C 560 55, 620 90, 660 130
                           C 700 170, 700 190, 660 230
                           C 620 270, 560 305, 480 300
                           L 170 270
                           C 90 270, 40 240, 40 180 Z"
                        className={`part vacuum ${isOn("vacuum") ? "part-active" : ""}`}
                        onClick={() => setSelected("vacuum")}
                    />

                    {/* Electron gun (neck, left side) */}
                    <rect
                        x="55"
                        y="150"
                        width="120"
                        height="60"
                        rx="8"
                        className={`part gun ${isOn("gun") ? "part-active" : ""}`}
                        onClick={() => setSelected("gun")}
                    />
                    <text x="115" y="185" className="part-label" textAnchor="middle">
                        Gun
                    </text>

                    {/* Control grid, just after the gun */}
                    <g
                        className={`part grid ${isOn("grid") ? "part-active" : ""}`}
                        onClick={() => setSelected("grid")}
                    >
                        <rect x="185" y="145" width="16" height="70" />
                        <rect x="210" y="150" width="10" height="60" />
                    </g>
                    <text x="205" y="235" className="part-label" textAnchor="middle">
                        Grid
                    </text>

                    {/* Deflection plates (two pairs: vertical then horizontal) */}
                    <g
                        className={`part deflection ${isOn("deflection") ? "part-active" : ""}`}
                        onClick={() => setSelected("deflection")}
                    >
                        <rect x="260" y="120" width="90" height="10" rx="3" />
                        <rect x="260" y="230" width="90" height="10" rx="3" />
                        <rect x="370" y="140" width="10" height="90" rx="3" />
                        <rect x="480" y="140" width="10" height="90" rx="3" />
                    </g>
                    <text x="360" y="105" className="part-label" textAnchor="middle">
                        Deflection Plates
                    </text>

                    {/* Phosphorescent screen (front face) */}
                    <rect
                        x="640"
                        y="95"
                        width="26"
                        height="170"
                        rx="6"
                        className={`part screen ${isOn("screen") ? "part-active" : ""}`}
                        onClick={() => setSelected("screen")}
                    />
                    <text x="653" y="285" className="part-label" textAnchor="middle">
                        Screen
                    </text>

                    {/* Electron beam path, animated when toggled on */}
                    <line
                        ref={beamRef}
                        x1="180"
                        y1="180"
                        x2="645"
                        y2="180"
                        className={`beam ${animate ? "beam-animate" : ""}`}
                    />

                    {/* Glow burst on the screen when the beam is animating */}
                    {animate && <circle cx="653" cy="180" r="10" className="beam-glow" />}
                </svg>
            </div>

            <div className="crt-info">
                <h3 className="crt-info__title">{active.label}</h3>
                <p className="crt-info__desc">{active.description}</p>
            </div>
        </div>
    );
}
