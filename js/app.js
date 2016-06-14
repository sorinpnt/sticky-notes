var app = angular.module('app', [ 
	'ui.router',
	'ui.select',
	'ui.bootstrap',
	'note.model',
	'app.config'
]);

var appCtrl = function( $scope, $uibModal, noteModel ) {
	
	this.openAddNote = function() {

		var modalSettings = {
	      	templateUrl: 'js/common/templates/add-edit-note.html',
	        controller: 'addNote as modalCtrl'
	    };
	   var modalInstance = $uibModal.open(modalSettings);

	};

};

appCtrl.$inject = ['$scope', '$uibModal', 'NOTE_PRIORITY', 'noteModel'];

app
	.controller('appCtrl', appCtrl)
	.controller('addNote', addNote);
	