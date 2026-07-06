# <mark>🖥️ The Glass Canvas: How Screens Evolved</mark>

[Click to incremental readme](#incremental-readme)
---

## 👥 Group Members (Group 7)
*   **DE LEON, SOFIA YSABELA**
*   **GALVEZ, ANOUSHEH MONICK ROBENIOL**
*   **GUILLERMO, IAIN DRAEZEN SY**
*   **LEE, ASHLEY FIONA SANTOS**
*   **TIU, AVRAM NATHANIEL PAGUNTALAN**

## 🎯 Group Theme
<mark>**Understanding different display technologies and how they produce images on screen.**</mark>

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
<mark>An interactive educational platform designed to help users understand the different types of displays developed and how its components work together to deliver visuals to us. The platform covers key components such as why display screens were developed, the uses of each display type, and comparing them to each other. Users can explore detailed explanations, interactive visualizations, and dynamic content that demonstrate the role of each component and how the components work together to produce light and process it to produce images.</mark> The project is built using Astro for the application structure, React for interactive user interfaces, MDX for content-driven learning experiences, React Three Fiber (R3F) for 3d models, and Drei as a collection of helper functions for R3F.

---

## 🗺️ Exhibit Navigation
The platform is organized into the following logical sections:

1.  <mark>**Rationale**: Discusses why display technology was developed and what needs did it address.</mark>
2.  <mark>**Timeline**: A user will be presented with a long scroll timeline to choose which display tech they wish to learn more about. Each entry in the timeline will provide a year on when the screen became commercially available to the public along with a high-level overview on how each display type works and their applications.</mark>
3.  <mark>**The Cathode Ray Tube**: Discuss what a cathode ray tube is, its parts, and how it works. This section will also show its advantages and limitations, along with its applications in the past and present.</mark>
4.  <mark>**Plasma**: Similar to the Cathode Ray Tube, its origins, applications, and inner workings will be discussed. Will also cover its early and late use during its era along with its decline.</mark>
5.  <mark>**LCD Family**: Will mainly focus on its core principles of a liquid crystal layer, having two polarizing light filters, susceptibility to light bleed, power delivery, backlighting, and how the other variations either replace some of the components or build on top of it.</mark>
6.  <mark>**OLED Family**: Exploring its application in consumer electronics, IoT, embedded systems, industrial, and automotive.</mark>
7.  <mark>**MicroLED**: Currently an in development display screen type. Combines the strengths of LCD and OLED type screens.</mark>

---

## 🕹️ Interactive Elements

### 3D Component Explorer
*   Component descriptions will be displayed accordingly depending on the component the user clicks on the 3d model.
*   User can rotate the 3d model.
*   <mark>Shows animations to simulate how light passes from its source and is processed into colors.</mark>
*   Paragraph description next to the 3d model. Will update depending on the currently selected component.
*   The model should automatically zoom in. To the component the user wishes to know more about.

---

## 📖 Exhibition Content Outline

### Introduction
*   <mark>**The Rationale**: Why display screens were developed and the fundamental human need for visual data interfaces.</mark>
*   <mark>**The Timeline**: The evolutionary leap from analog tubes to microscopic LEDs.</mark>

### <mark>Legacy Display Technologies</mark>
*   <mark>**The Cathode Ray Tube (CRT)**: Principles of electron guns, vacuum tubes, and phosphor interaction.</mark>
*   <mark>**Plasma Displays**: The transition to flat panels using noble gases, UV light, and individual pixel cells.</mark>

### <mark>The LCD Architecture</mark>
*   <mark>**Liquid Crystal Displays (LCD)**: The mechanics of polarizing filters, liquid crystal layers, and backlight transmission.</mark>
*   <mark>**Improvements Overtime**: Rise of LED for backlight transmission, local dimming with MiniLED, and the quantum dot layer with QDLED.</mark>

### <mark>Modern & Emerging Innovations</mark>
*   <mark>**The OLED Family**: The shift to self-emitting pixels, organic compounds, and the elimination of backlights.</mark>
*   <mark>**MicroLED**: The synthesis of LCD and OLED strengths, utilizing microscopic LEDs for unparalleled brightness and contrast.</mark>

---

## <mark>📷 Tentative Style Guide Snapshot</mark>
<mark>![Tentative Style Guide Snapshot](timeline.png)</mark>
<mark>![Tentative Style Guide Snapshot](component.png)</mark>

---

## Incremental Readme

### July 1, 2026
*   Not much time was spent working on this project outside of inpsecting the layout of the project template for development.

### July 2, 2026
*   Majority of the content planning was already done during the proposal as well as an initial draft on what should the information be presented in the website.
*   Time was spent figuring out how routing works in Astro and basic syntax usage on the tech stack for 3d modelling.
*   Referencing the website design made during the proposal, the group decided to instead have the timeline be built off a reusable astro component with a line in a center to construct the full timeline of the project as a series of pieces.
*   The group decided that the timeline astro component should be a flex box with the picture of the display technology to the left, a long thin line in the center, and a column based flex box container to house the display technology label, it's description, and its clickable button for the future model viewer.
*   Fortunately most of the basic html and css skills taught during CCAPDEV were able to translate here directly, admittedly completing the component took longer that we'd like due to the constant fight with css in trying to get the positions of our elements working in relation to the existing template layout provided.

### July 3, 2026
*   By the time the timeline component was finished is when we finally got to finding our image assets for the timeline and starting encoding the textual information about our different display technologies from our draft.
*   Most of the time spent during this day was on working with the 3d models themselves and how exactly to design the interactive controls and dynamic text descriptions for the different display components.
*   Around this time with a tester webpage, the group was able to successfully render a 3d model for the lcd display without any interactions or textual information yet outside of the rotation controls.
*   We had to look back at our website design for the model webpage since we noticed a problem in our original design of stacking buttons vertically. It didn't look good and doesn't scale well given each display technology would have different categories and groupings of interactions based on our content.
*   Fortunately one of the group members finished crafting the full design of the model viewer webpage accounting for the scaling of different buttons. This was the design implemented by the CRT model webpage. This design was then copied for the rest of the models.
*   The LCD model was then adapted to the style CRT model uses. This is when we realized we can finally implement our idea of being able to click on a component on a model and it gets highlighted and dynamically updates our textbox to reflect the selected component.
*   By the end of this day, the LCD model accomplished the implementation of some interactions and animations.

### July 4, 2026
*   This time was spent to refine the initial content draft for each display tecnology. Plasma, OLED, and MicroLED received revisions to the length of their content in a separate google docs to better reflect how to divide its information across the different textboxes present in our website.
*   This is around the time OLED began making their own 3d model implementation referencing the works of CRT and LCD to setup. Some interactions with OLED was accomplished around this time period.
*   Here, LCD finished its interactions ranging from light simulation, selectable components, and swapping out meshes to match the current selected backlighting.
*   The group then contemplated how to fit a good chunk of the content written in our draft to convey the information needed about the different display technologies accounting for the limited real estate in the webpages.

### July 5, 2026
*   A design decision was made to better utilize the screen space for interactive buttons. Buttons categories were lined up in vertically but the buttons belonging into each category were lined up horizontally. This change enabled more horizontal room for the dynamic textbox and model living in their respective webpages.
*   Most time was spent encoding and refining the information to be presented in the website. The LCD model at this time accomplished its all of its current features after a lengthy battle on how to have the light beam simulation properly fade in and fade out at the correct positions.
*   LCD model ran into a problem with its current design on how to implement FALD. Currently, FALD will be implemented for the final website submission instead.
*   The OLED model accomplished finishing its own features and dynamic text content around this time.

### July 6, 2026
*   The team prepared to deploy the current website. Some issues were experienced in attempting to deploy the website due to the way the astro config file's base path is set against the vercel's way of setting its own base path.
*   After looking through how the provided ExhibitLayout asto components does its dynamic url, modifications were made to the astro config file to dynamically set the base url of the routes, recognizing when is it in deployment and when is it in production.
*   The team is considering implementing a new read more pop up feature on the frontend to resolve the dilemma on not being limited from the amount of textual information we can present on screen.