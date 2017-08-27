function getFieldDataById(id) {
	return parseInt(document.getElementById(id).value.trim() );
}

function checkForTwoEmptyFields(leg1, leg2, hypo) {
    var firstAndSecondFieldsIsEmpty = isNaN(leg1) && isNaN(leg2);
    var firstAndThirdFieldsIsEmpty = isNaN(leg1) && isNaN(hypo);
    var secondAndThirdFieldsIsEmpty = isNaN(leg2) && isNaN(hypo); 
	 
    if (firstAndSecondFieldsIsEmpty || firstAndThirdFieldsIsEmpty || secondAndThirdFieldsIsEmpty) {
        return true;
    }
}

function findLeg(leg, hypo) {
    if (hypo <= leg) {
		alert('Value of \'c\' should be greater than \'a\' and \'b\'!');
	} else {
		leg = toSquare(leg);
		hypo = toSquare(hypo);
        var leg2 = Math.sqrt(hypo - leg);
		return leg2;
	}
}

function findHypo(leg1, leg2) {
	leg1 = toSquare(leg1);
	leg2 = toSquare(leg2);
    hypo = Math.sqrt(leg1 + leg2);
	return hypo;
}

function bringOutTheResult(fieldId, result) {
    document.getElementById(fieldId).value = result.toFixed(2);
}

function highlightResultById(id) {
	var resultField = document.getElementById(id);
	resultField.classList.add('highlighted_result');
}

function toSquare(x) {
	return x * x;
}

function clearFieldDataById(id) {
	document.getElementById(id).value = '';
}