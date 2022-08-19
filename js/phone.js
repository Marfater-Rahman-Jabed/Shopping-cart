document.getElementById('btn-case-plus1').addEventListener('click', function () {

    const value = Phone(true, 'input-case1');
    SetValuePhoneUpdate(value);
    const data = calculate();
    addSubTotal(data);
    tax(data);
    FinalTotal();

})

document.getElementById('btn-case-minus1').addEventListener('click', function () {
    const value = Phone(false, 'input-case1');
    SetValuePhoneUpdate(value);
    const data = calculate();
    addSubTotal(data);
    tax(data);
    FinalTotal();


})
