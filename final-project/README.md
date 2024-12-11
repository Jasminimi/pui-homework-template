<mark>**Note that this document order from FP4 -> FP1**</mark>

<mark>Please sign up for the study</mark> at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 


## Part 1: Website Description

* Purpose of the Website  
The purpose of this website is to showcase my portfolio as a UX and graphic designer, highlighting my skills, creative projects, and design process. It serves as a personal branding tool, helping me present my work to potential employers, clients, or collaborators. The website emphasizes accessibility, creativity, and responsiveness, ensuring a positive experience for all users.

* Target Audience  
The primary target audience includes hiring managers, design professionals, and recruiters in the UX/UI and graphic design industries. Secondary audiences are fellow designers, educators, and students who may seek inspiration or collaboration opportunities. The website also caters to individuals interested in my unique perspective on design and innovation.

* Information Conveyed  
The website provides a comprehensive view of my professional journey, including my projects, design philosophies, and the tools I use. Each project is presented with clear explanations, high-quality visuals, and descriptions of the problem-solving approaches applied. Additionally, the site includes essential information like my resume, contact details, and any awards or recognitions, offering a complete picture of my capabilities.

* Engagement and Interest  
The website is designed to be visually compelling and interactive. Features like dynamic animations created with GSAP, accessible navigation using the UserWay widget, and a custom cursor enhance the user experience. Each project section includes engaging visuals, including inspiration boards and final deliverables, providing an immersive storytelling experience. Interactive elements such as hover effects, animations, and a clean, modern layout ensure the content is both engaging and easy to navigate. The website’s commitment to responsive design guarantees a seamless experience across devices, making it appealing and functional for a diverse audience.

* Future Improvements  
Currently, three out of the four featured projects are marked as "Coming Soon." This is because the final deliverables for those projects are expected to be completed this week. Once finalized, I plan to update the portfolio with high-resolution visuals and detailed descriptions of these projects. This will enhance the website’s comprehensiveness and provide a complete showcase of my design capabilities. Additional improvements, such as integrating dynamic data or API-driven content, may also be implemented to keep the portfolio fresh and relevant.

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Landing on the Homepage
Interaction Type: Automatic
What happens: The user lands on the homepage and sees the header navigation, a dynamic introduction section, and interactive project thumbnails.
How to reproduce: Open the website in a browser and observe the responsive layout and animations triggered on page load.

2. Navigating Between Pages
Interaction Type: Click
What happens: The user clicks on navigation links in the header (About, Projects, or Resume) to move between different pages.
How to reproduce: Click any navigation link and confirm that the linked page loads with its respective content.

3. Viewing Project Details
Interaction Type: Hover & Click
What happens: The user hovers over a project thumbnail to reveal its title and an animation effect. Clicking on the project opens its detailed page.
How to reproduce:
Hover over any project thumbnail on the homepage to observe animations (e.g., zoom or text highlight).
Click on a thumbnail to open its detail page.

4. Scrolling Through Content
Interaction Type: Scroll
What happens: The user scrolls down to view sections like the inspiration board, project gallery, or footer.
How to reproduce: Use the mouse wheel, trackpad, or scrollbar to scroll through the homepage or other content-heavy pages.

5. Interactive Cursor Movement
Interaction Type: Mouse Movement
What happens: The custom cursor follows the user’s mouse movements, changing size or color when hovering over interactive elements.
How to reproduce: Move the cursor over clickable elements like links or buttons to observe changes in cursor behavior.

6. Accessibility Widget
Interaction Type: Click
What happens: The user clicks on the accessibility widget (powered by UserWay) to enable features like text resizing or color adjustments.
How to reproduce: Locate the widget icon (usually in the corner) and click it to open the accessibility menu.

7. Viewing "Coming Soon" Projects
Interaction Type: Hover
What happens: When the user hovers over a “Coming Soon” project, the title or tooltip indicates that more details will be added soon.
How to reproduce: Hover over any project marked as “Coming Soon” on the project gallery.

8. Exploring Animations
Interaction Type: Hover & Click
What happens: Dynamic animations (e.g., GSAP effects) trigger when the user interacts with buttons or navigates between sections.
How to reproduce:
Hover over navigation links to observe hover effects.
Scroll or interact with buttons to see animations applied to elements.

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Name of Tool: GSAP (GreenSock Animation Platform)
Why did you choose to use it over other alternatives?
GSAP provides highly customizable animations with exceptional performance compared to alternatives like CSS animations. Its versatility and ease of integration with JavaScript make it ideal for creating dynamic, responsive animations.
How you used it?
GSAP was used to animate the custom cursor and add hover effects to interactive elements, such as navigation links and project thumbnails. These animations were applied to enhance visual engagement and smooth transitions.
What does it add to your website?
GSAP brings polished, professional animations that improve interactivity and user engagement. It ensures the website feels modern and visually appealing without compromising performance.

2. Name of Tool: UserWay Accessibility Widget
Why did you choose to use it over other alternatives?
UserWay is a robust, ready-made solution that ensures WCAG compliance and accessibility without extensive custom coding. It offers essential accessibility features like text resizing, contrast adjustments, and screen reader compatibility in one package.
How you used it?
The UserWay widget was added via a script to the website, providing accessibility features for users who need additional support. It allows visitors to customize their experience according to their needs.
What does it add to your website?
The widget ensures the website is inclusive and accessible to a wider audience, enhancing usability for individuals with disabilities. It helps maintain compliance with accessibility standards effortlessly.
## Part 4: Design Iteration

During the design and development of my portfolio website, I made several iterations to improve user experience and visual appeal. Initially, I had a static layout with basic project links, but during implementation, I realized the importance of making the design more interactive. I incorporated animations using GSAP to make the website feel more dynamic and engaging, such as animating the custom cursor and adding hover effects to project thumbnails. Additionally, I adjusted the layout to be more responsive by refining the navigation and grid systems, ensuring that the website performs well on both large screens and mobile devices. I also enhanced the accessibility features by integrating the UserWay widget, ensuring that users with disabilities have a seamless experience. These changes were made to not only improve the website’s functionality but also to create a visually appealing, interactive, and inclusive user interface.

## Part 5: Implementation Challenge

WOne of the main challenges was ensuring that the website remained responsive across different devices while maintaining its design integrity. Creating smooth animations with GSAP and integrating the UserWay accessibility widget required careful attention to avoid conflicts and maintain performance. Additionally, managing project placeholders for "Coming Soon" sections while keeping the user interface engaging was another hurdle, as it required balancing interactivity with incomplete content.

## Part 6: Generative AI Use and Reflection

GitHub Copilot
* How I used it: GitHub Copilot was used primarily for code suggestions while implementing repetitive HTML structures and CSS styles. For instance, when creating the gallery section or applying responsive design breakpoints, Copilot provided useful snippets that saved significant time. Additionally, it helped with generating JavaScript functions for hover animations and event listeners.
* Why I used it: I chose Copilot for its ability to accelerate the coding process by suggesting context-aware code. It allowed me to focus on higher-level design decisions while automating repetitive coding tasks.
* What worked well: Copilot excelled at suggesting clean and readable code for simple functions, such as dynamic cursor animations or CSS tweaks.
* What I avoided: I avoided relying on Copilot for more complex logic, such as debugging GSAP animations, as its suggestions occasionally lacked the specificity needed for my design goals.

DALL·E
* How I used it: I used DALL·E to quickly prototype potential design ideas, such as abstract background patterns or placeholder images for the "Coming Soon" project sections.
* Why I used it: DALL·E allowed me to explore visual concepts rapidly without spending excessive time on initial drafts. This streamlined the brainstorming phase for design elements.
* What worked well: The generated concepts sparked ideas that I refined into more polished visuals, ensuring consistency with the website’s aesthetic.
* What I avoided: I did not use DALL·E for final designs, as the results often lacked the precision needed for brand-specific graphics.

### **Reflection on Generative AI Use**
Generative AI tools significantly enhanced my productivity throughout the project. GitHub Copilot streamlined the coding process, ChatGPT enriched the content and structure, and DALL·E facilitated rapid visualization of ideas. However, I remained cautious about relying too heavily on these tools for complex tasks, ensuring the final project met my standards of quality and originality. This experience highlighted how AI can act as a powerful assistant, complementing human creativity and expertise.

### Usage Experiences by Project Aspects

| Tool Name | Ratings       | design  | plan    | write code | debug   | accessibility |
| :-------- | :------------ | :------ | :------ | :--------- | :------ | :------------ |
| GitHub Copilot | Usage       | No      | No      | Yes        | No      | No            |
| GitHub Copilot | Productivity | 4       | 4       | 7          | 4       | 4             |
| DALL·E         | Usage       | Yes     | No      | No         | No      | No            |
| DALL·E         | Productivity | 7       | 4       | 4          | 4       | 4             |

### Usage Reflection

> Impact on your design and plan**  
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example:  
  1. **GitHub Copilot:** It effectively provided code suggestions for repetitive structures, such as HTML sections and JavaScript event listeners, aligning with my plan to use it for basic coding tasks.  
  2. **DALL·E:** It successfully generated visual concepts for placeholder images, helping me brainstorm design elements quickly.  

* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example:  
  1. **GitHub Copilot:** It struggled with complex animations and debugging GSAP code, which required manual adjustments.  
  2. **DALL·E:** The generated images often lacked precision for brand-specific visuals, requiring additional refinement in design tools.  

* GenAI tools did/did not influence my final design and implementation plan because … For example:  
  1. **GitHub Copilot:** It influenced my plan by speeding up the initial coding phase and allowing me to focus on higher-level design decisions.  
  2. **DALL·E:** It did not directly affect the final design since its outputs were primarily used for brainstorming and not included as final assets.

> Use patterns**  
* I accepted the generations when … For example:  
  1. **GitHub Copilot:** This tool once suggested a loop for attaching event listeners to multiple elements, which I adopted because it simplified my JavaScript code.  
  2. **DALL·E:** I used an abstract pattern generated by DALL·E as inspiration for creating a custom background design that aligned with my portfolio theme.  

* I critiqued/evaluated the generated suggestions by … For example:  
  1. **GitHub Copilot:** This tool once suggested outdated syntax for GSAP animations, which I rejected and replaced with the correct version after consulting documentation.  
  2. **DALL·E:** I evaluated its placeholder images for consistency with my portfolio's style and rejected those that didn’t match the overall aesthetic.

> **Pros and cons of using GenAI tools**  
* **Pros:**  
  1. **GitHub Copilot:** It reduced repetitive coding tasks, allowing me to focus on creative aspects of the project.  
  2. **DALL·E:** It sped up the ideation phase by providing quick visual concepts, saving time during brainstorming sessions.  

* **Cons:**  
  1. **GitHub Copilot:** Its suggestions were sometimes too generic or outdated, requiring extra effort to verify and adjust.  
  2. **DALL·E:** Its outputs often lacked the precision needed for final deliverables, making it less reliable for polished design work.

### Usage Log

1. **GitHub Copilot:**  
   * I used Copilot in Visual Studio Code for generating HTML, CSS, and JavaScript snippets. For example, I prompted it to suggest loops for event listeners and responsive grid layouts.  
   * I attempted to export the Copilot session log using VSCode's command palette but was unsuccessful. Despite troubleshooting with peers, the issue persisted.
2. **DALL·E:**  
   * I used DALL·E to generate abstract image concepts for placeholders and design inspiration. Prompts included "modern abstract background with gradients" and "futuristic portfolio banner."  
   * No formal log available due to DALL·E limitations, but examples of generated outputs were saved in my project files.


# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [X] Updated the project gallery to include a "Coming Soon" placeholder image for incomplete projects. This helps users understand that the projects are under development and will be ready in the near future.
- [X] Added a main landing page featuring a large hero image that welcomes users and provides an overview before they select specific projects. This change improves the overall user experience and aligns with feedback received.
- [X] Continue refining project descriptions and ensuring all placeholder content is replaced with final versions once completed this week.

## Generative AI Use Plan Updates

- [X] Used DALL·E to generate the placeholder image, ensuring it aligns with the website's overall design aesthetic.
- [X] Used ChatGPT to brainstorm text for the hero landing page and refine the tone to match the professional and creative branding of the portfolio.
- [X] Plan to use GitHub Copilot for final adjustments to responsive design and interaction improvements.

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

# **FP2 \- Evaluation of the Final project**

## Project Description

I'm motivated by my transition from graphic design to UX design. I wanted to move away from my old identity and present myself in a fresh way, so I focused on making my project look visually cool and eye-catching to really grab attention.

## High-Fi Prototypes

### *Prototype 1*

![Landing Page](images/prototype1.png)

I conducted usability testing on my portfolio website with users navigating sections like About, Projects, and Resume. Feedback was positive, noting the clean design, intuitive navigation, and appealing project displays. However, users recommended larger font sizes for better readability and more interactive features for engagement. 

### *Prototype 2*

![Project Page](images/prototype2.png)
Most peers mentioned that the menu section felt too cluttered and suggested changing the background and highlighting the project menu. They appreciated the overall layout but recommended using a unified white background for a cleaner look.

## Usability Test

During the evaluation and usability testing of my portfolio website, I gathered valuable feedback from a diverse set of users. Each participant was given an overview of the website’s purpose and guided through tasks such as navigating the About, Projects, and Resume sections to assess usability and overall design.

Feedback Highlights: The responses were largely positive. Users commended the clean design and intuitive navigation, which made browsing the site straightforward. They found the project presentations particularly appealing, noting that the visual elements effectively highlighted my work. However, there were also key areas for improvement. Several users mentioned that the font sizes were too small, which impacted readability. Others suggested incorporating interactive features to make the site more dynamic and engaging.

Design Updates and Influence on Final Design: I prioritized user feedback to refine the website’s design and enhance the overall user experience. The recommendation to increase font sizes was directly implemented, with adjustments to typography ensuring better readability across all devices. Additionally, I simplified the navigation by reworking the menu structure to make it more accessible and less cluttered. This change aimed to streamline the user journey and help visitors quickly find the sections they were looking for.

The suggestion to add interactive elements inspired new directions for the project. I incorporated subtle hover effects and clickable elements that added a layer of interactivity, making the experience more engaging and visually stimulating. These updates not only responded to user feedback but also aligned with modern web design practices.

Overall, the usability testing provided insights that were crucial to the final design. Implementing the feedback led to a more user-friendly, accessible, and engaging website that better meets the needs and expectations of its audience.

## Updated Designs

![Landing Page](images/finalPrototype1.png)
![Project Page](images/finalPrototype2.png)

Show screenshots of your updated design based on the user feedback (\<100 words, \~2 images).

## Feedback Summary

During the lab session, I received a mix of positive feedback and constructive criticism on my final design. Users appreciated the visual consistency and clean layout, especially the use of bold, readable typography and the clear sections highlighting different projects. The overall aesthetic was noted as modern and professional, aligning well with the intended showcase purpose. However, participants pointed out a few areas for improvement that influenced subsequent adjustments.

Feedback Highlights: One major suggestion was to emphasize important project sections more distinctively. Users felt that the current visual differentiation could be enhanced to make featured projects, like the Paris Olympics section, stand out more clearly. They also recommended simplifying the navigation further, making it easier for users to switch between sections such as About, Projects, and Resume without confusion. The addition of subtle interactive cues, like hover animations, was suggested to enhance the engagement and usability of the site.

Design Influences: I implemented this feedback by updating the project menu to include highlighted titles and distinct visuals, drawing users’ attention to key projects. The menu structure was further streamlined for ease of navigation, ensuring users could access main sections with fewer clicks. Interactive features such as hover effects were added to clickable elements, enhancing the user experience with visual feedback during interactions.

Overall, this feedback helped refine my final design into a more user-friendly and visually engaging portfolio, striking a balance between aesthetics and functionality. The session confirmed the importance of user-centered adjustments and reinforced that even subtle design changes could significantly impact the overall user experience.

## Milestones

As I progress through the semester, my implementation plan will unfold over several weeks. In Week 9, I will focus on finalizing and submitting my FP1 assignment while reviewing feedback from the lab session to identify areas for improvement in my portfolio website. By Week 10, I aim to submit my FP2 assignment and conduct usability testing on the updated design, analyzing user feedback to inform further refinements. In Week 11, I will implement additional changes based on usability test findings, focusing on enhancing mobile responsiveness and optimizing content presentation. Week 12 will involve a peer review session, where I will gather insights on the overall usability and functionality of my website, allowing me to make necessary adjustments. With Thanksgiving break in Week 13, I plan to reflect on my design journey and compile key insights. Finally, in Week 14, I will finalize my portfolio for submission as part of the FP4 assignment, ensuring it effectively showcases my work and the evolution of my design process. This structured approach will keep me on track to deliver a polished, user-centered portfolio by the end of the semester.

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  - [X] Gather feedback on FP1 and identify areas for improvement.
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [X] Conduct a usability test on the revised portfolio website to evaluate the new changes.
  - [X] Analyze user feedback from the usability test to identify further improvements.
  - [X] Start working on the next set of enhancements based on feedback.

- [X] Week 11 Nov 11 \- Nov 15:
  - [X] Implement any additional design changes identified during the usability test.
  - [X] Focus on optimizing the website for mobile responsiveness and performance.
  - [X] Create a presentation to showcase the portfolio website and its evolution.
        
- [X] Week 12 Nov 18 \- Nov 22:
  - [X] Conduct a peer review session to gather final feedback on the portfolio.
  - [X] Make any last-minute adjustments based on peer feedback.
  - [X] Prepare a comprehensive report summarizing the design process, feedback received, and final outcomes.
        
- [X] Week 13 Nov 25 \- Nov 29:  
  - [X] Thanksgiving
  - [X] Reflect on the design journey and compile insights for future projects.
        
- [X] Week 14 Dec 2 \- Dec 6:  
  - [X] FP4 due
  - [X] Ensure the portfolio website is polished and ready for presentation.
  - [X] Schedule a final review session with your instructor or peers to showcase the completed project and discuss your design process.

### *Libraries and Other Components*

List the JS libraries and other components (if applicable) that you plan to use. 
*GSAP (GreenSock Animation Platform): Used for custom animations and interactive effects, such as cursor animations.
*UserWay Widget: Provides an accessibility widget to enhance usability for all users.

## Generative AI Use Plan

To implement my portfolio website, I’ll use Generative AI tools to make the process smoother and more efficient. I plan to use ChatGPT for brainstorming ideas, drafting content, and getting quick coding explanations, helping me save time and improve my writing. GitHub Copilot will be great for generating code snippets and automating simpler coding tasks, though I’ll still handle complex parts myself to ensure accuracy. DALL·E will help me create design concepts and mockups for inspiration, but I’ll use other tools for the final visuals. Notion AI will keep my project organized by summarizing notes and managing tasks, while Grammarly will make sure my writing is polished. By combining these tools with my own work, I hope to boost my productivity while maintaining quality and a personal touch.

### *Tool Use*

*GitHub Copilot
I will use it for code suggestions and automating simple tasks because it speeds up coding.
I will not use it for complex logic or debugging as it might miss intricate details.

*DALL·E
I will use it for generating design concepts and visual ideas quickly.
I will not use it for polished, brand-specific graphics due to limited precision.

### *Responsible Use*

Using Generative AI responsibly means being transparent about when and where AI-generated content is used and giving proper credit. It's important to check outputs carefully to avoid biases and ensure fairness, as well as to protect privacy by using anonymized data and following data regulations. I would make sure not to create any misleading or harmful content and always have human oversight to review and improve AI outputs for accuracy. Documenting AI use in projects is also essential for accountability. By following these practices, I’d use AI to boost creativity and productivity while staying ethical and trustworthy.

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*

![title for sketch1](images/sketch1.png)

* What is the basic idea of your final project? (1-2 sentences)
The basic idea of my final project is to create a UX portfolio website that showcases my design skills, projects, and philosophy. It will serve as an engaging platform to highlight my journey as a   designer and demonstrate my approach to user experience.
* How do you plan to make your design interactive and engaging?
I plan to make the design interactive and engaging by incorporating dynamic elements such as interactive project previews, hover effects, and smooth animations. This will create a lively browsing experience that encourages users to explore my work more deeply.
* How do you plan to make your design accessible?
To ensure accessibility, I will use high-contrast colors, provide descriptive alt text for images, and implement keyboard navigation and screen-reader compatibility. This approach will make the website usable for all visitors, regardless of their abilities.
* What information do you specifically want to convey and include on your website?
I want to convey my design philosophy, process, and the impact of my work through detailed case studies for each project. The website will also include my skills, experiences, and contact information, making it easy for potential employers or collaborators to understand my strengths and reach out.

### *Idea 2*

![title for sketch1](images/sketch2.png)

* What is the basic idea of your final project? (1-2 sentences)
The Recycling Information Tool aims to provide users with accurate and accessible information on how to recycle various materials based on their local regulations. The goal is to create a user-friendly platform that helps individuals navigate the complexities of recycling and make informed decisions.
* How do you plan to make your design interactive and engaging?
To enhance user engagement, the tool will feature interactive elements such as dropdown menus and search functions that allow users to quickly find recycling guidelines for specific materials. Additionally, incorporating visuals and icons will simplify complex information, making it easy to understand at a glance.
* How do you plan to make your design accessible?
Accessibility is crucial for this tool, so I will ensure it is designed to be usable by everyone. This includes implementing high-contrast colors, readable fonts, and keyboard navigation, as well as providing alt text for all images and icons to support screen readers.
* What information do you specifically want to convey and include on your website?
The tool will convey essential recycling guidelines tailored to local regulations, including what materials can be recycled, how to prepare items for recycling, and links to local recycling programs. It will also include FAQs and tips to encourage responsible recycling practices, ensuring users have all the information they need to recycle effectively.

### *Idea 3*

![title for sketch1](images/sketch3.png)

* What is the basic idea of your final project? (1-2 sentences)
The basic idea of my Sleep Management Web Application is to help users track and improve their sleep habits by providing personalized insights and recommendations based on their sleep patterns. This application aims to create a supportive environment for users to understand their sleep behaviors and make informed changes.
* How do you plan to make your design interactive and engaging?
To create an interactive and engaging design, I will incorporate features such as visually appealing graphs and charts to represent sleep data, reminders for users to log their sleep, and gamification elements like progress tracking and achievements. These elements will encourage users to consistently engage with the application and track their sleep habits.
* How do you plan to make your design accessible?
I will prioritize accessibility by ensuring that the application uses clear typography, high-contrast colors, and intuitive navigation. Additionally, I will implement screen-reader compatibility and provide alternative text for images, making the app usable for all individuals regardless of their abilities.
* What information do you specifically want to convey and include on your website?
I aim to convey key information about users' sleep patterns, insights on improving sleep quality, and personalized recommendations. The application will include features like sleep tracking logs, educational resources on sleep hygiene, and a user-friendly dashboard that displays relevant data and suggestions in an easy-to-understand format.


## Feedback Summary

The critique of my portfolio website provided valuable insights regarding several key aspects of its design and content. A significant concern raised was about my landing page, which currently only showcases my first project without presenting a clear main page. This could potentially create an impression of incompleteness. To address this, reviewers suggested adding a popup window with an "About Me" section, which would enhance user engagement and provide visitors with important context about my background and expertise.

For my recycling information tool, the feedback emphasized the necessity for localized data specific to Pittsburgh. Reviewers encouraged me to ensure that the data is not only available but also accurate, highlighting the importance of addressing potential questions users might have when interacting with the tool. Additionally, they recommended incorporating scenario-based problem-solving features to improve user interactivity.

Lastly, the feedback regarding my sleep management tool pointed out the need for better organization within the interface. Critics suggested featuring the calculator prominently on the main page, while relocating resources and reviews to a menu. Implementing these changes will help streamline the user experience across my projects.

## Feedback Digestion

The critique of my portfolio website provided valuable insights, particularly regarding the landing page's focus on my first project without a clear main page. This feedback highlighted the importance of creating a comprehensive view of my work, which is essential for users to navigate easily. As a result, I am considering adding a popup window with an "About Me" section to enhance user engagement. This addition would not only give visitors insight into my background and expertise but also set the context for my projects.

In terms of my recycling information tool, the suggestion for localized data specific to Pittsburgh resonated with me. Reviewers emphasized the necessity of ensuring users have access to accurate and relevant information while also considering the questions they might have when using the tool. While I recognize the value of integrating scenario-based problem-solving features for enhanced interactivity, I have decided to prioritize updates to my portfolio first.

Similarly, the feedback for my sleep management tool pointed to the need for better organization. I agree with the suggestion to make the calculator more prominent on the main page, which will serve as the focal point of the user experience. Overall, these critiques provide a clear roadmap for improvement, and I am excited to implement the changes to my portfolio website, as they will significantly enhance the user experience.
