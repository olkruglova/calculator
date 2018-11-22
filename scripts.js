$( document ).ready(function() {
        let activeLine = document.createElement('P');
    $('.btn-calc').on('click', function(){
        let inputLine = $('#input-line');
        activeLine.innerHTML += $(this).val();
        inputLine.append(activeLine);
    })
    $('.btn-equals').on('click', function(){
        let toCalc = activeLine.innerHTML.replace('÷', '/');
        let result = eval(toCalc);
        if (result == Infinity) {
            result = 0;
        }
        console.log(result);
        activeLine.innerHTML = result;
    })
    $('.btn-ce').on('click', function(){
        activeLine.innerHTML = '';
    })
})