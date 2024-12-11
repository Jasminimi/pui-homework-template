document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.querySelectorAll(".project-list a");
    const designText = document.querySelector(".design-text");
    const projectImage = document.querySelector("#project-image");

    const projectData = {
        "ChatGPT BIAS REPORTING": {
            text: "AI and Ethics",
            image: "chatgpt-bias-reporting.png"
        },
        "SAV E-MOPAD": {
            text: "Transportation Design",
            image: "sav-e-mopad.png"
        },
        "HUMAN ROBOT INTERACTION": {
            text: "Robotic Engagement",
            image: "robot-interaction.png"
        },
        "PARIS OLYMPICS": {
            text: "GRAPHIC DESIGN",
            image: "images/stamp.png"
        }
    };

    projectLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            const projectName = link.textContent.trim();
            if (projectData[projectName]) {
                designText.textContent = projectData[projectName].text;
                projectImage.src = projectData[projectName].image;
                projectImage.alt = projectName;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power3.out",
        });
    });

    // Hover effect for links
    const links = document.querySelectorAll("a, .hover-target"); 
    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                scale: 1.5,
                backgroundColor: "rgba(255, 0, 0, 0.8)", 
                duration: 0.3,
            });
        });

        link.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                duration: 0.3,
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");

    const targets = document.querySelectorAll("[data-hover-color]");
    targets.forEach((target) => {
        target.addEventListener("mouseenter", () => {
            const color = target.getAttribute("data-hover-color");
            gsap.to(cursor, {
                backgroundColor: color,
                duration: 0.3,
            });
        });

        target.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                backgroundColor: "rgba(255, 255, 255, 0.8)", 
                duration: 0.3,
            });
        });
    });
});

