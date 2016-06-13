var app = angular.module('app', [ 
	'ui.router',
	'note.model',
	'ui.bootstrap'
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

appCtrl.$inject = ['$scope', '$uibModal', 'noteModel'];

app
	.controller('appCtrl', appCtrl)
	.controller('addNote', addNote);
	