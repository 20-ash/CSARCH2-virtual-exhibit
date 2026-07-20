import LcdModel from "./lcd_model.jsx";
import React, { useState, useEffect, useRef } from "react";
import '../styles/modelo.css';
import '../styles/pagebg.css';
import '../styles/era.css';

const BASE_URL = import.meta.env.BASE_URL || "/";

const PARTS = [
    {
        id: "crystal",
        label: "Liquid Crystal Layer",
        description:
            "A material with the properties of taking the shape of its container like liquid and having its modecules be structured in a common pattern as seen with crystals.",
        processLCDDescription:
            "Once electric current is delivered into the crystal layer, it's individual molecules change orientation. This gives the liquid crystal layer the ability to act as a steering wheel as the angle of the light passing through it changes with the molecules' orientation. In practice, this means the liquid crystal layer determines the brightness of a display."
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
            "Displays utilizing MiniLED typically pack more bulbs into the backlight panel compared to their LED counterparts. The primary advantage of this backlight is better contrast and less bloom, granted the display supports local dimming."
    },
    {
        id: "firstfilter",
        label: "First Polarizing Filter",
        description:
            "The layer that typically sits close to the backlight source. This layer utilizes a chemical film applied to a piece of plastic. This film has the property of absorbing light waves.",
        processLCDDescription:
            "This layer's role is to filter lightwaves that match the angle of the film's orientation. Lightwaves that run parallel to the film are absorbed while the rest get to pass through."
    },
    {
        id: "secondfilter",
        label: "Second polarizing Filter",
        description:
            "This layer shares the same composition as the first polarizing filter. Where the second polairizing filter differs is the orientation of its chemical film. It's positioned to be perpendicular to that of the first polarizing filter.",
        processLCDDescription:
            "The second polarizing filter acts as the layer that blocks or let light pass through into the RGB filters depending on their angle from the liquid crystal layer."
    },
    {
        id: "rgb",
        label: "RGB Color Filters",
        description:
            "The RGB color filters are components present in every pixel on a display. These are the red, green, and blue subpixels. Eacn subpixel owns a transistor.",
        processLCDDescription:
            "If light is able to pass through the second polarizing filter, different combinations of electric current are then applied to change the structure of the subpixels. These differing structures determine how much light gets to pass into each subpixel and mix together to make the target color."
    },
    {
        id: "qdled",
        label: "Quantum Dot Light Emitting Diode (QDLED)",
        description:
            "This backlight still uses LED bulbs similar to LED and MiniLED displays. However, QDLED displays instead exchange white light for blue light. They also introduce a new quantum dot layer in between the backlight panel and the first polarizing filter.",
        processLCDDescription:
            "When blue light hits the quantum dot layer, some waves pass through as is resulting in pure blue light, others are transformed into pure red and pure green. Thanks to this, once the light reaches the color filters, the resulting pixels produce more accurate and vibrant colors."
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

const TABS = [
    { id: "model", label: "Model" },
    { id: "quiz", label: "Quiz Challenge" }
];

const QUESTION_POOL = [
    {
        question: "What does LCD stand for?",
        options: ["Liquid Crystal Display", "Light Crystal Diode", "Liquid Cathode Display", "Lighting Contrast Display"],
        correct: 0
    },
    {
        question: "Which layer acts as a light valve in an LCD?",
        options: ["Polarizing Filter", "Liquid Crystal Layer", "RGB Color Filter", "Backlight"],
        correct: 1
    },
    {
        question: "What type of backlight was commonly used in older LCD monitors?",
        options: ["LED", "MiniLED", "CCFL", "QDLED"],
        correct: 2
    },
    {
        question: "Which backlight technology uses quantum dots to convert blue light?",
        options: ["CCFL", "LED", "MiniLED", "QDLED"],
        correct: 3
    },
    {
        question: "What is the main advantage of LED backlighting over CCFL?",
        options: ["Lower cost", "Higher brightness and efficiency", "Thicker display", "Longer lifespan"],
        correct: 1
    },
    {
        question: "How many polarizing filters does a typical LCD have?",
        options: ["One", "Two", "Three", "Four"],
        correct: 1
    },
    {
        question: "What is the role of the first polarizing filter in an LCD?",
        options: ["Block all light", "Convert light to color", "Filter light waves at a specific angle", "Amplify brightness"],
        correct: 2
    },
    {
        question: "Which LCD backlight type places bulbs only at the edges of the panel?",
        options: ["Direct-lit", "Edge-lit", "FALD", "Full-array"],
        correct: 1
    },
    {
        question: "What does MiniLED improve compared to standard LED backlighting?",
        options: ["Color accuracy", "Brightness only", "Contrast and reduced bloom", "Response time"],
        correct: 2
    },
    {
        question: "True or False: LCD pixels are self-emissive.",
        options: ["True", "False"],
        correct: 1
    },
    {
        question: "What color light do QDLED backlights produce?",
        options: ["White", "Red", "Blue", "Green"],
        correct: 2
    },
    {
        question: "What is a key disadvantage of CCFL backlighting?",
        options: ["Poor color accuracy", "Requires bulky displays", "High power consumption", "Short lifespan"],
        correct: 1
    },
    {
        question: "What determines pixel brightness in an LCD display?",
        options: ["Backlight intensity", "RGB color filters", "Liquid crystal orientation", "Polarizing filter angle"],
        correct: 2
    },
    {
        question: "Which backlight type typically uses a light guide plate?",
        options: ["Direct-lit", "Edge-lit", "FALD", "CCFL"],
        correct: 1
    },
    {
        question: "What happens when the liquid crystal molecules reorient under electric current?",
        options: ["They emit light", "The light angle passing through changes", "The display turns off", "Color is filtered"],
        correct: 1
    },
];

const playSound = (soundType) => {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const volume = audioContext.createGain();

        oscillator.connect(volume);
        volume.connect(audioContext.destination);

        if (soundType === "correct") {
            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);

            volume.gain.setValueAtTime(0.5, audioContext.currentTime);
            volume.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);

        } else if (soundType === "wrong") {
            oscillator.type = "triangle";
            oscillator.frequency.setValueAtTime(311.13, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(220, audioContext.currentTime + 0.15);

            volume.gain.setValueAtTime(0.45, audioContext.currentTime);
            volume.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            
        } else if (soundType === "complete") {
                const melody = [523.25, 587.33, 659.25, 783.99, 1046.5];

                melody.forEach((note, index) => {
                    const noteOsc = audioContext.createOscillator();
                    const noteVolume = audioContext.createGain();

                    noteOsc.connect(noteVolume);
                    noteVolume.connect(audioContext.destination);

                    noteOsc.type = "sine";
                    noteOsc.frequency.value = note;

                    noteVolume.gain.setValueAtTime(0.4, audioContext.currentTime + index * 0.12);
                    noteVolume.gain.exponentialRampToValueAtTime(
                    0.01,
                    audioContext.currentTime + index * 0.12 + 0.5
                    );

                    noteOsc.start(audioContext.currentTime + index * 0.12);
                    noteOsc.stop(audioContext.currentTime + index * 0.12 + 0.5);
                });
             }
        } catch (err) {
    }
};

const getRandomQuestions = (count) => {
  const shuffled = [...QUESTION_POOL].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function LcdViewer() {
    const [selectedPart, setSelectedPart] = useState('ccfl');
    const [backlight, setBacklight] = useState('ccfl');     
    const [layout, setLayout] = useState('direct-lit');    
    const [animateLight, setAnimateLight] = useState(false);
    const activeBtn = (current, target) =>
        `btn ${current === target ? 'active' : ''}`;
    const layoutInfo = lightType.find(l => l.id === layout.replace('-lit', '')) || lightType[0];
    const activeInfo = PARTS.find((p) => p.id === selectedPart) || PARTS[0];

    const [activeTab, setActiveTab] = useState('model');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState([]);
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animFrameRef = useRef(null);

    useEffect(() => {
        if (activeTab === 'quiz') {
            setQuizQuestions(getRandomQuestions(5));
        }
    }, [activeTab]);

    const handleAnswer = (index) => {
        setSelectedAnswer(index);
        const isCorrect = index === quizQuestions[currentQuestion].correct;
        playSound(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) setScore(prev => prev + 1);

        setTimeout(() => {
            if (currentQuestion < quizQuestions.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer(null);
            } else {
                setQuizComplete(true);
                playSound('complete');
            }
        }, 1200);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setQuizComplete(false);
        setQuizQuestions(getRandomQuestions(5));
        particlesRef.current = [];
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };

    useEffect(() => {
        if (!quizComplete || score !== quizQuestions.length || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const colors = ['#5076a7', '#9f7aea', '#f56565', '#48bb78', '#ecc94bd6', '#ed64a6'];

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        for (let i = 0; i < 180; i++) {
            particlesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * -canvas.height,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                speedX: (Math.random() - 0.5) * 4,
                speedY: Math.random() * 3 + 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 8
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesRef.current = particlesRef.current.filter(p => p.y < canvas.height + 20);

            particlesRef.current.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                p.rotation += p.rotationSpeed;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);

                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            });

            if (particlesRef.current.length > 0) {
                animFrameRef.current = requestAnimationFrame(animate);
            }
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [quizComplete, score, quizQuestions.length]);

    return (
        <div>
            <div className="bg"></div>
            <div className="back-button-container" style={{ padding: '0.5rem' }}>
                <a href={`${BASE_URL}/displays`} className="link-pill lower">
                    ← Go Back
                </a>
            </div>

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
                        <p>
                            💡 Try interacting with the model below!
                        </p>
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
                        </div>  
                        <div className="controls">   
                            <span>Light:</span>         
                            <button className={activeBtn(animateLight, true)} onClick={() => setAnimateLight(!animateLight)}>
                                {animateLight ? 'Stop Light' : 'Animate Light'}
                            </button>
                        </div> 
                            

                        <LcdModel backlightType={backlight} layout={layout} animateLight={animateLight}
                            selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
                        <p>
                            Rotate and click on one of the layers for more info.
                        </p>
                    </div>
                </div>
            ) : (
                <div style={{ padding: '1rem' }}>
                    {activeTab === 'quiz' && (
                        <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>
                            <h2 className="lcd-info__title">LCD Quiz Challenge</h2>
                            <p className="lcd-info__desc">
                                Test what you've learned about LCD technology. Answer all 5 questions to get your score.
                                <br /><br />
                                Turn your volume up for the full experience.
                            </p>

                            {!quizComplete && quizQuestions.length > 0 ? (
                                <div style={{ marginTop: '2rem' }}>
                                    <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                                        Question {currentQuestion + 1} of {quizQuestions.length}
                                    </div>

                                    <h3 className="lcd-info__title" style={{ marginBottom: '1.5rem' }}>
                                        {quizQuestions[currentQuestion].question}
                                    </h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {quizQuestions[currentQuestion].options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleAnswer(index)}
                                                disabled={selectedAnswer !== null}
                                                style={{
                                                    padding: '0.85rem 1.25rem',
                                                    textAlign: 'left',
                                                    borderRadius: '8px',
                                                    border: '2px solid #ddd',
                                                    background: selectedAnswer === null
                                                        ? 'white'
                                                        : index === quizQuestions[currentQuestion].correct
                                                            ? '#d4edda'
                                                            : selectedAnswer === index
                                                                ? '#f8d7da'
                                                                : 'white',
                                                    borderColor: selectedAnswer === null
                                                        ? '#ddd'
                                                        : index === quizQuestions[currentQuestion].correct
                                                            ? '#28a745'
                                                            : selectedAnswer === index
                                                                ? '#dc3545'
                                                                : '#ddd',
                                                    cursor: selectedAnswer === null ? 'pointer' : 'default',
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : quizComplete ? (
                                <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2.5rem', borderRadius: '12px', background: 'rgba(80, 118, 167, 0.08)', position: 'relative', overflow: 'hidden', border: '3px solid #5076a7' }}>
                                    {score === quizQuestions.length && (
                                        <canvas
                                            ref={canvasRef}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                pointerEvents: 'none'
                                            }}
                                        />
                                    )}

                                    <h3 className="lcd-info__title" style={{ animation: 'bounceIn 0.6s ease-out', fontSize: '2.2rem', fontWeight: '900', position: 'relative', zIndex: 2 }}>🎉 QUIZ COMPLETE! 🎉</h3>

                                    <p style={{
                                        fontSize: '4rem',
                                        fontWeight: '900',
                                        margin: '1.5rem 0',
                                        color: '#5076a7',
                                        animation: 'bounceIn 0.8s ease-out 0.2s both',
                                        letterSpacing: '2px',
                                        textShadow: '0 4px 12px rgba(80, 118, 167, 0.3)',
                                        position: 'relative',
                                        zIndex: 2
                                    }}>
                                        {score} / {quizQuestions.length}
                                    </p>

                                    <p className="lcd-info__desc" style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        animation: 'fadeUp 0.8s ease-out 0.4s both',
                                        lineHeight: '1.6',
                                        position: 'relative',
                                        zIndex: 2
                                    }}>
                                        {score === 5 ? "PERFECT SCORE! YOU'RE AN LCD EXPERT!"
                                         : score >= 3 ? "AWESOME JOB! YOU KNOW YOUR LCD STUFF!"
                                         : "NICE TRY! EXPLORE THE TABS AGAIN AND CHALLENGE YOURSELF ONCE MORE!"}
                                    </p>

                                    <button
                                        onClick={resetQuiz}
                                        className="btn"
                                        style={{ marginTop: '2rem', fontSize: '1.1rem', padding: '0.8rem 2rem', animation: 'fadeUp 0.8s ease-out 0.6s both', position: 'relative', zIndex: 2 }}
                                    >
                                        TRY AGAIN
                                    </button>
                                </div>
                            ) : (
                                <p className="lcd-info__desc" style={{ textAlign: 'center', marginTop: '2rem' }}>Loading quiz...</p>
                            )}
                        </div>
                    )}

                </div>
            )}
        </div>
    );
}