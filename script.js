// OPEN FIRST POPUP
function openArasaka() {
    const modal1 = document.getElementById("modal1");
    const modal2Content = document.getElementById("modal2Content");

    modal1.style.display = "flex";

    // reset state
    modal2Content.classList.remove("yes", "no");
}

/* ================= TYPEWRITER ================= */

function typeWriter(text, element, speed = 35) {
    element.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

/* ================= CHOICE LOGIC ================= */

function choose(choice) {

    document.getElementById("modal1").style.display = "none";

    const modal2 = document.getElementById("modal2");
    const modal2Content = document.getElementById("modal2Content");
    const finalText = document.getElementById("finalText");

    modal2.style.display = "flex";

    if (choice) {
        modal2Content.classList.add("yes");
        modal2Content.classList.remove("no");

        typeWriter(
            "Arasaka is falling. Night City will remember you.",
            finalText
        );

    } else {
        modal2Content.classList.add("no");
        modal2Content.classList.remove("yes");

        typeWriter(
            "You chose survival... Night City continues.",
            finalText
        );
    }
}

/* ================= CLOSE MODAL ================= */

function closeAll() {
    document.getElementById("modal2").style.display = "none";
}

/* ================= PARALLAX EFFECT ================= */

const bgVideo = document.querySelector(".bg-video");

window.addEventListener("scroll", () => {
    const y = window.scrollY;
    bgVideo.style.transform = `translateY(${y * 0.2}px) scale(1.05)`;
});

/* ================= CLICK OUTSIDE TO CLOSE ================= */

document.getElementById("modal1").addEventListener("click", (e) => {
    if (e.target.id === "modal1") {
        document.getElementById("modal1").style.display = "none";
    }
});

document.getElementById("modal2").addEventListener("click", (e) => {
    if (e.target.id === "modal2") {
        closeAll();
    }
});