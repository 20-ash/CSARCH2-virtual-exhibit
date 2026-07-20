# 🖥️ The Glass Canvas: How Screens Evolved

[Click to incremental readme](#incremental-readme)
---

## 👥 Group Members (Group 7)
*   **DE LEON, SOFIA YSABELA**
*   **GALVEZ, ANOUSHEH MONICK ROBENIOL**
*   **GUILLERMO, IAIN DRAEZEN SY**
*   **LEE, ASHLEY FIONA SANTOS**
*   **TIU, AVRAM NATHANIEL PAGUNTALAN**

## 🎯 Group Theme
**Understanding different display technologies and how they produce images on screen.**

## 🛠️ Tech Stack
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)

*   **Astro**: Project structure skeleton and optimized routing.
*   **React**: Interactive UI components and state management.
*   **MDX**: Dynamic, component-driven educational content.
*   **React Three Fiber & Drei**: High-performance 3D rendering and helper utilities for browser-based interaction.

---

## 📝 Project Description
An interactive educational platform designed to help users understand the different types of displays developed and how its components work together to deliver visuals to us. The platform covers key components such as why display screens were developed, the uses of each display type, and comparing them to each other. Users can explore detailed explanations, interactive visualizations, and dynamic content that demonstrate the role of each component and how the components work together to produce light and process it to produce images. The project is built using Astro for the application structure, React for interactive user interfaces, MDX for content-driven learning experiences, React Three Fiber (R3F) for 3d models, and Drei as a collection of helper functions for R3F.

---

## 🗺️ Exhibit Navigation
The platform is organized into the following logical sections:

1.  **Rationale**: Discusses why display technology was developed and what needs did it address.
2.  **Timeline**: A user will be presented with a long scroll timeline to choose which display tech they wish to learn more about. Each entry in the timeline will provide a year on when the screen became commercially available to the public along with a high-level overview on how each display type works and their applications.
3.  **The Cathode Ray Tube**: Discuss what a cathode ray tube is, its parts, and how it works. This section will also show its advantages and limitations, along with its applications in the past and present.
4.  **Plasma**: Similar to the Cathode Ray Tube, its origins, applications, and inner workings will be discussed. Will also cover its early and late use during its era along with its decline.
5.  **LCD Family**: Will mainly focus on its core principles of a liquid crystal layer, having two polarizing light filters, susceptibility to light bleed, power delivery, backlighting, and how the other variations either replace some of the components or build on top of it.
6.  **OLED Family**: Exploring its application in consumer electronics, IoT, embedded systems, industrial, and automotive.
7.  **MicroLED**: Currently an in development display screen type. Combines the strengths of LCD and OLED type screens.

---

## 🕹️ Interactive Elements

### 3D Component Explorer
*   Component descriptions will be displayed accordingly depending on the component the user clicks on the 3d model.
*   User can rotate the 3d model.
*   Shows animations to simulate how light passes from its source and is processed into colors.
*   Paragraph description next to the 3d model. Will update depending on the currently selected component.
*   The model should automatically zoom in. To the component the user wishes to know more about.

---

## 📖 Exhibition Content Outline

### Introduction
*   **The Rationale**: Why display screens were developed and the fundamental human need for visual data interfaces.
*   **The Timeline**: The evolutionary leap from analog tubes to microscopic LEDs.

### Legacy Display Technologies
*   **The Cathode Ray Tube (CRT)**: Principles of electron guns, vacuum tubes, and phosphor interaction.
*   **Plasma Displays**: The transition to flat panels using noble gases, UV light, and individual pixel cells.

### The LCD Architecture
*   **Liquid Crystal Displays (LCD)**: The mechanics of polarizing filters, liquid crystal layers, and backlight transmission.
*   **Improvements Overtime**: Rise of LED for backlight transmission, local dimming with MiniLED, and the quantum dot layer with QDLED.

### Modern & Emerging Innovations
*   **The OLED Family**: The shift to self-emitting pixels, organic compounds, and the elimination of backlights.
*   **MicroLED**: The synthesis of LCD and OLED strengths, utilizing microscopic LEDs for unparalleled brightness and contrast.

---

## 📷 Tentative Style Guide Snapshot
![Tentative Style Guide Snapshot](timeline.png)
![Tentative Style Guide Snapshot](component.png)

---

## <mark>📚 References</mark>
<mark>
* Absen. (2022, January 26). *Analysis of Micro LED large screen display technology Chip and encapsulation structure*. https://www.absen.com/analysis-of-micro-led-large-screen-display-technology-chip-and-encapsulation-structure
* Adrian. (2025, December 17). *OLED Display: key advantages and disadvantages*. https://www.allpcb.com/allelectrohub/oled-display-key-advantages-and-disadvantages
* Aethir. (2025, February 13). *AI applications using GPUs*. https://ecosystem.aethir.com/blog-posts/ai-applications-using-gpus-enhancing-computational-efficiency-and-performance
* Amano, Y., Yoshida, K., Shionoya, T., & Yokono, S. (1982). New dc plasma display panels and their applications. *Displays*, 3(4), 187–192. https://doi.org/10.1016/0141-9382(82)90001-4
* Amazon Web Services, Inc. (n.d.). *What’s the difference between GPUs and CPUs?* https://aws.amazon.com/compare/the-difference-between-gpus-cpus/
* Analog Devices. (n.d.). *CCFL characteristics*. https://www.analog.com/en/resources/design-notes/ccfl-characteristics.html
* Atwood, S. P. (2024, July 16). CRTs brought technology to life for a century. *Information Display*, 40(4), 40–41. https://doi.org/10.1002/msid.1505
* Avantama. (2019, January 28). *4 Current applications for OLED devices*. Avantama AG. https://avantama.com/current-applications-oled-devices/
* Avantama. (2020, March 10). *Advantages & Disadvantages of OLED technology*. Avantama AG. https://avantama.com/advantages-disadvantages-oled-technology/
* Babcock, A. (2025, December 4). *What is QD-OLED?: The pros and cons of QD-OLED TVs*. RTINGS.com. https://www.rtings.com/tv/learn/what-is-qd-oled
* Bailey, R. (2025, July 21). *GPU applications: What are the main applications for GPUs?* Atlantic.Net. https://www.atlantic.net/gpu-server-hosting/gpu-applications-what-are-the-main-applications-for-gpus/
* Bishop, G. D. (1977). The cathode-ray tube. *Electronics II*, 31–37. https://doi.org/10.1007/978-1-349-03178-8_3
* Boardman, C. M., & Deschamps, J. (1982). Plasma display panels have come of age. *Displays*, 3(3), 135–146. https://doi.org/10.1016/0141-9382(82)90151-2
* Britannica. (2026, May 15). *Liquid-crystal display*. https://www.britannica.com/technology/liquid-crystal-display
* Butts, J. (2024, October 4). *4 differences between OLED and QD-OLED*. XDA. https://www.xda-developers.com/4-differences-oled-qdoled/
* Caputo, A. C. (2014). DVS archiving and storage. In *Elsevier eBooks* (pp. 293–330). https://doi.org/10.1016/b978-0-12-420042-5.00009-5
* Caulfield, B. (2009, December 16). *What’s the difference between a CPU and a GPU?* NVIDIA Blog. https://blogs.nvidia.com/blog/whats-the-difference-between-a-cpu-and-a-gpu/
* CDW. (2025, January 22). *CPU vs. GPU: What’s the difference?* CDW Research Hub. https://www.cdw.com/content/cdw/en/articles/hardware/cpu-vs-gpu.html
* Cho, K., & Bahn, H. (2020). Performance analysis of thread block schedulers in GPGPU and its implications. *Applied Sciences*, 10(24), 9121. https://doi.org/10.3390/app10249121
* Clifton, N. J. (1948). *The cathode-ray tube typical applications*. https://www.worldradiohistory.com/Archive-Early-Radio-Assorted/Pavek-Collection/DuMont-Cathode-Ray-Tube-Typical-Applications-1948.pdf
* CMG Visuals. (2026, June 5) *What is a microLED display and why it’s superior to OLED*. https://www.cmgvisuals.com/led-screen-blog/what-is-a-microled-display-and-why-its-superior-to-oled
* Codecademy Team. (n.d.). *CPU vs GPU: What’s the difference and which one should you use?* https://www.codecademy.com/article/cpu-vs-gpu-whats-the-difference-and-which-one-should-you-use
* Computer Hope. (2025, February 12). *What is a video card?* https://www.computerhope.com/jargon/v/video-card.htm
* Corning Incorporated. (n.d.). *Liquid crystal display turns 50*. https://www.corning.com/worldwide/en/innovation/materials-science/glass/liquid-crystal-display-turns-50.html
* Delmic. (n.d). *MicroLED: the next revolution in display technology*. https://blog.delmic.com/microled-revolutionary-technology
* Deng, H. (2025, December 16). *Are LED backlit displays better than CCFL backlit displays?* - Blog - Rina Technology. https://www.rinalgp.com/blog/are-led-backlit-displays-better-than-ccfl-backlit-displays-2149717.html
* DevX. (2023, December 18). *Graphics card*. https://www.devx.com/terms/graphics-card/
* DigitalOcean. (2025, March 3). *What are GPUs useful for? 9 Key applications and emerging trends*. https://www.digitalocean.com/resources/articles/what-are-gpus-useful-for
* Dumitru, D., & Zwarts, M. (2002). Chapter 3 - Instrumentation. In *Electrodiagnostic Medicine* (pp. 69–97). Hanley & Belfus, Cop
* *Edge-lit vs Direct-lit LED Display: A Comprehensive Comparison*. (2026, June 17). https://www.visionledpro.com/news/edge-lit-vs-direct-lit-led-display.html
* Edwards, D., & Edwards, D. (2026, March 17). *This is why TV makers no longer use plasma panels after they were all the rage in the 2000s*. SBTech. https://tech.supercarblondie.com/why-tv-makers-no-longer-use-plasma-panels/
* Electronics For You. (2024, April 4). *OLED Displays and their applications | Learning Corner for Beginners*. Electronics for You – Official Site ElectronicsForU.com. https://www.electronicsforu.com/resources/oled-displays-applications
* Electronics For You. (2024, November 25). *LCD - Liquid Crystal Display Types, Working, Uses, Pros-Cons*. Electronics for You – Official Site ElectronicsForU.com. https://www.electronicsforu.com/technology-trends/learn-electronics/lcd-liquid-crystal-display-basics
* Fatahalian, K. (2009). *From Shader Code to a TeraFLOP: How shader cores work*. SIGGRAPH 2009. https://docslib.org/doc/10442978/from-shader-code-to-a-teraflop
* Freudenrich, C. (n.d.-b). *How OLEDs Work*. HowStuffWorks. https://electronics.howstuffworks.com/oled.htm
* Gd-Admin. (n.d.). *News - What are the applications of LCD display?* https://www.disenelec.com/news/what-are-the-applications-of-lcd-display/
* GeeksforGeeks. (2023, March 29). *Difference between graphics card and video card*. https://www.geeksforgeeks.org/computer-organization-architecture/different-between-graphics-card-and-video-card/
* Geeksforgeeks. (2025, July 23). *What is a video card?* https://www.geeksforgeeks.org/computer-organization-architecture/what-is-a-video-card/
* Glawion, A. (2022, April 27). *GPU vs graphics card vs video card: Are there any differences?* CGDirector. https://www.cgdirector.com/gpu-vs-graphics-card-vs-video-card/
* GreyB (2025, February 7). *Micro-LED precision fabrication*. https://xray.greyb.com/micro-leds/micro-led-display-fabrication
* Harding, S. (2021, February 26). *What is a FALD backlight? A basic definition*. Tom’s Hardware. https://www.tomshardware.com/reference/what-is-a-fald-backlight-a-basic-definition
* Harding, S., & Harding, S. (2022, June 25). *LCD vs. LED vs. Mini LED vs. OLED: A quick guide*. Ars Technica. https://arstechnica.com/gadgets/2022/06/lcd-vs-led-vs-mini-led-vs-oled-a-quick-guide/
* HowStuffWorks. (n.d.). *How LCDs work*. https://electronics.howstuffworks.com/lcd.htm
* HowStuffWorks. (n.d.). *How sunglasses work*. https://science.howstuffworks.com/innovation/everyday-innovations/sunglass.htm
* iambotcoder. (n.d.). *Cathode-Ray-Tube-* [Source code]. GitHub. https://github.com/iambotcoder/Cathode-Ray-Tube-
* Intel. (n.d.). *What is a GPU? Graphics processing units defined*. https://www.intel.com/content/www/us/en/products/docs/processors/what-is-a-gpu.html
* INTROSERV. (n.d.a). *Is there a difference between a GPU, a graphics card, and a video card?* https://introserv.com/blog/is-there-a-difference-between-a-gpu-a-graphics-card-and-a-video-card/
* INTROSERV. (n.d.b). *What are video cards used for, other than games?* https://introserv.com/blog/what-are-video-cards-used-for-other-than-games/
* Ischenko, I. (2025, October 10). *Understanding GPU architecture basics*. StarWind. https://www.starwindsoftware.com/blog/understanding-gpu-architecture-basics/
* Jaylin Jones. (2026, February 8). *GPUs: The workhorse behind modern computing*. DEV Community. https://dev.to/jaylinjones0/gpus-the-workhorse-behind-modern-computing-5930
* Jotrin Electronics. (2023, December 5). *Everything you need to know about voltage regulator module (VRM)*. Jotrin Electronics. https://www.jotrin.com/technology/details/voltage-regulator-module?srsltid=AfmBOopLL6TAeXdkY-hD3xqY_FhcqqZ5eGrPePbmk4UGaGhZ_v6b0qPC
* Kan, D., & Kan, D. (2026, June 18). *What is Quantum Dot Technology?* ViewSonic Library. https://www.viewsonic.com/library/gaming/what-is-quantum-dot-technology/#How_Do_Quantum_Dot_Displays_Work
* Kawamoto, H. (2012). *The history of liquid-crystal display and its industry*. In 2012 Third IEEE History of Electro-technology Conference (HISTELCON) (pp. 1–6). IEEE. https://doi.org/10.1109/HISTELCON.2012.6487587
* Kelsey, & Kelsey. (2025, May 1). *RGB and Color Depth*. Crystalfontz LCD Blog. https://www.crystalfontz.com/blog/rgb-and-color-depth/#:~:text=Each%20pixel%20of%20a%20TFT,of%20current%20at%20the%20subpixel
* Kenney, B. (2026, March 6). *Why did TV manufacturers stop using plasma panels?* BGR. https://www.bgr.com/2112457/why-did-tv-manufacturers-stop-using-plasma-panels/
* Ketchum, D. (2024, July 16). *The evolution of CRT monitor technology*. Electronicdesign.com; Electronic Design. https://www.electronicdesign.com/technologies/industrial/displays/article/55126442/thomas-electronics-the-evolution-of-cathode-ray-tube-crt-monitor-technology
* Kim, C.-H., Kwon, I.-E., Park, C.-H., Hwang, Y.-J., Bae, H.-S., Yu, B.-Y., Pyun, C.-H., & Hong, G.-Y. (2000). Phosphors for plasma display panels. *Journal of Alloys and Compounds*, 311(1), 33–39. https://doi.org/10.1016/S0925-8388(00)00856-2
* Kim, T. S., Ryu, J., Park, J., Liu, R., Choi, J., Kim, J., Hong, Y. J., Kim, D., & Shin, J. (2025). Future trends of display technology: micro-LEDs toward transparent, free-form, and near-eye displays. *Light Science & Applications*, 14(1), 335. https://doi.org/10.1038/s41377-025-02027-1
* Krewell, K. (2009, December 16). *What’s the difference between a CPU and a GPU?* NVIDIA Blog. https://blogs.nvidia.com/blog/whats-the-difference-between-a-cpu-and-a-gpu/
* Lenovo Philippines. (n.d.). *Video card: What is a video card?* https://www.lenovo.com/ph/en/glossary/video-card/?orgRef=https%253A%252F%252F
* Lenovo Philippines. (n.d.). *Everything you need to know about Cold Cathode fluorescent lamps*. https://www.lenovo.com/ph/en/glossary/ccfl/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOoocNuU5h6-b4ohY-z8N-YPL3HbKcfos-kQD_Y78p7i5Ay7CfT1j
* Lenovo US. (2023, May 28). *Everything you need to know about Cold Cathode fluorescent Lamps*. https://www.lenovo.com/us/en/glossary/ccfl/?orgRef=https%253A%252F%252Fwww.google.com%252F
* Leo. (2024, March 5). *Graphics card basics: Definition, functions, and evolution*. SZYUNZE. https://www.szyunze.com/graphics-card-basics-definition-functions-and-evolution/
* Lheureux, A. (2022). *A complete anatomy of a graphics card: Case study of the NVIDIA A100*. Paperspace Blog. https://blog.paperspace.com/a-complete-anatomy-of-a-graphics-card-case-study-of-the-nvidia-a100/
* Luke. (2024, May 20). *Exploring OLED Display: Advantages and applications*. Riverdi. https://riverdi.com/blog/exploring-oled-display-advantages-and-applications?srsltid=AfmBOopz33hjTo6LkKs4FW7xY_0iZnJDuhotTsexB8SIw3jsPHX2o5fa
* MicroLED Association. (2025). *MicroLED microdisplays soft-standard (Edition 2.0)*. https://www.microledassociation.com/wp-content/uploads/2025/02/MIA-MicroLED-standardization-microdisplays-2025-02.pdf
* MicroLED-Info. (n.d.). *What is MicroLED*. MicroLED-Info. https://www.microled-info.com/introduction
* Miles, S. (2026, April 12). *What is PDP Technology Plasma display panels explained*. Tech Faq. https://techfaq.co.uk/what-is-pdp-technology-plasma-display-panels-explained
* Mukherjee, S. (2024, December 25). *Understanding parallel computing: GPUs vs CPUs explained simply with role of CUDA*. DigitalOcean. https://www.digitalocean.com/community/tutorials/parallel-computing-gpu-vs-cpu-with-cuda
* OLED-Info. (n.d.). OLED-Info. *An introduction to OLED displays*. https://www.oled-info.com/oled-introduction
* Orient Display. (n.d.). *LCD backlights: LED, EL, and CCFL backlights*. https://orientdisplay.com/knowledge-base/parts-materials/lcd-backlights/led-el-and-ccfl-backlights/
* Panigrahi, K.K. (n.d.). *Difference between graphics card and video card*. TutorialsPoint. https://www.tutorialspoint.com/article/difference-between-graphics-card-and-video-card
* PatSnap Eureka. (2025, October 24.). *What Are OLED vs MicroLED’s Key Technical Challenges*. https://eureka.patsnap.com/report-oled-vs-microled-key-technical-challenges
* Pleshko, P., Apperley, N., Zimmerman, L. L., Pearson, K. A., Sherk, T. A., St. Pierre, E. J., Hairabedian, B., Bradney, F., & Foster, R. L. J. (1984). Design of a plasma flat panel large screen display for high volume manufacture. *Displays*, 5(1), 21–32. https://doi.org/10.1016/0141-9382(84)90116-1
* Plumb, T. (2025, April 21). *What are GPUs? Inside the processing power behind AI*. Network World. https://www.networkworld.com/article/3966130/what-are-gpus-inside-the-processing-power-behind-ai.html
* Philips. (2026, January 14). *QD OLED vs OLED: What’s the difference?* https://www.philips.co.uk/c-e/monitor-knowledge-library/oled-qd-oled/qd-oled-vs-oled-what-is-the-difference
* Proculustech. (n.d.). *What is an OLED display and how does it work: Find out*. Proculus Technologies Co., Ltd. https://www.proculustech.com/what-is-an-oled-display
* PTCLed. (2025, January 22). *MicroLED VS OLED VS Mini LED: Which Display is the Future*. https://www.ptcled.com/academy/microled-vs-oled-vs-miniled.html
* Rákos, D. (2021, January 25). *Understanding GPU caches*. RasterGrid. https://www.rastergrid.com/blog/gpu-tech/2021/01/understanding-gpu-caches
* RF Wireless World. (n.d.). *What is Micro LED: Advantages and Disadvantages*. https://www.rfwireless-world.com/terminology/micro-led-advantages-disadvantages
* Rocha, P. (2026, January 8). *What is QD-OLED? The Next Evolution in Gaming Monitors*. ViewSonic Library. https://www.viewsonic.com/library/gaming/what-is-qd-oled/
* Rocha, P. (2026, January 15). *QD-OLED vs. OLED Gaming Monitors: What’s the Difference?* ViewSonic Library. https://www.viewsonic.com/library/gaming/qd-oled-vs-oled-gaming-monitors-whats-the-difference/
* Romocean, M., Romocean, M., & Romocean, M. (2024, August 14). *LED 101: What is LED lighting made of*. TCP Lighting. https://www.tcpi.com/breaking-led-anatomy
* RTINGS.com. (2025, August 29). *Mini LED vs OLED: Understanding Different Monitor Technologies*. https://www.rtings.com/monitor/learn/mini-led-vs-oled
* Scale Computing. (2025, April 16). *GPU architecture explained: Structure, layers & performance*. https://www.scalecomputing.com/resources/understanding-gpu-architecture
* ScienceDirect. (2026). *Video graphic card*. https://www.sciencedirect.com/topics/computer-science/video-graphic-card
* ScienceDirect. (n.d.). *Plasma display panel*. In ScienceDirect Topics. https://www.sciencedirect.com/topics/engineering/plasma-display-panel
* Singh, N., Wang, J., & Li, J. (2016). Waste cathode rays tube: An assessment of global demand for processing. *Procedia Environmental Sciences*, 31, 465–474. https://doi.org/10.1016/j.proenv.2016.02.050
* Song, L., Yong, X., Zhang, P., Song, S., Chen, K., Yan, H., Sun, T., Lu, Q., Shi, H., Chen, Y., & Huang, Y. (2024). Recent progress of laser processing technology in micro-LED display manufacturing. *Optics & Laser Technology*, 178, Article 111710. https://doi.org/10.1016/j.optlastec.2024.111710
* Srinivasa, N. (2024, July 22). *Exploring the functions, components, and significance of graphics cards in modern computing*. Nitish’s Blog. https://nitishs.hashnode.dev/exploring-the-functions-components-and-significance-of-graphics-cards-in-modern-computing
* Srinivas, R. (2026, March 11). *Here’s why TV manufacturers stopped using plasma panels*. SlashGear. https://www.slashgear.com/2119826/why-tv-manufacturers-stopped-using-plasma-panels/
* RS. (2023, October 5). *The Complete Guide to OLED Displays*. RS Discovery Hub. https://twen.rs-online.com/web/content/discovery/ideas-and-advice/oled-displays-guide?srsltid=AfmBOopoYfOFaQ_qP3ovPFrVmiZ7nv4ycx_HgpVZu_yVBZX5FhrW9fCc
* Tutorialspoint. (2025). *Cathode ray tube in computer graphics*. Tutorialspoint.com. https://www.tutorialspoint.com/computer_graphics/computer_graphics_cathode_ray_tube.htm
* *The Fate of Plasma TVs: A Look into their Demise*. (n.d.). https://bboysllc.com/blog/the-fate-of-plasma-tvs--a-look-into-their-demise
* Universal Display Corporation. (n.d.). *Organic Light Emitting Diodes (OLEDs) - Universal Display Corporation*. https://oled.com/oleds/
* Veronis, G., Inan, U. S., & Pasko, V. P. (2000). Fundamental properties of inert gas mixtures for plasma display panels. *IEEE Transactions on Plasma Science*, 28(4), 1271–1279. https://www.ece.lsu.edu/gveronis/papers_web/tps00.pdf
* Weber, L. F., & Bitzer, D. L. (2006). History of the plasma display panel. *IEEE Transactions on Plasma Science*, 34(2), 268–278. https://doi.org/10.1109/TPS.2006.872440
* Wikipedia contributors. (2026, June 21). *Quantum dot display*. Wikipedia. https://en.wikipedia.org/wiki/Quantum_dot_display
* Williams, N. (n.d.). *History of OLEDs*. Ossila. https://www.ossila.com/pages/history-of-oleds
* Wilson, M. (2024, August 28). *What is VGA? Understanding video graphics array technology*. HP. https://www.hp.com/us-en/shop/tech-takes/what-is-vga-comprehensive-guide-video-graphics-array
* Woodford, C. (2022, September 1). *OLEDs (Organic LEDs) and LEPs (light-emitting polymers)*. Explain That Stuff. https://www.explainthatstuff.com/how-oleds-and-leps-work.html
</mark>

---

## <mark>AI Disclosure & Declaration</mark>

<mark>We hereby declare that we have used Artificial Intelligence (AI) tools in the preparation of this assignment.</mark>

<mark>We understand that while AI can assist in generating ideas, providing information, and suggesting edits, it is our responsibility to critically evaluate the accuracy and relevance of the content generated by AI.</mark>

<mark>Below, we provide specific details of how AI tools were used in our assignment:</mark>
<mark>
| <mark>Type of AI used</mark> | <mark>Purpose of using the AI</mark> | <mark>Description of AI contribution <br>*(Detail the extent to which AI contributed to the assignment, including specific sections or tasks where AI was used)*</mark> | <mark>Member’s contribution <br>*(Describe your own input and how you integrated AI-generated content into your work)*</mark> |
| :--- | :--- | :--- | :--- |
| <mark>**Generative AI (Gemini)**</mark> | <mark>Assist in the creation of the Interactive Models.</mark> | <mark>- Explain the syntax for the 2D CRT Model from a public GitHub repository.<br>- Assist in plotting the coordinates in the website.</mark> | <mark>- Adjusted the numerical values of the 2D CRT Model to improve its structure.<br>- Created and edited the necessary CSS elements to fit our own group’s visual.<br>- Adjusted the other CSS elements to improve the model’s visual and animation.<br>- Copied the code from a group member for the dynamic changing of content/text.</mark> | 
| <mark>**Generative AI OpenCode Big Pickle**</mark> | <mark>First time using mdx, react three fiber, astro, and the entire tech stack for this project. | <mark>- Asked AI what components should I be importing from my tech stack in order to perform my stated feature.<br>- Acted as a code debugger looking at my implementation for reasons why my CSS implementation was not working or why my 3d model was crashing from my implementation.<br>- Requested it to show how to implement some of the boilerplate code needed to make the 3d model work.<br>- Under guidance from AI, we wrote some of the logic in the LCD model needed to make it work.</mark> | <mark>- Adjusting the hardcoded numerical values 3d model canvas.<br>- Made the implementation for the timeline component as well as wrote the necessary CSS file to set up the look of the timeline.<br>- Copying the styling made by a different group member, setup the frontend wiring and states needed to have the frontend accept user interactions for the LCD page.<br>- Wrote the content alone for the LCD structure and implemented their dynamic changing on the frontend.<br>- Came up with the idea of dynamically changing text descriptions on the frontend and decided how the user interaction is supposed to go.</mark> | 
</mark>
---

## <mark>Incremental Readme</mark>

### <mark>July 1, 2026</mark>
*   <mark>Not much time was spent working on this project outside of inpsecting the layout of the project template for development.</mark>

### <mark>July 2, 2026</mark>
*   <mark>Majority of the content planning was already done during the proposal as well as an initial draft on what should the information be presented in the website.</mark>
*   <mark>Time was spent figuring out how routing works in Astro and basic syntax usage on the tech stack for 3d modelling.</mark>
*   <mark>Referencing the website design made during the proposal, the group decided to instead have the timeline be built off a reusable astro component with a line in a center to construct the full timeline of the project as a series of pieces.</mark>
*   <mark>The group decided that the timeline astro component should be a flex box with the picture of the display technology to the left, a long thin line in the center, and a column based flex box container to house the display technology label, it's description, and its clickable button for the future model viewer.</mark>
*   <mark>Fortunately most of the basic html and css skills taught during CCAPDEV were able to translate here directly, admittedly completing the component took longer that we'd like due to the constant fight with css in trying to get the positions of our elements working in relation to the existing template layout provided.</mark>

### <mark>July 3, 2026</mark>
*   <mark>By the time the timeline component was finished is when we finally got to finding our image assets for the timeline and starting encoding the textual information about our different display technologies from our draft.</mark>
*   <mark>Most of the time spent during this day was on working with the 3d models themselves and how exactly to design the interactive controls and dynamic text descriptions for the different display components.</mark>
*   <mark>Around this time with a tester webpage, the group was able to successfully render a 3d model for the lcd display without any interactions or textual information yet outside of the rotation controls.</mark>
*   <mark>We had to look back at our website design for the model webpage since we noticed a problem in our original design of stacking buttons vertically. It didn't look good and doesn't scale well given each display technology would have different categories and groupings of interactions based on our content.</mark>
*   <mark>Fortunately one of the group members finished crafting the full design of the model viewer webpage accounting for the scaling of different buttons. This was the design implemented by the CRT model webpage. This design was then copied for the rest of the models.</mark>
*   <mark>The LCD model was then adapted to the style CRT model uses. This is when we realized we can finally implement our idea of being able to click on a component on a model and it gets highlighted and dynamically updates our textbox to reflect the selected component.</mark>
*   <mark>By the end of this day, the LCD model accomplished the implementation of some interactions and animations.</mark>

### <mark>July 4, 2026</mark>
*   <mark>This time was spent to refine the initial content draft for each display tecnology. Plasma, OLED, and MicroLED received revisions to the length of their content in a separate google docs to better reflect how to divide its information across the different textboxes present in our website.</mark>
*   <mark>This is around the time OLED began making their own 3d model implementation referencing the works of CRT and LCD to setup. Some interactions with OLED was accomplished around this time period.</mark>
*   <mark>Here, LCD finished its interactions ranging from light simulation, selectable components, and swapping out meshes to match the current selected backlighting.</mark>
*   <mark>The group then contemplated how to fit a good chunk of the content written in our draft to convey the information needed about the different display technologies accounting for the limited real estate in the webpages.</mark>

### <mark>July 5, 2026</mark>
*   <mark>A design decision was made to better utilize the screen space for interactive buttons. Buttons categories were lined up in vertically but the buttons belonging into each category were lined up horizontally. This change enabled more horizontal room for the dynamic textbox and model living in their respective webpages.</mark>
*   <mark>Most time was spent encoding and refining the information to be presented in the website. The LCD model at this time accomplished its all of its current features after a lengthy battle on how to have the light beam simulation properly fade in and fade out at the correct positions.</mark>
*   <mark>LCD model ran into a problem with its current design on how to implement FALD. Currently, FALD will be implemented for the final website submission instead.</mark>
*   <mark>The OLED model accomplished finishing its own features and dynamic text content around this time.</mark>

### <mark>July 6, 2026</mark>
*   <mark>The team prepared to deploy the current website. Some issues were experienced in attempting to deploy the website due to the way the astro config file's base path is set against the vercel's way of setting its own base path.</mark>
*   <mark>After looking through how the provided ExhibitLayout asto components does its dynamic url, modifications were made to the astro config file to dynamically set the base url of the routes, recognizing when is it in deployment and when is it in production.</mark>
*   <mark>The team is considering implementing a new read more pop up feature on the frontend to resolve the dilemma on not being limited from the amount of textual information we can present on screen.</mark>

### <mark>July 19, 2026</mark>
*   <mark>Time was spent finding inspiration online and ready made UI design components to be implemented on the website.</mark>
*   <mark>After selecting premade UI components online. They were implemented on each display technology subpage by creasing a new css file to override the designs provided by the template global css.</mark>
*   <mark>Team deliberated on adding another interactive element and additional content in the form of a short quiz and page subtabs.</mark>

### <mark>July 20, 2026</mark>
*   <mark>Team decided that only some display technologies will contain subtabs on account of the width of information being technology dependent.</mark>
*   <mark>Troubleshooting why the github deployment does not seem to implement changes we make on new pushes.</mark>