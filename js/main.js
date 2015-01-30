$(document).ready(function() {
	var option = $('input[type=radio]')

	for(i = 0; i < option.count; i++){
		if(option.val() == 0) {
			option.hide();
		}
	}
});