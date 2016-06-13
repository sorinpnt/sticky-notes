var addNote = function( $scope, $uibModal ) {
	this.modalTitle = 'Add Note';
	this.note = {
		title: '',
		body: ''
	};

};

addNote.$inject = ['$scope', '$uibModal'];