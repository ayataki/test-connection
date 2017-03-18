(function() {
	$.noConflict();
	let checkStatus = () => {
		if (navigator.onLine) {
			jQuery("#jquery").html("<i class=\"fa fa-circle text-success\" aria-hidden=\"true\"></i> Online");
		} else {
			jQuery("#jquery").html("<i class=\"fa fa-circle text-danger\" aria-hidden=\"true\"></i> Offline");
		}
	};

	jQuery(window).bind("online offline", () => {
		checkStatus();
	});

})();