$(document).ready(function() {
    $('form').submit(function calculateThirdSide() {
        let leg1, leg2, hypo;
        leg1 = getFieldDataById('leg1');
        leg2 = getFieldDataById('leg2');
        hypo = getFieldDataById('hypotenuse'); 

        if (checkForTwoEmptyFields(leg1, leg2, hypo)) { 
            return alert('At least two fields should be filled up!');
        }
        
        if (isNaN(leg1)) {
            leg1 = findLeg(leg2, hypo);
            bringOutTheResult('leg1', leg1);
            highlightResultById('leg1');
        } else if (isNaN(leg2)) {
            leg2 = findLeg(leg1, hypo);
            bringOutTheResult('leg2', leg2);
            highlightResultById('leg2');
        } else if (isNaN(hypo)) {
            hypo = findHypo(leg1, leg2);
            bringOutTheResult('hypotenuse', hypo);
            highlightResultById('hypotenuse');
        }
        return false;
    });

    $('input[type=button]').click(function clearAllFields() {
        $('.highlighted_result').removeClass('highlighted_result');
        clearFieldDataById('leg1');
        clearFieldDataById('leg2');
        clearFieldDataById('hypotenuse');
    });

    function getFieldDataById(id) {
        return parseInt( $('#' + id).val().trim() );
    }

    function checkForTwoEmptyFields(leg1, leg2, hypo) {
        const firstAndSecondFieldsAreEmpty = isNaN(leg1) && isNaN(leg2);
        const firstAndThirdFieldsAreEmpty = isNaN(leg1) && isNaN(hypo);
        const secondAndThirdFieldsAreEmpty = isNaN(leg2) && isNaN(hypo); 
         
        if (firstAndSecondFieldsAreEmpty || firstAndThirdFieldsAreEmpty || secondAndThirdFieldsAreEmpty) {
            return true;
        }
        return false;
    }

    function findLeg(leg, hypo) {
        if (hypo <= leg) {
            alert('Value of \'c\' should be greater than \'a\' and \'b\'!');
        } else {
            leg = toSquare(leg);
            hypo = toSquare(hypo);
            let leg2 = Math.sqrt(hypo - leg);
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
        $(`#${fieldId}`).val(() => result.toFixed(2));
    }

    function highlightResultById(id) {
        $(`#${id}`).addClass('highlighted_result');
    }

    function toSquare(x) {
        return x * x;
    }

    function clearFieldDataById(id) {
        $(`#${id}`).val(() => '');
    }
});
