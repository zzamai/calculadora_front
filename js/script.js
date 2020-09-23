var textarea = document.getElementById('displayNumber');

function typeInDisplay(elem) {
    if(elem.value !== '=' ) {
        textarea.innerHTML = textarea.innerHTML + elem.value;
    } else {
        textarea.innerHTML = (math.evaluate(textarea.innerHTML.toString()));
    }
}

function calculate(n1, n2, operator) {

}

// if(elem.value === '/' || elem.value === '*' || elem.value === '-' || elem.value === '+') {
    //     operator = elem.value;
    // } else if(elem.value === '=' ) {
    //     numbers = textarea.innerHTML.toString().replace(/\D/g, '').split();
    //     console.log(numbers);
    //     calculate();
    // }