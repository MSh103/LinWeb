var body = document.body;

// Check if 'darkmode' exists in localStorage
if (localStorage.getItem("darkmode") === null) {
    // If not, set based on device preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem("darkmode", "true");
    } else {
        localStorage.setItem("darkmode", "false");
    }
}

// Now, use the stored value
var darkmode = localStorage.getItem("darkmode") === "true";
if (!darkmode) body.classList.add("light");

// Language (same logic if needed)
var language = localStorage.getItem("language");
if (language === null) {
    localStorage.setItem("language", "false"); // Default: Arabic
    language = "false";
}
language = language === "true";

if (!language) body.setAttribute("lang", "ar");
if (language) body.setAttribute("lang", "en");

function toggleView() {
    if (!darkmode) {
        body.classList.remove("light");
        darkmode = true;
    } else {
        body.classList.add("light");
        darkmode = false;
    }
    localStorage.setItem("darkmode", darkmode);
}

var saudi = document.getElementById("Saudi");
var american = document.getElementById("american");

var arabic = document.getElementsByClassName("ar");
var english = document.getElementsByClassName("en");

function toggleLanguage() {
    if (language) {
        body.setAttribute("lang", "ar");

        language = false;
    } else {
        body.setAttribute("lang", "en");

        language = true;
    }
    localStorage.setItem("language", language);
}