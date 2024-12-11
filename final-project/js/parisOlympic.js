//styling cursor
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power3.out",
        });
    });

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
