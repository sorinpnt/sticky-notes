var appConfig = angular.module('app.config', []);

var notesPossiblePriority = [{
	id: 1,
	text: 'High',
	icon: 'fa-arrow-up'
},{	
	id: 2,
	text: 'Medium',
	icon: 'fa-arrows-h'
},{
	id: 3,
	text: 'Low',
	icon: 'fa-arrow-down'
}];

var notesPossibleStatus = [{
	id: 1,
	text: 'Pending',
	icon: 'fa-play'
},
{	
	id: 2,
	text: 'In Progress',
	icon: 'fa-clock-o'
},
{
	id: 3,
	text: 'Done',
	icon: 'fa-check'
}];

appConfig.constant('NOTE_PRIORITY', notesPossiblePriority );
appConfig.constant('NOTE_STATUS', notesPossibleStatus );

