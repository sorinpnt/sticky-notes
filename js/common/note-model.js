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

	var addNote = function(noteTitle, noteBody) {
		var noteId = moment().toDate().getTime();
		localStorageService.set(noteId, JSON.stringify({ title: noteTitle, text: noteBody }));
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

	var getAllNotes = function() {
		var allNotesResult = [];
		var allNotesId = localStorageService.keys();
		angular.forEach(allNotesId, function(noteId) {
			var noteDetails = JSON.parse(localStorageService.get(noteId));
			allNotesResult.push({
				id: noteId,
				title: noteDetails.title,
				body: noteDetails.text
			});
		});
		return allNotesResult;
	}

	var removeAllNotes = function() { return localStorageService.clearAll(); }

	var canSaveNotes = function() { return localStorageService.isSupported; }

	return { 
		get: getNote,
		add: addNote,
		save: saveNote,
		remove: removeNote,
		getAll: getAllNotes,
		removeAll: removeAllNotes,
		canSave: canSaveNotes
	};
}

noteModel.$inject = ['localStorageService'];

noteModelModule
	.factory('noteModel', noteModel );