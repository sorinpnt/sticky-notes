var app = angular.module('app', [ 
	'ui.router',
	'note.model'
]);

var appCtrl = function( $scope, noteModel ) {
	//noteModel.log();
};

appCtrl.$inject = ['$scope', 'noteModel'];

app.controller('appCtrl', appCtrl);