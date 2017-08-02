function calculateThirdSide() {
	var leg1, leg2, hypo;
	leg1 = getFieldDataById('leg1');
	leg2 = getFieldDataById('leg2');
	hypo = getFieldDataById('hypotenuse');

	checkForTwoEmptyFields(leg1, leg2, hypo); 

	switch(true) {
		case isItEmpty(leg1):
			findLeg1(leg2, hypo);
			highlightResultById('leg1');
			break;
		case isItEmpty(leg2):
			findLeg2(leg1, hypo);
			highlightResultById('leg2');
			break;
		case isItEmpty(hypo):
			findHypo(leg1, leg2);
			highlightResultById('hypotenuse');
			break;
	}
}

function clearAllFields() {
	var resultField = document.querySelector('.highlighted_result');
	resultField.className = 'field';

	clearFieldDataById('leg1');
	clearFieldDataById('leg2');
	clearFieldDataById('hypotenuse');
}

function checkForTwoEmptyFields(leg1, leg2, hypo) {
	switch(true) {
		case isItEmpty(leg1) && isItEmpty(leg2):
		case isItEmpty(leg1) && isItEmpty(hypo):
		case isItEmpty(leg2) && isItEmpty(hypo):
			alert('At least two fields should be filled up!');
			break;
	}
}

function findLeg1(leg2, hypo) {
	if (hypo <= leg2) {
		alert('Value of \'c\' should be greater than \'a\' and \'b\'!');
	} else {
		leg2 = toSquare(leg2);
		hypo = toSquare(hypo);
		leg1 = Math.sqrt(hypo - leg2);
		document.getElementById('leg1').value = leg1.toFixed(2);
	}
}

function findLeg2(leg1, hypo) {
	if (hypo <= leg1) {
		alert('Value of \'c\' should be greater than \'a\' and \'b\'!');
	} else {
		leg1 = toSquare(leg1);
		hypo = toSquare(hypo);
		leg2 = Math.sqrt(hypo - leg1);
		document.getElementById('leg2').value = leg2.toFixed(2);
	}
}

function findHypo(leg1, leg2) {
	leg1 = toSquare(leg1);
	leg2 = toSquare(leg2);
	hypo = Math.sqrt(leg1 + leg2);
	document.getElementById('hypotenuse').value = hypo.toFixed(2);
}

function highlightResultById(id) {
	var resultField = document.getElementById(id);
	resultField.classList.add('highlighted_result');
}

function clearFieldDataById(id) {
	document.getElementById(id).value = '';
}

function getFieldDataById(id) {
	return parseInt(document.getElementById(id).value.trim() );
}

function isItEmpty(field) {
	return isNaN(field);
}

function toSquare(x) {
	return x * x;
}