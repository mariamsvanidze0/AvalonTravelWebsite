class Form {
    constructor() {
        this.result = document.getElementById("result");
    }

    displayResult(message, color, width) {
        this.result.innerHTML = message;
        this.result.style.color = color;
        this.result.style.width = width;
        this.result.style.fontFamily = "font";
    }
}

class ContactForm extends Form {
    constructor() {
        super();
        this.phone = document.getElementById("phone");
        this.customerText = document.getElementById("costumerText");
        this.phoneRegex = /^\+\d{10,15}$/gm;
    }

    validatePhone() {
        return this.phoneRegex.test(this.phone.value);
    }

    validateMessageLength() {
        return this.customerText.value.length >= 15;
    }

    handleSubmit() {
        if (this.validatePhone()) {
            if (this.validateMessageLength()) {
                let contactInfo = {
                    phone: this.phone.value,
                    customerText: this.customerText.value
                };
                let usersContactInfo = JSON.parse(localStorage.getItem('usersContactInfo')) || [];
                usersContactInfo.push(contactInfo);
                localStorage.setItem('usersContactInfo', JSON.stringify(usersContactInfo));

                this.displayResult("Your Message is Submitted", "green", "220px");
            } else {
                this.displayResult("Your Message should be at least 15 Characters long", "red", "420px");
            }
        } else {
            this.displayResult("Provide correct phone number", "red", "300px");
        }
    }
}

const contactForm = new ContactForm();
document.getElementById("submitButton").addEventListener("click", function() {
    contactForm.handleSubmit();
});

