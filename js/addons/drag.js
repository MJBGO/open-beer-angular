module.exports=function() {
	return {
		restrict: 'A',
		link: function(scope, elm, attrs) {
			var options = scope.$eval(attrs.drag);
			elm.draggable(options);//! Nécessite JQuery UI
		}
	};
};