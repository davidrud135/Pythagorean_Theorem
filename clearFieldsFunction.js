function clearAllFields() {
    var resultField = document.querySelector('.highlighted_result');
    resultField.className = 'field';

    clearFieldDataById('leg1');
    clearFieldDataById('leg2');
    clearFieldDataById('hypotenuse');
}