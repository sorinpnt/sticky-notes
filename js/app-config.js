var appConfig = angular.module('app.config', []);

var notesPossiblePriority = [{
	value: 3,
	text: 'Low'
},
{	
	value: 2,
	text: 'Medium'
},
{
	value: 1,
	text: 'High'
}];

var notesPossibleStatus = [{
	value: 1,
	text: 'Pending',
	icon: 'fa-play'
},
{	
	value: 2,
	text: 'In Progress',
	icon: 'fa-clock-o'
},
{
	value: 3,
	text: 'Done',
	icon: 'fa-check'
}];

appConfig.constant('NOTE_PRIORITY', notesPossiblePriority );
appConfig.constant('NOTE_STATUS', notesPossibleStatus );

