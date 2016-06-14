var partialCtrl = function( $rootScope, $scope, $stateParams, $uibModal, noteModel, NOTE_PRIORITY, filterStatus ) {
	var ctrl = this;
	ctrl.notePriorities = NOTE_PRIORITY;
	ctrl.filterStatus = filterStatus;
	
	var refreshCurrentNotes = function() {
		ctrl.notes = noteModel.filter(ctrl.filterStatus);
	};

	var refreshAllNotes = function() {
		$rootScope.$broadcast('refreshNotes');
	};

	$rootScope.$on('refreshNotes', refreshCurrentNotes );
	
	ctrl.deleteNote = function(noteId) {

		var modalSettings = {
	      	templateUrl: 'js/components/view-notes/confirmation-modal/confirmation-modal-template.html',
	        controller: 'confirmDeleteModal as modalCtrl'
	    };

	    var deleteWasConfirmed = function( newNote ) {
			noteModel.remove(noteId);
			refreshCurrentNotes();
	    };

	    $uibModal
	    	.open(modalSettings)
	        .result
	        .then(deleteWasConfirmed);

	};

	ctrl.editNote = function(noteId) {

		var modalSettings = {
	      	templateUrl: 'js/common/templates/add-edit-note.html',
	        controller: 'editNote as modalCtrl',
	        resolve: { noteId: function() { return noteId; } }
	    };

	    var modalClosedSuccesfully = function( newNote ) {
	    	noteModel.update(newNote);
	    	refreshAllNotes();
	    };

	    $uibModal
	    	.open(modalSettings)
	        .result
	        .then(modalClosedSuccesfully);
	};

	refreshCurrentNotes();

};

partialCtrl.$inject = [ 
	'$rootScope',
	'$scope',
	'$stateParams',
	'$uibModal',
	'noteModel',
	'NOTE_PRIORITY', 
	'filterStatus'
];