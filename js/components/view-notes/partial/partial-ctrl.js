var partialCtrl = function( $rootScope, $scope, $stateParams, noteModel, NOTE_PRIORITY, statusFilter ) {
	var ctrl = this;
	var refreshNotes = function() {
		ctrl.notes = noteModel.filter(statusFilter);
	};
	ctrl.notePriorities = NOTE_PRIORITY;

	$rootScope.$on('refreshNotes', refreshNotes );
	
	ctrl.statusFilter = statusFilter;
	refreshNotes();

};

partialCtrl.$inject = [ 
	'$rootScope',
	'$scope',
	'$stateParams',
	'noteModel',
	'NOTE_PRIORITY', 
	'statusFilter'
];