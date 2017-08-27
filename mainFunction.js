function calculateThirdSide() {
	var leg1, leg2, hypo;
	leg1 = getFieldDataById('leg1');
	leg2 = getFieldDataById('leg2');
	hypo = getFieldDataById('hypotenuse'); 

	if ( checkForTwoEmptyFields(leg1, leg2, hypo) ) { 
        return alert('At least two fields should be filled up!');
    }
    
    if ( isNaN(leg1) ) {

        leg1 = findLeg(leg2, hypo);
        bringOutTheResult('leg1', leg1);
        highlightResultById('leg1');

    } else if ( isNaN(leg2) ) {

        leg2 = findLeg(leg1, hypo);
        bringOutTheResult('leg2', leg2);
        highlightResultById('leg2');

    } else if ( isNaN(hypo) ) {

        hypo = findHypo(leg1, leg2);
        bringOutTheResult('hypotenuse', hypo);
        highlightResultById('hypotenuse');
        
    }
}
