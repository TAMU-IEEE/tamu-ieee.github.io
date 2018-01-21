$(document).ready(function(){
$(".students").click(function(){
	$("#app_field").slideDown();
	$('html, body').animate({scrollTop: '+=800px'}, 500);

});


$('input[type=radio]').change(function(){
	if(this.value == 'on'){
		$("#team_name_label").slideDown();
		$('#team_hint').text("Glad to see you're bringing friends! Make sure all teammates enter the same thing under Team Name. Names can be changed at a later date.");
	}
	else if(this.value == ''){
		$("#team_name_label").slideUp();
		$('#team_hint').text("Note: It's okay to not be on a team right now. We'll help you find one!");
	}


});

$('input[type=checkbox][name=tempName]').change(function(){
		$("#student_info_wrapper").slideToggle();
	
});


});