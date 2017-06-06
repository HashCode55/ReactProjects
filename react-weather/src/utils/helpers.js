var daymap = {
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
	0: 'Sunday'	
}

var monthmap = {
	0: 'January',
	1: 'February',
	2: 'March',
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'July',
	7: 'August',
	8: 'September',
	9: 'October',
	10: 'November',
	11: 'December'
}

function getDate(t) {
	// console.log(t);
	var d = new Date(t * 1000);	
	var day = daymap[d.getDay()];
	// console.log(d.getDay())
	var month = monthmap[d.getMonth()];
	return day + ', ' + month + ' ' + d.getDate();
}

module.exports = {
	getDate: getDate
};