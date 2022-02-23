function time_string_to_normalised_points(id) {
	console.log('Time handler');

	var data = document.getElementById(id).innerHTML;
	var dataPoints = data.split(',');

	// Get the data points into time values
	const timeValues = [];
	for (var i=0; i<(dataPoints.length); i++) {
		console.log(i, dataPoints[i]);
		var date = new Date(dataPoints[i]);
		console.log('Date:', date);

		var hours = date.getHours();
		var mins = date.getMinutes();

		timeValues[i] = (hours * 60) + mins
		console.log('timeValue:', timeValues[i]);
	}

	// Select Max
	var maxValue = Math.max.apply(null, timeValues);
	var maxIndex = timeValues.indexOf(maxValue);
	console.log(maxValue, maxIndex);

	// Select Min
	var minValue = Math.min.apply(null, timeValues);
	var minIndex = timeValues.indexOf(minValue);
	console.log(minValue, minIndex);

	// points normalised
	var normalisedPoints = [];
	for (var i=0; i<timeValues.length; i++) {
		normalisedPoints[i] = (timeValues[i]-minValue)/(maxValue-minValue);
	}
	console.log('normalisedPoints',normalisedPoints);

	return { minIndex, maxIndex, normalisedPoints };
}