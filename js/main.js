$(document).ready(function() {
	var option = $('button[type=button]')

	for(i = 0; i < option.count; i++){
		if(option.val() == 0) {
			option.hide();
		}
	}
});