var brLen = 5;
var sLen = 25;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

$(document).ready(function(){
	$('#breakDisp').html(brLen);
$('#breakDec').on('click',function(){
	brLen--;
	if(brLen>0){
			$('#breakDisp').html(brLen);		
	}
});
$('#breakInc').on('click',function(){
	brLen++;
			$('#breakDisp').html(brLen);		
});

	$('#sessionDisp').html(sLen);
$('#sessionDec').on('click',function(){
	sLen--;
	if(sLen>0){
			$('#sessionDisp').html(sLen);		
	}
});
$('#sessionInc').on('click',function(){
	sLen++;
			$('#sessionDisp').html(sLen);		
});
$('#timeBox').on('click',function(){
	startTimer(sLen*60, document.querySelector('#time'));	
})

});
	