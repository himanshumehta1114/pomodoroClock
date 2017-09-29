var brLen = 5;
var sLen = 25;
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

});
	