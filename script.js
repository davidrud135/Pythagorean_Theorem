function calculate() {
	var leg1, leg2, hypo, firstCondition, secondCondition, thirdCondition;
	leg1 = parseInt(document.getElementById('leg1').value.trim() );
	leg2 = parseInt(document.getElementById('leg2').value.trim() );
	hypo = parseInt(document.getElementById('hypotenuse').value.trim() ); 

	firstCondition = isNaN(leg1) && isNaN(leg2);
	secondCondition = isNaN(hypo) && isNaN(leg1);
	thirdCondition = isNaN(hypo) && isNaN(leg2);

	if (firstCondition || secondCondition  || thirdCondition) {
		alert('At least 2 fiels should be filled up!');
	} else if ( isNaN(leg1) ) {

		findLeg1(leg2, hypo);
		highlightResultLeg1();

	} else if ( isNaN(leg2) ) {

		findLeg2(leg1, hypo);
		highlightResultLeg2();

	} else if ( isNaN(hypo) ) {

		findHypo(leg1, leg2);
		highlightResultHypo();

	} else {
		alert('Error!\nPlease try again');
	}
}

function clearFields() {
	var firstFieldValue, secondFieldValue, thirdFieldValue;
	var field1, field2, field3;

	firstFieldValue = document.getElementById('leg1').value = '';
	secondFieldValue = document.getElementById('leg2').value = '';
	thirdFieldValue = document.getElementById('hypotenuse').value = '';	

	field1 = document.getElementById('leg1');
	field2 = document.getElementById('leg2');
	field3 = document.getElementById('hypotenuse');

	field1.style.fontWeight = 'normal';
	field2.style.fontWeight = 'normal';
	field3.style.fontWeight = 'normal';

	field1.style.color = '#000';
	field2.style.color = '#000';
	field3.style.color = '#000';
}

function findHypo(leg1, leg2) {
	leg1 = toSquare(leg1);
	leg2 = toSquare(leg2);
	hypo = Math.sqrt(leg1 + leg2);
	return document.getElementById('hypotenuse').value = hypo.toFixed(3);
}

function findLeg1(leg2, hypo) {
	if (hypo <= leg2) {
		alert('Value of \'c\' should be greater than \'a\' and \'b\'!');
	} else {
		leg2 = toSquare(leg2);
		hypo = toSquare(hypo);
		leg1 = Math.sqrt(hypo - leg2);
		return document.getElementById('leg1').value = leg1.toFixed(3);
	}
}

function findLeg2(leg1, hypo) {
	if (hypo <= leg1) {
		alert('Value of \'c\' should be greater than \'a\' and \'b\'!');
	} else {
		leg1 = toSquare(leg1);
		hypo = toSquare(hypo);
		leg2 = Math.sqrt(hypo - leg1);
		return document.getElementById('leg2').value = leg2.toFixed(3);
	}
}

function highlightResultHypo() {
	var resultInput = document.getElementById('hypotenuse');
	resultInput.style.color = 'blue';
	resultInput.style.fontWeight = 'bold';
}

function highlightResultLeg1() {
	var resultInput = document.getElementById('leg1');
	resultInput.style.color = 'blue';
	resultInput.style.fontWeight = 'bold';
}

function highlightResultLeg2() {
	var resultInput = document.getElementById('leg2');
	resultInput.style.color = 'blue';
	resultInput.style.fontWeight = 'bold';
}

function toSquare(x) {
	return x * x;
}
