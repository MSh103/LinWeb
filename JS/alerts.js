let debug = false;
const popup = document.getElementById("fridayMessage");
const welcomeMessage = document.getElementById("welcomeMessage");

const Stamp = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const debugStored = localStorage.getItem("debug");
if (debugStored === "true") {
    debug = true;
} else {
    debug = false;
}

if(debugStored === null)
{
    debug = false;
    localStorage.setItem("debug", "true");
}

function stackPopups() {
    const popups = document.querySelectorAll('.popup-message.show');
    const gap = -30; // px between popups
    let offset = 32; // initial offset from top in px

    popups.forEach((popup, index) => {
        popup.style.top = `${offset + (index * (popup.offsetHeight + gap))}px`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const storedState = localStorage.getItem("popupState");
    let shouldShowPopup = storedState === null || storedState === "true";
    
    const fridayMsg = localStorage.getItem("friMsg");
    let shouldFriShow = fridayMsg === null || fridayMsg === "true";

    //  Force show in debug mode
    if (debug) {
        shouldShowPopup = true;
        shouldFriShow = true;
    }

    // Show first popup immediately if needed
    if (shouldShowPopup) {
        welcomeMessage.classList.add('show');
        stackPopups();
    }

    // Show second popup after 1s delay if needed
    if (weekdays[Stamp.getDay()] === "Friday" && shouldFriShow) {
        setTimeout(() => {
            popup.classList.add("show");
            stackPopups();
        }, 1000);
    }

    window.closeWelcome = function () {
        welcomeMessage.classList.remove('show');
        localStorage.setItem("popupState", "false");

        if (popup.classList.contains("show")) {
            popup.classList.add("move-up");
            setTimeout(() => {
                popup.classList.remove("move-up");
                stackPopups();
            }, 500);
        } else {
            stackPopups();
        }
    };

    window.closeFriday = function () {
        popup.classList.remove('show');
        localStorage.setItem("friMsg", "false");
        stackPopups();
    };
});

// Toggle debug mode and store it
function toggleDebug() {
    debug = !debug;
    localStorage.setItem("debug", debug ? "true" : "false");
    console.log("Debug mode:", debug);
}

//  Set state if debug is true
if (debug) {
    localStorage.setItem("popupState", "true");
    localStorage.setItem("friMsg", "true");
}
