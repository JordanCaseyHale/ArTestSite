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
			});

			console.log(dataLeft);
			console.log(dataBottom);
			// Update graph line entity
			//el = document.getElementById('graph_'+i.toString());
			//el.setAttribute('graph_lines_csv', {leftPoints: dataLeft, bottomPoints: dataBottom});
		}
	}
}