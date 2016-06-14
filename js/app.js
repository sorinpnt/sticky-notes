var app = angular.module('app', [ 
	'ui.router',
	'ui.select',
	'ui.bootstrap',
	'app.config',
	'app.view-notes',
	'note.model',
]);

var appCtrl = function( $rootScope, $scope, $uibModal, $state, noteModel ) {

	var ctrl = this;

	ctrl.openAddNote = function() {

		var modalSettings = {
	      	templateUrl: 'js/common/templates/add-edit-note.html',
	        controller: 'addNote as modalCtrl'
	    };

	    var modalClosedSuccesfully = function( newNote ) {
	    	noteModel.add(newNote);
	    	ctrl.refreshNotes();
	    };

	    $uibModal
	    	.open(modalSettings)
	        .result
	        .then(modalClosedSuccesfully);
	};

	ctrl.refreshNotes = function () {
		$rootScope.$broadcast('refreshNotes');
	};

	ctrl.refreshNotes();
};

appCtrl.$inject = [ '$rootScope', '$scope', '$uibModal', '$state', 'noteModel'];

app
	.controller('appCtrl', appCtrl)
	.controller('addNote', addNote)
	.controller('editNote', editNote);
	