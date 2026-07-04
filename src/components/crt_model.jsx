import React, { useRef } from "react";

export default function CrtModel({ selectedPart, setSelectedPart, animate }) {
    const beamRef = useRef(null);
    const isOn = (id) => selectedPart === id;

    return (
        <div className="crt-stage">
            <svg viewBox="0 0 800 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                
                {/* CRT Glass Outline */}
                <g className={`part vacuum ${isOn("vacuum") ? "part-active" : ""}`} onClick={() => setSelectedPart("vacuum")}>
                    <path d="M 40 110 L 330 110 L 450 60 L 670 60 L 670 300 L 450 300 L 330 250 L 40 250 Z" fill="transparent" stroke="#444" strokeWidth="4" strokeLinejoin="round" />
                    <text x="540" y="50" className="part-label" textAnchor="middle">Vacuum Tube</text>
                </g>

                {/* Electron Gun */}
                <g className={`part ${isOn("gun") ? "part-active" : ""}`} onClick={() => setSelectedPart("gun")}>
                    <rect x="50" y="150" width="70" height="60" rx="4" fill="#2c2c2c" stroke="#cfd6de" strokeWidth="2" />
                    <text x="85" y="145" className="part-label" textAnchor="middle">Electron Gun</text>
                </g>

                {/* Control Grid */}
                <g className={`part ${isOn("grid") ? "part-active" : ""}`} onClick={() => setSelectedPart("grid")}>
                    <rect x="140" y="140" width="20" height="80" rx="2" fill="#2c2c2c" stroke="#cfd6de" strokeWidth="2" />
                    <text x="150" y="240" className="part-label" textAnchor="middle">Control Grid</text>
                </g>

                {/* Deflection Plates */}
                <g className={`part ${isOn("deflection") ? "part-active" : ""}`} onClick={() => setSelectedPart("deflection")}>
                    {/* Top Plate */}
                    <rect x="230" y="115" width="80" height="10" rx="2" fill="#2c2c2c" stroke="#cfd6de" strokeWidth="2" />
                    {/* Bottom Plate */}
                    <rect x="230" y="235" width="80" height="10" rx="2" fill="#2c2c2c" stroke="#cfd6de" strokeWidth="2" />
                    <text x="270" y="100" className="part-label" textAnchor="middle">Deflection Plates</text>
                </g>

                {/* Screen */}
                <g className={`part screen ${isOn("screen") ? "part-active" : ""}`} onClick={() => setSelectedPart("screen")}>
                    <rect x="640" y="95" width="26" height="170" rx="6" fill="#1a1a1a" stroke="#cfd6de" strokeWidth="2" />
                    <text x="653" y="285" className="part-label" textAnchor="middle">Screen</text>
                </g>

                {/* Beam */}
                <line
                    ref={beamRef}
                    x1="120" y1="180" x2="640" y2="180"
                    pathLength="465"
                    className={`beam ${animate ? "beam-animate" : ""}`}
                />
                {animate && <circle cx="645" cy="180" r="10" className="beam-glow" />}
            </svg>
        </div>
    );
}