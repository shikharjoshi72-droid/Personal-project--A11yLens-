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

/* CONTRAST ENGINE */

function getLuminance(hex) {

    const rgb = hex.match(/[a-f0-9]{2}/gi).map(value => {
        let c = parseInt(value, 16) / 255;

        return c <= 0.04045
            ? c / 12.92
            : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function calculateContrast() {

    const fg = document.getElementById("foreground").value;
    const bg = document.getElementById("background").value;

    const a = getLuminance(fg);
    const b = getLuminance(bg);

    const ratio = (Math.max(a,b) + .05) / (Math.min(a,b) + .05);

    document.getElementById("preview").style.color = fg;
    document.getElementById("preview").style.background = bg;

    document.getElementById("ratio").textContent =
        ratio.toFixed(2) + " : 1";

    document.getElementById("contrastResult").textContent =
        ratio >= 7 ? "AAA — Passes normal and large text contrast."
        : ratio >= 4.5 ? "AA — Passes normal text contrast."
        : ratio >= 3 ? "Large text only — Passes the 3:1 threshold."
        : "Fail — Does not meet WCAG AA text contrast.";

    document.getElementById("contrastStandards").textContent =
        "AA normal text: 4.5:1 · AA large text: 3:1 · AAA normal text: 7:1 · AAA large text: 4.5:1";
}

document.getElementById("foreground").addEventListener("input",calculateContrast);
document.getElementById("background").addEventListener("input",calculateContrast);

calculateContrast();

/* DOM INSPECTOR */

function inspectDOM() {

    const output = document.getElementById("domTree");
    output.innerHTML = "";

    function build(element, depth) {

        if (depth > 3) return;

        const row = document.createElement("div");
        row.className = "tree-node";
        row.style.paddingLeft = (depth * 20) + "px";

        const name = document.createElement("span");
        name.textContent = "<" + element.tagName.toLowerCase() + ">";

        row.appendChild(document.createTextNode("↳ "));
        row.appendChild(name);

        output.appendChild(row);

        Array.from(element.children).slice(0,8).forEach(child => {
            build(child, depth + 1);
        });
    }

    build(document.body, 0);
}
