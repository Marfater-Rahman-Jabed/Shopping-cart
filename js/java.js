function Phone(isIncrease, elementId) {
    const phoneInputElement = document.getElementById(elementId);
    const phoneInputString = phoneInputElement.value;
    const phoneInput = parseInt(phoneInputString);
    if (isIncrease) {
        phoneInputElement.value = phoneInput + 1;
    }
    else {
        if (phoneInput > 0) {
            phoneInputElement.value = phoneInput - 1;
        }
    }
    return phoneInputElement.value;
}

function SetValuePhoneUpdate(value) {
    const priceUpdate = document.getElementById('mobile-price');
    priceUpdate.innerText = value * 1219;
}


function SetValueCasingUpdate(value) {
    const priceUpdate = document.getElementById('case-price');
    priceUpdate.innerText = value * 59;
}

function Total(elementId) {
    const PhoneTotalElement = document.getElementById(elementId);
    const PhoneTotalString = PhoneTotalElement.innerText;
    const phoneTotal = parseInt(PhoneTotalString);
    return phoneTotal;
}
function calculate() {
    const phonePrice = Total('mobile-price');
    const casePrice = Total('case-price');
    const calculation = phonePrice + casePrice;
    return calculation;
}

function addSubTotal(value) {
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = value;
}

function tax(data) {
    const tax = (data * 0.1).toFixed(3);
    const taxElement = document.getElementById('tax-total');

    taxElement.innerText = parseFloat(tax);
}

function FinalTotal() {
    const taxtotalElement = document.getElementById('tax-total');
    const taxValue = taxtotalElement.innerText;
    const taxx = parseFloat(taxValue);

    const subTotalValue = document.getElementById('sub-total');
    const subTotalString = subTotalValue.innerText;
    const lastTotal = parseInt(subTotalString);

    const Final = lastTotal + taxx;
    const FinalValueElement = document.getElementById('final-total');
    FinalValueElement.innerText = Final;
    return Final.innerText;


}
