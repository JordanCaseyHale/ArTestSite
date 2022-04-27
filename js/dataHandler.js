function time_string_to_normalised_points(dataPoints) {
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

	return normalisedPoints;
}

function time_string_to_normalised_points_from_id(id) {
	var data = document.getElementById(id).innerHTML;
	var dataPoints = data.split(',');

	return time_string_to_normalised_points(dataPoints);
}

function time_string_to_normalised_points_given_max_min(dataPoints, max, min) {
	// Get the data points into time values
	const timeValues = [];
	for (var i=0; i<(dataPoints.length); i++) {
		var date = new Date(dataPoints[i]);

		var hours = date.getHours();
		var mins = date.getMinutes();

		timeValues[i] = (hours * 60) + mins;
	}

	var maxDate = new Date(max);
	var maxHours = maxDate.getHours();
	var maxMins = maxDate.getMinutes();
	var maxValue = (maxHours * 60) + maxMins;

	var minDate = new Date(min);
	var minHours = minDate.getHours();
	var minMins = minDate.getMinutes();
	var minValue = (minHours * 60) + minMins;

	// points normalised
	var normalisedPoints = [];
	for (var i=0; i<timeValues.length; i++) {
		normalisedPoints[i] = ((timeValues[i]-minValue)/(maxValue-minValue) * 2) -1;
	}

	return normalisedPoints;
}

function numbers_to_normalised_points(dataPoints) {
	// Select Max
	var maxValue = Math.max.apply(null, dataPoints);
	var maxIndex = dataPoints.indexOf(maxValue);

	// Select Min
	var minValue = Math.min.apply(null, dataPoints);
	var minIndex = dataPoints.indexOf(minValue);

	// normalise points
	var zeroToOne = 0;
	var normalisedPoints = [];
	for (var i=0; i<dataPoints.length; i++) {
		zeroToOne = (dataPoints[i]-minValue)/(maxValue-minValue);
		// Invert between zero and one, increase range, then shift range
		normalisedPoints[i] = ((1-zeroToOne) * 2) - 1;
	}

	return normalisedPoints;
}

function numbers_to_normalised_points_from_id(id) {
	var data = document.getElementById(id).innerHTML;
	var dataPoints = data.split(',');

	return numbers_to_normalised_points(dataPoints);
}

function numbers_to_normalised_points_given_max_min(dataPoints, max, min) {
	// normalise points
	var zeroToOne = 0;
	var normalisedPoints = [];
	for (var i=0; i<dataPoints.length; i++) {
		zeroToOne = (dataPoints[i]-min)/(max-min);
		// Invert between zero and one, increase range, then shift range
		normalisedPoints[i] = ((1-zeroToOne) * 2) - 1;
	}

	return normalisedPoints;
}

function data_from_csv() {
	console.log('Data from CSV');

	var dataID = 'data_csv_';
	var filePath = '';
	var el;

	for (var i=1; i<6; i++) {

		filePath = document.getElementById(dataID+i.toString()).innerHTML;

		if (filePath != '') {
			var dataLeft = [];
			var dataBottom = [];
			var values = [];

			// extract data from csv file
			d3.csv(filePath, (d) => {
				values = Object.values(d);
				dataLeft.push(values[0]);
				dataBottom.push(values[1]);

				// Update graph line entity
				el = document.getElementById('graph_'+i.toString());
				console.log('el', el);
				if (el) {
					console.log('Updating attribute');
					el.setAttribute('graph_lines_csv', {leftPoints: dataLeft, bottomPoints: dataBottom});
				}
			});
		}
	}
}