/*======================================
        BISTRO BLISS RESERVATION
        WHATSAPP SUBMISSION
======================================*/

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("reservationForm");
    const successMessage = document.getElementById("reservationSuccess");
    const newReservation = document.getElementById("newReservation");
    const dateInput = document.getElementById("date");

    /*
    ======================================
        BISTRO BLISS WHATSAPP NUMBER
    ======================================

    Replace this with the restaurant's
    WhatsApp number.

    IMPORTANT:
    - Use country code
    - Do NOT use +
    - Do NOT use spaces
    - Nigeria = 234

    Example:
    2348012345678
    */

    const whatsappNumber = "2348167230597";


    /*======================================
            PREVENT PAST DATES
    ======================================*/

    if (dateInput) {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        dateInput.min = `${year}-${month}-${day}`;

    }


    /*======================================
            RESERVATION SUBMISSION
    ======================================*/

    if (form) {

        form.addEventListener("submit", (event) => {

            event.preventDefault();


            /* Check required fields */

            if (!form.checkValidity()) {

                form.reportValidity();

                return;

            }


            /*==================================
                GET FORM VALUES
            ==================================*/

            const name =
                document.getElementById("fullName").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const date =
                document.getElementById("date").value;

            const time =
                document.getElementById("time").value;

            const guests =
                document.getElementById("guests").value;

            const occasion =
                document.getElementById("occasion").value;

            const message =
                document.getElementById("message").value.trim();


            /*==================================
                FORMAT OCCASION
            ==================================*/

            const occasionText = occasion
                ? occasion.charAt(0).toUpperCase()
                  + occasion.slice(1)
                : "Not specified";


            /*==================================
                FORMAT DATE
            ==================================*/

            const formattedDate =
                new Date(`${date}T00:00:00`)
                .toLocaleDateString(
                    "en-NG",
                    {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                );


            /*==================================
                FORMAT TIME
            ==================================*/

            const formattedTime =
                new Date(`1970-01-01T${time}`)
                .toLocaleTimeString(
                    "en-NG",
                    {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true
                    }
                );


            /*==================================
                CREATE WHATSAPP MESSAGE
            ==================================*/

            const whatsappMessage = `

🍽️ *BISTRO BLISS RESTAURANT*

*NEW TABLE RESERVATION*

━━━━━━━━━━━━━━━━━━━━

👤 *Guest Information*

Name: ${name}
Email: ${email}
Phone: ${phone}

━━━━━━━━━━━━━━━━━━━━

📅 *Reservation Details*

Date: ${formattedDate}
Time: ${formattedTime}
Guests: ${guests}
Occasion: ${occasionText}

━━━━━━━━━━━━━━━━━━━━

📝 *Special Request*

${message || "No special request"}

━━━━━━━━━━━━━━━━━━━━

Please confirm this reservation.

Thank you.
*Bistro Bliss Restaurant*

            `.trim();


            /*==================================
                ENCODE MESSAGE
            ==================================*/

            const encodedMessage =
                encodeURIComponent(whatsappMessage);


            /*==================================
                CREATE WHATSAPP URL
            ==================================*/

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


            /*==================================
                OPEN WHATSAPP
            ==================================*/

            window.open(
                whatsappURL,
                "_blank"
            );


            /*==================================
                SHOW SUCCESS MESSAGE
            ==================================*/

            form.style.display = "none";

            successMessage.classList.add("show");

        });

    }


    /*======================================
        MAKE ANOTHER RESERVATION
    ======================================*/

    if (newReservation) {

        newReservation.addEventListener(
            "click",
            () => {

                form.reset();

                successMessage.classList.remove("show");

                form.style.display = "flex";

            }
        );

    }

});