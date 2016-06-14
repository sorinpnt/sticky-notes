var viewNotesModule = angular.module('app.view-notes', [ 'ui.router' ]);

var getPriorityDetails = function ( noteDetails, notePriorities) {
	for ( var i = 0; i < notePriorities.length ; i++ ) {
		if ( noteDetails.priorityId === notePriorities[i].id ) {
			return notePriorities[i];
		}
	}
};

viewNotesModule
	.controller('partialCtrl', partialCtrl)
	.filter('getPriorityDetails', function () { return getPriorityDetails; })
	.config( function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: "/home",
				views: {
					'statusPending@home': {
						templateUrl: 'js/components/view-notes/partial/partial-template.html',
						controller: 'partialCtrl as partialController',
						resolve: { statusFilter: function(NOTE_STATUS) { return NOTE_STATUS[0]; } }
					},

					'statusInProgress@home': {
						templateUrl: 'js/components/view-notes/partial/partial-template.html',
						controller: 'partialCtrl as partialController',
						resolve: { statusFilter: function(NOTE_STATUS) { return NOTE_STATUS[1]; } }
					},
					'statusDone@home': {
						templateUrl: 'js/components/view-notes/partial/partial-template.html',
						controller: 'partialCtrl as partialController',
						resolve: { statusFilter: function(NOTE_STATUS) { return NOTE_STATUS[2]; } }
					}
				}
			}
		);
});