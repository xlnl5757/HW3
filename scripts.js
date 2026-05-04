window.onload = function () {
    var footer = document.querySelector("footer");

    if (footer) {
        var newParagraph = document.createElement("p");
        var currentDate = new Date();
        var text = document.createTextNode("Page loaded on: " + currentDate);

        newParagraph.appendChild(text);
        footer.appendChild(newParagraph);
    }

    setupQuoteEffect();
};

function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if (name.value === "" || email.value === "") {
        alert("Please fill out all required fields.");
        return false;
    } else {
        return true;
    }
}

function toggleDescription(id) {
    var description = document.getElementById(id);

    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

function setupQuoteEffect() {
    var quote = document.querySelector("blockquote");

    if (quote) {
        quote.addEventListener("mouseover", function () {
            quote.style.backgroundColor = "#dceeff";
            quote.style.fontStyle = "italic";
        });

        quote.addEventListener("mouseout", function () {
            quote.style.backgroundColor = "";
            quote.style.fontStyle = "";
        });
    }
}