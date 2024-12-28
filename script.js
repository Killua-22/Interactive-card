const cardnameInput = document.getElementById("name");
const cardnameError = document.getElementById("name-error");
const cardnumberInput = document.getElementById("cardnumber");
const cardnumberError = document.getElementById("cardnumber-error");
const cardnumberemptyError = document.getElementById("cardnumber-empty-error");

const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvc");

const montherror = document.getElementById("month-error");
const yearerror = document.getElementById("year-error");
const cvcerror = document.getElementById("cvc-error");

cardnumberInput.addEventListener("input", function (e) {
    let value = e.target.value;

    cardnumberInput.classList.remove("invalid");
    cardnumberemptyError.style.display = "none";
    
    if (/[^0-9\s]/.test(value)) {
        cardnumberInput.classList.add('invalid');
        cardnumberError.style.display = 'block';
    } else {
        cardnumberInput.classList.remove('invalid');
        cardnumberError.style.display = 'none';
        value = value.replace(/\D/g, '') // Remove non-numeric characters
        .replace(/(.{4})/g, '$1 ') // Add a space after every 4 characters
        .trim();
        
        document.getElementById("card-info-number").textContent = value || '0000 0000 0000 0000';
    }

});



document.getElementById("name").addEventListener("input", function (e) {

    cardnameInput.classList.remove("invalid");
    cardnameError.style.display = "none";

    document.getElementById("card-info-name").textContent = e.target.value.toUpperCase() || 'JANE APPLESEED';
});


document.getElementById("month").addEventListener("input", function(e) {

    let value = e.target.value;

    monthInput.classList.remove("invalid");
    montherror.style.display = "none";

    if (value > 12) value = "12";
    if (value < 1) value = "01";

    value = value.padStart(2, "0");
    document.getElementById("card-info-month").textContent = value || "00";
});

document.getElementById("year").addEventListener("input", function(e) {
    
    let value = e.target.value;

    yearInput.classList.remove("invalid");
    yearerror.style.display = "none";

    if (value > 99) value = value.slice(0, 2);
    if (value < 1) value = "01";
    
    value = value.padStart(2, "0");
    document.getElementById("card-info-year").textContent = value || "00";
});

document.getElementById("cvc").addEventListener("input", function(e) {
    
    let value = e.target.value;

    cvcInput.classList.remove("invalid");
    cvcerror.style.display = "none";

    if (value > 999) value = value.slice(0, 3);
    if (value < 1) value = "000";
    
    value = value.padStart(3, "0");
    document.getElementById("card-info-cvc").textContent = value || "000";
});

function validateFields() {
    let isValid = true; // Flag to track if all fields are valid

    if(!cardnameInput.value.trim()) {
        cardnameInput.classList.add("invalid");
        cardnameError.style.display = "block";
    }

    if (!cardnumberInput.value.trim()) {
        cardnumberInput.classList.add("invalid");
        cardnumberemptyError.style.display = "block";
        isValid = false;
    }

    // Validate Month
    if (!monthInput.value.trim()) {
        monthInput.classList.add("invalid");
        montherror.style.display = "block";
        isValid = false;
    } 

    // Validate Year
    if (!yearInput.value.trim()) {
        yearInput.classList.add("invalid");
        yearerror.style.display = "block";
        isValid = false;
    }

    // Validate CVC
    if (!cvcInput.value.trim()) {
        cvcInput.classList.add("invalid");
        cvcerror.style.display = "block";
        isValid = false;
    }

    return isValid; // Return the validation result
}


document.getElementById("confirmbutton").addEventListener("click", function (e) {
    if(!validateFields()) {
        e.preventDefault(); // Prevent form submission
    }
    else {

        document.getElementById("form").style.display = "none"; 
        document.getElementById("confirmed").style.display = "flex"; 
    }

});


document.getElementById("reset").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    document.getElementById("confirmed").style.display = "none"; 

    document.getElementById("form").style.display = "block"; 
    
    document.querySelector("form").reset();

    // Reset card display to default values
    document.getElementById("card-info-number").textContent = "0000 0000 0000 0000";
    document.getElementById("card-info-name").textContent = "JANE APPLESEED";
    document.querySelector(".card-info-month").textContent = "00";
    document.querySelector(".card-info-year").textContent = "00";
    document.querySelector(".card-info-cvc").textContent = "000";
});

