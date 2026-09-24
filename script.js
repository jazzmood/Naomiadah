/* ==========================================
   CURRENT YEAR
========================================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ==========================================
   PROFILE IMAGE FALLBACK
========================================== */

const profileImage =
    document.getElementById("profileImage");

const imagePlaceholder =
    document.getElementById("imagePlaceholder");

if (profileImage) {

    profileImage.addEventListener("error", () => {

        profileImage.style.display = "none";

        if (imagePlaceholder) {
            imagePlaceholder.style.display = "flex";
        }

    });

    profileImage.addEventListener("load", () => {

        if (imagePlaceholder) {
            imagePlaceholder.style.display = "none";
        }

    });

}
/* ==========================================
   LIVE LAGOS, NIGERIA CLOCK
========================================== */

function updateLagosClock() {

    const now = new Date();

    const time = new Intl.DateTimeFormat(
        "en-NG",
        {
            timeZone: "Africa/Lagos",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }
    ).format(now);


    const date = new Intl.DateTimeFormat(
        "en-NG",
        {
            timeZone: "Africa/Lagos",
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    ).format(now);


    const liveTime =
        document.getElementById("liveTime");

    const liveDate =
        document.getElementById("liveDate");


    if (liveTime) {
        liveTime.textContent = time;
    }

    if (liveDate) {
        liveDate.textContent = date;
    }
}


/* Run immediately */
updateLagosClock();


/* Update every second */
setInterval(updateLagosClock, 1000);

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

        menuBtn.textContent =
            mobileMenu.classList.contains("open")
                ? "✕"
                : "☰";

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}


/* ==========================================
   GLASS CARD MOUSE TILT
========================================== */

const glassCards =
    document.querySelectorAll(".glass");


glassCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 850) {
            return;
        }

        const rect =
            card.getBoundingClientRect();

        const mouseX =
            event.clientX - rect.left;

        const mouseY =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (mouseY - centerY) / 35;

        const rotateY =
            (centerX - mouseX) / 35;


        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-7px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ==========================================
   FLOATING BUBBLE PARALLAX
========================================== */

const bubbles =
    document.querySelectorAll(".bubble");


document.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 850) {
        return;
    }

    const mouseX =
        (event.clientX / window.innerWidth - 0.5);

    const mouseY =
        (event.clientY / window.innerHeight - 0.5);


    bubbles.forEach((bubble, index) => {

        const strength =
            (index + 1) * 3;

        bubble.style.marginLeft =
            `${mouseX * strength}px`;

        bubble.style.marginTop =
            `${mouseY * strength}px`;

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${entry.target.id}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple =
            document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
            button.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
