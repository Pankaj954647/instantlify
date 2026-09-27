// Product Quality Slider

let quality = document.getElementById("quality");
let qualityValue = document.getElementById("qualityValue");

quality.addEventListener("input", function () {
    qualityValue.textContent = quality.value;
});


// Customer Service Slider

let service = document.getElementById("service");
let serviceValue = document.getElementById("serviceValue");

service.addEventListener("input", function () {
    serviceValue.textContent = service.value;
});


// Overall Experience Slider

let experience = document.getElementById("experience");
let experienceValue = document.getElementById("experienceValue");

experience.addEventListener("input", function () {
    experienceValue.textContent = experience.value;
});


// Form Submit

let form = document.getElementById("reviewForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let rating = document.querySelector(
        'input[name="rating"]:checked'
    );

    if (!rating) {
        alert("Please select a star rating.");
        return;
    }

    document.getElementById("message").textContent =
        "Thank you! Your review has been submitted.";

    form.reset();

    qualityValue.textContent = "5";
    serviceValue.textContent = "5";
    experienceValue.textContent = "5";
});