document.getElementById('btn-case-plus').addEventListener('click', function () {

    const value = Phone(true, 'input-case');
    SetValueCasingUpdate(value);
    const data = calculate();
    addSubTotal(data);
    tax(data);
    FinalTotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const value = Phone(false, 'input-case');

    SetValueCasingUpdate(value);
    const data = calculate();
    addSubTotal(data);
    tax(data);
    FinalTotal();

})