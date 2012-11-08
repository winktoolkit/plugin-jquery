(function(jQuery) {
	if (jQuery && jQuery.fn) {
		var wrapper = jQuery.fn;
		wink.query.extend(wink, [ "getPosition", "getTopPosition", "getLeftPosition" ], true, wrapper);
		wink.query.extend(wink.fx, [ "getTransformPosition", "hasClass" ], true, wrapper);
		wink.query.extend(wink.fx, [ "translate", "rotate", "scale", "addClass", "removeClass", 
		                             "apply", "applyTransition", "applyTransformTransition", "onTransitionEnd" ], false, wrapper);
		wink.query.extend(wink.ux.gesture, [ "listenTo", "unlistenTo" ], false, wrapper);
	}
})(window.jQuery);