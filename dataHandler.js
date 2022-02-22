export function time_string_to_normalised_points(id) {
	console.log('Time handler');

	var data = document.getElementById(id).innerHTML;
	var dataPoints = data.split(',');

	// Get the data points into time values
	const timeValues = [];
	for (var i=0; i<(dataPoints.length); i++) {
		var date = new Date(dataPoints[i]);

		var hours = date.getHours();
		var mins = date.getMinutes();

		timeValues[i] = (hours * 60) + mins
	}

	// Select Max
	var maxValue = Math.max(timeValues);
	var maxIndex = timeValues.indexOf(maxValue);

	// Select Min
	var minValue = Math.min(timeValues);
	var minIndex = timeValues.indexOf(minValue);

	// points normalised
	var normalisedPoints = [];
	for (var i=0; i<timeValues.length; i++) {
		normalisedPoints[i] = (timeValues[i]-minValue)/(maxValue-minValue);
	}

	return minIndex, maxIndex, normalisedPoints;
}