# A11yLens — Accessibility Workspace

A11yLens is a web-based accessibility inspection workspace designed to help developers explore basic accessibility checks, inspect DOM structure, review ARIA attributes, test color contrast, and generate simple inspection reports.

## ✨ Features

- **Dashboard:** Overview of the accessibility workspace with sample statistics and findings.
- **URL Validation:** Validate website URLs before preparing an accessibility inspection.
- **Color Contrast Checker:** Calculate the contrast ratio between foreground and background colors and compare it with WCAG contrast thresholds.
- **DOM Inspector:** Explore the document structure of the current webpage.
- **ARIA Inspector:** Identify and display ARIA attributes and roles present in the document.
- **Vision Simulator:** Preview grayscale and reduced-saturation color presentation.
- **Inspection Reports:** Generate and download a JSON report containing basic DOM statistics.
- **Responsive UI:** Designed to adapt to different screen sizes.

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript
- DOM API

## 📂 Project Structure

```text
A11yLens/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shikharjoshi72-droid/Myntra_clone.git
```

### 2. Navigate to the project folder

```bash
cd Myntra_clone
```

### 3. Run the project

Open `index.html` in your browser, or use the Live Server extension in VS Code for a better development experience.

## 🎨 Color Contrast Standards

A11yLens compares color contrast ratios against commonly used WCAG text contrast thresholds:

| Standard | Contrast Ratio |
|---|---|
| WCAG AA — Normal Text | 4.5:1 |
| WCAG AA — Large Text | 3:1 |
| WCAG AAA — Normal Text | 7:1 |
| WCAG AAA — Large Text | 4.5:1 |

## 📊 Report Information

The JSON inspection report includes:

- Total images
- Images with missing or empty alternative text
- Total buttons
- Total input elements
- Report generation timestamp

The report provides basic DOM statistics and is not a complete WCAG accessibility audit.

## ⚠️ Limitations

- Website URL validation does not currently perform a full external website accessibility audit.
- DOM and ARIA inspections analyze the current document.
- Vision simulation filters are illustrative and are not clinically accurate simulations of color-vision deficiencies.
- Dashboard scores and findings are sample data.

## 🎯 Project Goal

The goal of A11yLens is to make accessibility concepts easier to understand and encourage developers to build more inclusive and accessible web experiences.

## 👨‍💻 Author

**Shikhar Joshi**

---

*Built for a more accessible web.*
