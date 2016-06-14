var viewNotesModule = angular.module('app.view-notes', [ 'ui.router' ]);

var getPriorityDetailsFilter = function ( noteDetails, notePriorities) {
	for ( var i = 0; i < notePriorities.length ; i++ ) {
		if ( noteDetails.priorityId === notePriorities[i].id ) {
			return notePriorities[i];
		}
	}
};

var showElapsedTimeFilter = function ( timestamp ) {
	// @TO-DO : fix bug when creation date is in previous day
	var currentTimestamp = moment.utc().toDate().getTime();
	var creationTimestamp = moment( parseInt(timestamp) );
	var timestampDifference = moment.utc(currentTimestamp).diff(creationTimestamp);

	var elapsedDays = moment.utc(timestampDifference).format('D');
	var elapsedHours = moment.utc(timestampDifference).format('h');
	var elapsedMinutes = moment.utc(timestampDifference).format('m');
	var result = '';

	if ( elapsedDays !== '0' ) {
		result += ( elapsedDays+ 'd ');
	}
	if ( elapsedHours !== '0' ) {
		result += ( elapsedHours+ 'h ');
	}
	if ( elapsedMinutes !== '0' ) {
		result += ( elapsedMinutes+ 'm ');
	}
	return result + ' ago';
};

viewNotesModule
	.controller('partialCtrl', partialCtrl)
	.controller('confirmDeleteModal', confirmDeleteModal)
	.filter('getPriorityDetails', function () { return getPriorityDetailsFilter; })
	.filter('getElapsedTime', function () { return showElapsedTimeFilter; })
	.config( function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: "/home",
				views: {
					'statusPending@home': {
						templateUrl: 'js/components/view-notes/partial/partial-template.html',
						controller: 'partialCtrl as partialController',
						resolve: { filterStatus: function(NOTE_STATUS) { return NOTE_STATUS[0]; } }
					},

					'statusInProgress@home': {
						templateUrl: 'js/components/view-notes/partial/partial-template.html',
						controller: 'partialCtrl as partialController',
						resolve: { filterStatus: function(NOTE_STATUS) { return NOTE_STATUS[1]; } }
					},
					'statusDone@home': {
						templateUrl: 'js/components/view-notes/partial/partial-template.html',
						controller: 'partialCtrl as partialController',
						resolve: { filterStatus: function(NOTE_STATUS) { return NOTE_STATUS[2]; } }
					}
				}
			}
		);
});