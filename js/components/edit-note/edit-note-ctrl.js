var editNote = function( $scope, $uibModalInstance, noteId, noteModel, NOTE_PRIORITY, NOTE_STATUS ) {
	this.modalTitle = 'Edit Note';
	this.priorities = NOTE_PRIORITY;
	this.status = NOTE_STATUS;
	this.note = noteModel.get(noteId);

	this.ok = function(){
		$uibModalInstance.close(this.note);
	}

	this.cancel = function () {
    	$uibModalInstance.dismiss();
  	}
};

editNote.$inject = ['$scope', '$uibModalInstance', 'noteId', 'noteModel', 'NOTE_PRIORITY', 'NOTE_STATUS'];