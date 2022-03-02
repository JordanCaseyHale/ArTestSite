function time_string_to_normalised_points(id) {
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
	var maxValue = Math.max.apply(null, timeValues);
	var maxIndex = timeValues.indexOf(maxValue);

	// Select Min
	var minValue = Math.min.apply(null, timeValues);
	var minIndex = timeValues.indexOf(minValue);

	// points normalised
	var normalisedPoints = [];
	for (var i=0; i<timeValues.length; i++) {
		normalisedPoints[i] = ((timeValues[i]-minValue)/(maxValue-minValue) * 2) -1;
	}

	return { minIndex, maxIndex, normalisedPoints };
}

function numbers_to_normalised_points(id) {
	console.log('Number handler');

	var data = document.getElementById(id).innerHTML;
	var dataPoints = data.split(',');

	// Select Max
	var maxValue = Math.max.apply(null, dataPoints);
	var maxIndex = dataPoints.indexOf(maxValue);

	// Select Min
	var minValue = Math.min.apply(null, dataPoints);
	var minIndex = dataPoints.indexOf(minValue);

	// normalise points
	var normalisedPoints = [];
	for (var i=0; i<dataPoints.length; i++) {
		normalisedPoints[i] = ((dataPoints[i]-minValue)/(maxValue-minValue) * 2) - 1;
	}

	return { minIndex, maxIndex, normalisedPoints };
}

function data_from_csv(filePath) {
	console.log('Data from CSV');

	var data1 = [];
	var data2 = [];

	d3.csv(filePath, (d) => {
		for (var i=0; i<d.length; i++) {
			data1[i] = d[i].Speed;
			data2[i] = d[i].Time;
		}
		console.log('data 1',data1);
		console.log('data 2',data2);
	});
}