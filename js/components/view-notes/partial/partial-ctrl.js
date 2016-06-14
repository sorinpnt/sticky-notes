var partialCtrl = function( $rootScope, $scope, $stateParams, $uibModal, noteModel, NOTE_PRIORITY, statusFilter ) {
	var ctrl = this;
	var refreshNotes = function() {
		ctrl.notes = noteModel.filter(statusFilter);
	};
	ctrl.notePriorities = NOTE_PRIORITY;

	$rootScope.$on('refreshNotes', refreshNotes );
	
	ctrl.statusFilter = statusFilter;
	ctrl.deleteNote = function(noteId) {

		var modalSettings = {
	      	templateUrl: 'js/components/view-notes/confirmation-modal/confirmation-modal-template.html',
	        controller: 'confirmDeleteModal as modalCtrl'
	    };

	    var deleteWasConfirmed = function( newNote ) {
			noteModel.remove(noteId);
			refreshNotes();
	    };

	    $uibModal
	    	.open(modalSettings)
	        .result
	        .then(deleteWasConfirmed);

	};
	refreshNotes();

};

partialCtrl.$inject = [ 
	'$rootScope',
	'$scope',
	'$stateParams',
	'$uibModal',
	'noteModel',
	'NOTE_PRIORITY', 
	'statusFilter'
];