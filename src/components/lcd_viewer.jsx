import LcdModel from "./lcd_model.jsx";
import React, { useState } from "react";
import '../styles/modelo.css';

export default function LcdViewer() {
    const [backlight, setBacklight] = useState('ccfl');     
    const [layout, setLayout] = useState('direct-lit');    
    const [exploded, setExploded] = useState(true);
    const [animateLight, setAnimateLight] = useState(false);
    const activeBtn = (current, target) =>
        `btn ${current === target ? 'active' : ''}`;

    return (
        <div className="lcd-split-layout">
            <div className="lcd-info-side">
                <h2>Liquid Crystal Display</h2>
                <p className="lcd-info__desc">Placeholder text for LCD description. Details about how liquid crystal displays work, their structure, and operation will be provided here.</p>
            </div>
            <div className="lcd-model-side">
                <div className="controls">
                    <span>Backlight:</span>
                    <button className={activeBtn(backlight, 'ccfl')} onClick={() => setBacklight('ccfl')}>CCFL</button>
                    <button className={activeBtn(backlight, 'led')} onClick={() => setBacklight('led')}>LED</button>
                    <button className={activeBtn(backlight, 'miniled')} onClick={() => setBacklight('miniled')}>MiniLED</button>
                    <span>Layout:</span>
                    <button className={activeBtn(layout, 'direct-lit')} onClick={() => setLayout('direct-lit')}>Direct</button>
                    <button className={activeBtn(layout, 'edge-lit')} onClick={() => setLayout('edge-lit')}>Edge-lit</button>
                    <button className={activeBtn(layout, 'fald')} disabled>FALD</button>
                    <span>
                        <button className="btn" onClick={() => setExploded(!exploded)}>
                            {exploded ? 'Assembled' : 'Exploded'}
                        </button>
                    </span>
                </div>
                <div className="controls">
                    <span>Light:</span>
                    <button className={activeBtn(animateLight, true)} onClick={() => setAnimateLight(!animateLight)}>
                        {animateLight ? 'Stop Light' : 'Animate Light'}
                    </button>
                </div>
                <LcdModel backlightType={backlight} layout={layout} exploded={exploded} animateLight={animateLight} />
            </div>
        </div>
    );
}