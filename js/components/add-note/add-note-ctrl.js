var addNote = function( $scope, $uibModalInstance, NOTE_PRIORITY, NOTE_STATUS ) {
	this.selected = { value: ''};
	
	this.modalTitle = 'Add Note';
	this.priorities = NOTE_PRIORITY;
	this.status = NOTE_STATUS;
	this.note = {
		title: '',
		text: '',
		priorityId: this.priorities[0].id,
		statusId: this.status[0].id
	};

	this.ok = function(){
		$uibModalInstance.close(this.note);
	}

	this.cancel = function () {
    	$uibModalInstance.dismiss();
  	}
};

addNote.$inject = ['$scope', '$uibModalInstance', 'NOTE_PRIORITY', 'NOTE_STATUS'];