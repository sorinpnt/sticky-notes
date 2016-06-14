var addNote = function( $scope, $uibModal, NOTE_PRIORITY, NOTE_STATUS ) {
	this.selected = { value: ''};
	
	this.modalTitle = 'Add Note';
	this.priorities = NOTE_PRIORITY;
	this.status = NOTE_STATUS;
	this.note = {
		title: '',
		body: '',
		priorityId: this.priorities[0].id,
		statusId: this.status[0].id
	};

};

addNote.$inject = ['$scope', '$uibModal', 'NOTE_PRIORITY', 'NOTE_STATUS'];