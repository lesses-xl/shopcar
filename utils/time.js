	var timeNumber = 0;
	var dates = new Date();
	var year = dates.getFullYear() + '';
	var month = dates.getMonth() + 1 + '';
	var date = dates.getDate() + '';
	var minute = dates.getMinutes() + '';
	var second = dates.getSeconds() + '';
	var time = dates.getTime() % 6 + '';
	time = parseInt(Math.random() * time);

	if(month.length < 2) {
		month = '0' + month
	}

	if(minute.length < 2) {
		minute = '0' + minute
	}

	if(second.length < 2) {
		second = '0' + second
	}

	timeNumber = year + month + date + minute + second + minute + second + time;

	var countNum = 60;

module.exports = {
	time: timeNumber,
	countNum: countNum
}