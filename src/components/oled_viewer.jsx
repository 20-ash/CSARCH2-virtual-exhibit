import OledModel from "./oled_model.jsx";
import React, { useState } from "react";
import '../styles/oled.css';
import '../styles/pagebg.css';
import '../styles/era.css';


const BASE_URL = import.meta.env.BASE_URL || "/";


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


const TABS = [
   { id: "model", label: "Model" },
   { id: "evolution", label: "Evolution" },
   { id: "tech", label: "Tech Description" },
   { id: "apps", label: "Applications & Evaluation" },
   { id: "refs", label: "References" }
];


export default function OledViewer() {
   const [activeTab, setActiveTab] = useState('model');
   const [selectedPart, setSelectedPart] = useState('substrate');
   const [animateLight, setAnimateLight] = useState(false);
   const activeBtn = (current, target) =>
       `btn ${current === target ? 'active' : ''}`;
   const panelInfo = panelType[0];
   const activeInfo = PARTS.find((p) => p.id === selectedPart) || PARTS[0];


   return (
        <div className="oled-page">
           <div className="bg"></div>
          
           <div className="back-button-container" style={{ padding: '0.5rem' }}>
               <a href={`${BASE_URL}/displays`} className="link-pill lower">
                   ← Go Back
               </a>
           </div>


           {/* Tab Navigation */}
           <div style={{ padding: '0 1rem 1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
               {TABS.map(tab => (
                   <button
                       key={tab.id}
                       className={activeBtn(activeTab, tab.id)}
                       onClick={() => setActiveTab(tab.id)}
                   >
                       {tab.label}
                   </button>
               ))}
           </div>
           
           {activeTab === 'model' ? (
               <div className="oled-split-layout">
                   <div className="oled-info-side">
                       <h2 className="oled-info__title">General Process</h2>
                       <p className="oled-info__desc">
                           An OLED is a self-emissive display made of organic semiconductor layers sandwiched between two electrodes.
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
                       <p className="oled-info__desc">💡 Select a layer or animate the light below!</p>
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
           ) : (
               <div>
                   {activeTab === 'evolution' && (
                       <>
                           <h2 className="oled-info__title">Evolution</h2>
                           <img
                               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoVbuxQzf0FG3W4sQJkM7Cj3ygVx3nsZ99jVbM64K-Q&s=10"
                               alt="OLED display structure"
                               className="oled-image"
                           />
                          
                           <p className="oled-info__desc">
                               As OLED technology advanced, manufacturers developed different implementations
                               to improve display performance. Compared with LCD, OLED removes the need for a backlight by
                               allowing each pixel to produce its own light. The two main types used today are WOLED and
                               QD-OLED.
                           </p>


                           <details className="see-more">
                               <summary>See More</summary>
                               <p className="oled-info__desc">
                                   WOLED (White OLED) uses a white OLED light source with color filters
                                   to produce red, green, and blue pixels. It preserves OLED's self-emissive
                                   design, delivering deep blacks, high contrast, and wide viewing angles.
                                   However, some light is lost through the color filters, making it less
                                   efficient than QD-OLED in brightness and color performance.
                               </p>
                               <br /><br />
                               <p className="oled-info__desc">
                                   QD-OLED (Quantum Dot OLED) is an advanced OLED technology that uses
                                   a blue OLED light source with quantum dots to convert blue light into red
                                   and green. Introduced commercially in 2022 by Samsung Display, it improves
                                   light efficiency, producing higher brightness, a wider color gamut, and
                                   better HDR performance while maintaining OLED's deep blacks and fast
                                   response times.
                               </p>
                               <br /><br />
                               <p className="oled-info__desc">
                                   A QD-OLED panel consists of a blue OLED layer, a quantum dot layer for
                                   color conversion, and a TFT backplane that controls individual pixels.
                                   Unlike traditional displays that rely on color filters, QD-OLED creates
                                   colors through light conversion, improving color accuracy and efficiency.
                               </p>
                           </details>
                       </>
                   )}


                   {activeTab === 'tech' && (
                       <>
                           <h2 className="oled-info__title">Introduction and Fundamentals</h2>
                           <p className="oled-info__desc">
                               OLED, or Organic Light-Emitting Diode, is a flat-panel display technology in which each individual pixel emits its own light. This was first developed in 1987 by Ching W. Tang and Steven Van Slyke at Eastman Kodak Company. It consists of multiple thin organic semiconductor layers arranged between two conductive electrodes (anode and cathode), in which light is generated via electroluminescence when an electric field is applied. Electron–hole recombination occurs within the emissive organic layer, releasing energy as visible photons.
                           </p>
                           <p className="oled-info__desc" style={{ marginTop: '1rem' }}>
                               Because OLEDs are self-emissive, each pixel acts as an independent light source and doesn’t require a backlight unit. This architecture reduces structural thickness and improves power efficiency compared to Liquid Crystal Display (LCD) systems. OLEDs also exhibit high contrast ratios due to true black levels, wide viewing angles, and fast response times resulting from direct light emission. Additionally, the thin-film organic structure enables mechanical flexibility, allowing implementation in flexible and transparent display configurations.
                           </p>


                           <h3 className="oled-info__title" style={{ marginTop: '2rem' }}>How OLED Works</h3>
                           <p className="oled-info__desc">
                               OLEDs work by applying a voltage across organic semiconductor layers, which causes electrons and holes to be injected from opposite electrodes and move toward each other. When they meet, they recombine in the emissive region and release energy in the form of visible light through electroluminescence. Each pixel operates independently, meaning it can be switched on or off and controlled in brightness based on the amount of current applied. This direct light emission allows precise pixel-level control, resulting in fast response times, high contrast, and true black levels when no current is supplied to a pixel.
                           </p>
                       </>
                   )}


                   {activeTab === 'apps' && (
                       <>
                           <h2 className="oled-info__title">Applications</h2>
                           <p className="oled-info__desc">
                               OLED displays are used in many applications where good image quality, low power use, and flexible design are important. They are commonly used in consumer electronics; this includes smartphones, televisions, tablets, smartwatches, and computer monitors. They are also used in automotive systems, such as digital dashboards, infotainment screens, and head-up displays (HUDs); wearable devices and VR/AR systems; industrial control panels and instruments; and IoT smart home devices and low-power sensors.
                           </p>


                           <h2 className="oled-info__title">Performance Evaluation</h2>
                           <h3 className="oled-info__title">Advantages</h3>
                           <ul className="oled-info__desc">
                               <li>Thin and flexible design — can be under 1mm thick, supports bending/folding</li>
                               <li>Wide viewing angle (~180°) with minimal color/brightness shift</li>
                               <li>True blacks and infinite contrast ratio</li>
                               <li>Ultra-fast response time (microsecond range)</li>
                               <li>Energy efficient for dark or black content</li>
                               <li>Supports transparent and rollable display formats</li>
                           </ul>


                           <h3 className="oled-info__title">Limitations</h3>
                           <ul className="oled-info__desc">
                               <li>Shorter lifespan compared to LCD (~5,000 hours for some panels)</li>
                               <li>Higher manufacturing cost due to precision processes</li>
                               <li>Risk of permanent burn-in from static content</li>
                               <li>Potential brightness non-uniformity and color shift over time</li>
                           </ul>
                       </>
                   )}
                  
                   {activeTab === 'refs' && (
                       <>
                           <h2 className="oled-info__title">References</h2>
                           <ul className="oled-info__desc" style={{ lineHeight: '1.7', paddingLeft: '1.5rem' }}>
                               <li>Adrian. (2025). <em>OLED Display: key advantages and disadvantages</em>. AllPCB.</li>
                               <li><em>An introduction to OLED displays</em>. OLED-Info.</li>
                               <li>Avantama. (2019). <em>4 Current applications for OLED devices</em>. Avantama AG.</li>
                               <li>Avantama. (2020). <em>Advantages & Disadvantages of OLED technology</em>. Avantama AG.</li>
                               <li>Butts, J. (2024). <em>4 differences between OLED and QD-OLED</em>. XDA Developers.</li>
                               <li><em>OLED Displays and their applications</em>. Electronics For You.</li>
                               <li>Freudenrich, C. <em>How OLEDs Work</em>. HowStuffWorks.</li>
                               <li>Hill, B. (2025). <em>WOLED vs QD-OLED Monitors</em>. Tom’s Hardware.</li>
                               <li>Luke. (2024). <em>Exploring OLED Display: Advantages and applications</em>. Riverdi.</li>
                               <li><em>QD OLED vs OLED: What’s the difference?</em>. Philips.</li>
                               <li><em>What is an OLED display and how does it work</em>. Proculus Technologies.</li>
                               <li>Rocha, P. (2026). <em>QD-OLED vs. OLED Gaming Monitors</em>. ViewSonic Library.</li>
                               <li><em>The Complete Guide to OLED Displays</em>. RS Discovery Hub.</li>
                               <li><em>Organic Light Emitting Diodes</em>. Universal Display Corporation.</li>
                               <li>Williams, N. <em>History of OLEDs</em>. Ossila.</li>
                               <li>Woodford, C. (2022). <em>OLEDs and LEPs</em>. Explain That Stuff.</li>
                           </ul>
                       </>
                   )}
               </div>
           )}
       </div>
   );
}