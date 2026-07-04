import LcdModel from "./lcd_model.jsx";
import React, { useState } from "react";
import '../styles/modelo.css';

export default function LcdViewer() {
    const [backlight, setBacklight] = useState('ccfl');     
    const [layout, setLayout] = useState('direct-lit');    
    const [exploded, setExploded] = useState(true);
    const activeBtn = (current, target) =>
        `btn ${current === target ? 'active' : ''}`;

    return (
        <div>
            <div className="controls">
                <span>Backlight:</span>
                <button className={activeBtn(backlight, 'ccfl')} onClick={() => setBacklight('ccfl')}>CCFL</button>
                <button className={activeBtn(backlight, 'led')} disabled>LED</button>
                <button className={activeBtn(backlight, 'miniled')} disabled>MiniLED</button>
                <span>Layout:</span>
                <button className={activeBtn(layout, 'direct-lit')} onClick={() => setLayout('direct-lit')}>Direct</button>
                <button className={activeBtn(layout, 'edge-lit')} disabled>Edge-lit</button>
                <button className={activeBtn(layout, 'fald')} disabled>FALD</button>
                <span>
                    <button className="btn" onClick={() => setExploded(!exploded)}>
                        {exploded ? 'Assembled' : 'Exploded'}
                    </button>
                </span>
            </div>
            <LcdModel backlightType={backlight} layout={layout} exploded={exploded} />
        </div>
    );
}