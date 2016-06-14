var noteModelModule = angular.module('note.model', [ 'LocalStorageModule' ]);

var noteModel = function(localStorageService) {

	var getNote = function(noteId) {
		var noteDetails = localStorageService.get(noteId);
		if ( noteDetails === null ) {
			return false;
		}
		noteDetails = JSON.parse(noteDetails);
		return {
			id: noteId,
			title: noteDetails.title,
			body: noteDetails.text
		}
	}

	var addNote = function(noteDetails) {
		var noteId = moment.utc().toDate().getTime();
		localStorageService.set(noteId, JSON.stringify(noteDetails));
		return noteId;
	}

	var saveNote = function(noteId, noteTitle, noteBody) {
		if ( null === localStorageService.get(noteId) ) {
			return false;
		} 
		return localStorageService.set(
			noteId, 
			JSON.stringify({ title: noteTitle, text: noteBody })
		);
	}

	var removeNote = function(noteId) { return localStorageService.remove(noteId); }

	var filterAllNotes = function( statusFilter ) {
		var allNotesResult = [];
		var allNotesId = localStorageService.keys();

		angular.forEach(allNotesId, function(noteId) {
			var noteDetails = JSON.parse(localStorageService.get(noteId));
			if ( noteDetails.statusId === statusFilter.id ) {
				allNotesResult.push({
					id: noteId,
					priorityId: noteDetails.priorityId,
					statusId: noteDetails.statusId,
					title: noteDetails.title,
					text: noteDetails.text
				});
			}
		});
		return allNotesResult;
	}

	var canSaveNotes = function() { return localStorageService.isSupported; }

	return { 
		get: getNote,
		add: addNote,
		save: saveNote,
		remove: removeNote,
		filter: filterAllNotes,
		canSave: canSaveNotes
	};
}

noteModel.$inject = ['localStorageService'];

noteModelModule
	.factory('noteModel', noteModel );