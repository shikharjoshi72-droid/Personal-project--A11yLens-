/* NAVIGATION */

const pageNames = {
    dashboard: "Overview",
    contrast: "Contrast Checker",
    dom: "DOM Inspector",
    aria: "ARIA Inspector",
    vision: "Vision Simulator",
    reports: "Reports"
};

function navigate(id, element) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    if (element) element.classList.add("active");

    document.getElementById("breadcrumb").textContent = pageNames[id];

    const headings = {
        dashboard: "Good to see you.",
        contrast: "Make every color count.",
        dom: "Understand your page structure.",
        aria: "Inspect accessible semantics.",
        vision: "See beyond the colors.",
        reports: "Your inspection report."
    };

    document.getElementById("heading").textContent = headings[id];

    if (id === "dom") inspectDOM();
    if (id === "aria") inspectARIA();
    if (id === "reports") updateStats();
}

/* DATE */

document.getElementById("currentDate").textContent =
    new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(new Date());

/* URL VALIDATION */

function analyze() {

    const value = document.getElementById("websiteURL").value;
    const message = document.getElementById("analyzeMessage");

    try {
        const url = new URL(value);

        if (!["http:", "https:"].includes(url.protocol)) {
            throw new Error("Invalid URL");
        }

        message.textContent =
            "URL is valid. Connect a browser-based audit engine to inspect this external website.";

    } catch {
        message.textContent = "Please enter a valid website address.";
    }
}
