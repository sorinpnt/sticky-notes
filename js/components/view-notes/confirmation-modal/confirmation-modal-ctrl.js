var confirmDeleteModal = function( $scope, $uibModalInstance ) {

	this.ok = function(){ $uibModalInstance.close(this.note); }
	this.cancel = function () { $uibModalInstance.dismiss(); }

};

confirmDeleteModal.$inject = ['$scope', '$uibModalInstance'];