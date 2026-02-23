/* =========================
   MAIN JAVASCRIPT FILE
   RIDHA TAHIR Portfolio
========================= */

/* ===== Dynamic Year in Footer ===== */
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* ===== GPA Calculator ===== */
const gpaForm = document.getElementById("gpaForm");
const gpaResult = document.getElementById("gpaResult");
const classResult = document.getElementById("classResult");

if (gpaForm) {
    gpaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const marksInputs = document.querySelectorAll(".mark");
        let total = 0;
        let count = 0;
        let valid = true;

        marksInputs.forEach(input => {
            const value = parseFloat(input.value);

            // Validation
            if (isNaN(value) || value < 0 || value > 100) {
                valid = false;
            } else {
                total += value;
                count++;
            }
        });

        if (!valid || count === 0) {
            gpaResult.textContent = "GPA: Invalid input";
            classResult.textContent = "Classification: --";
            return;
        }

        // Average percentage
        const average = total / count;

        // GPA Conversion (simple scale)
        let gpa = 0;

        if (average >= 85) gpa = 4.0;
        else if (average >= 75) gpa = 3.5;
        else if (average >= 65) gpa = 3.0;
        else if (average >= 55) gpa = 2.5;
        else if (average >= 45) gpa = 2.0;
        else if (average >= 35) gpa = 1.5;
        else gpa = 1.0;

        // Classification
        let classification = "";

        if (gpa >= 4.0) classification = "First Class";
        else if (gpa >= 3.0) classification = "Second Class Upper";
        else if (gpa >= 2.0) classification = "Second Class Lower";
        else if (gpa >= 1.0) classification = "Pass";
        else classification = "Fail";

        // Output
        gpaResult.textContent = "GPA: " + gpa.toFixed(2);
        classResult.textContent = "Classification: " + classification;
    });
}

/* ===== Additional Interaction Example ===== */
/* Smooth scroll highlight (simple interaction) */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

/* ===== Optional Future Feature ===== */
// Dark mode can be added later if needed
// Mobile menu toggle can be added later