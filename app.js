$(document).ready(function(){
	var sessionLen = 25;
	var breakLen = 5;	
	var counting;
	var pause = false;
	var seconds = 0;
	var minutes = 25;

	$('#time').html(minutes + ":00");

	function countdown(){
		if(minutes === 0 && seconds === 0){
			if($('#timeHead').text() === 'Session'){
				$('#timeHead').text('Break');
				minutes = breakLen;
				$('#time').html(minutes + ":" + seconds);
			}
		else if($('#timeHead').text() === 'Break'){
			$('#timeHead').text('Session');
			minutes = sessionLen;
			$('#time').html(minutes + ":" + seconds);	
		}
	}
		else{
			if(seconds === 0){
				seconds = 60;
				minutes--;
			}
			seconds--;
			if(seconds < 10){
				$('#time').html(minutes + ":0" + seconds);
			}
			else{
				$('#time').html(minutes + ":" + seconds);
			}
		}
	}
	$('#sessionDec').click(function(){
		if(sessionLen>1){
			sessionLen--;
			$('#sessionDisp').html(sessionLen);
			$('#timeHead').html('Session');
			$('#time').html(sessionLen + ":00");
				seconds = 0;
				minutes = sessionLen;
		}
	});

	$('#sessionInc').click(function(){
		sessionLen++;
		$('#sessionDisp').html(sessionLen);
		$('#timeHead').html('Session');
		$('#time').html(sessionLen + ":00");
			seconds = 0;
			minutes = sessionLen;
	});

	$('#breakDec').click(function(){
		if(breakLen>1){
			breakLen--;
			$('#breakDisp').html(breakLen);
			$('#timeHead').html('Session');
			$('#time').html(sessionLen + ":00");
				seconds = 0;
				minutes = sessionLen;
		}
	});

	$('#breakInc').click(function(){
		breakLen++;
		$('#breakDisp').html(breakLen);
		$('#timeHead').html('Session');
		$('#time').html(sessionLen + ":00");
			seconds = 0;
			minutes = sessionLen;
	});


	$('#start').click(function(){
			counting = setInterval(countdown,1000);		
	});


});
