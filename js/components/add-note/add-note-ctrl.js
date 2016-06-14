var addNote = function( $scope, $uibModal, NOTE_PRIORITY, NOTE_STATUS ) {
	this.modalTitle = 'Add Note';
	this.priorities = NOTE_PRIORITY;
	this.status = NOTE_STATUS;
	this.note = {
		title: '',
		body: ''
	};

};

addNote.$inject = ['$scope', '$uibModal', 'NOTE_PRIORITY', 'NOTE_STATUS'];