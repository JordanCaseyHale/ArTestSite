AFRAME.registerComponent('graph', {
    init: function () {
        //console.log('start graph axis lines');

        // Create axes
        this.el.setAttribute('line', {
            start: '-1 0 -1',
            end: '-1 0 1',
            color: '#800080'
        });
        this.el.setAttribute('line__1', {
            start: '-1 0 1',
            end: '1 0 1',
            color: '#800080'
        });

        //console.log('finish graph axis lines');
    }
});

AFRAME.registerComponent('graph_axis_bottom', {
    init: function () {
        //console.log('start bottom label');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Bottom_' + graphID.toString();
        var label = document.getElementById(dataID).innerHTML;

        //position axis
        this.el.setAttribute('position', '1.5 0 1.25');
        this.el.setAttribute('rotation', '-90 0 0');
        this.el.setAttribute('scale', '7.5 7.5 7.5');

        //Add label
        this.el.setAttribute('text', {
            value: label,
            height: 0.5,
            width: 0.5
        });
        //console.log('finish bottom label');
    }
});

AFRAME.registerComponent('graph_axis_bottom_numbers', {
    init: function () {
        //console.log('start bottom numbers');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Bottom_Numbers_' + graphID.toString();
        var labels = document.getElementById(dataID).innerHTML;
        var labels_split = labels.split(',');

        //Centre numbers
        this.el.setAttribute('position', '-0.1 0 1.10');
        this.el.setAttribute('rotation', '-90 0 0');
        this.el.setAttribute('scale', '6 6 6');

        for (var i=0; i<(labels_split.length); i++) {

            //Create text ID
            var textID = 'text__'+(i).toString();

            //Add text
            this.el.setAttribute(textID, {
                value: labels_split[i],
                height: 0.3,
                width: 0.3,
                xOffset: i/(labels_split.length * 2.5)
            });
        }

        //console.log('finish bottom numbers');
    }
});

AFRAME.registerComponent('graph_axis_left', {
    init: function () {
        //console.log('start left label');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Left_' + graphID.toString();
        var label = document.getElementById(dataID).innerHTML;

        //position axis
        this.el.setAttribute('position', '-1.5 0 -1.5');
        this.el.setAttribute('rotation', '-90 90 0');
        this.el.setAttribute('scale', '7.5 7.5 7.5');

        //Add label
        this.el.setAttribute('text', {
            value: label,
            height: 0.5,
            width: 0.5
        });

        //console.log('finish left label');
    }
});

AFRAME.registerComponent('graph_axis_left_numbers', {
    init: function () {
        //console.log('start left numbers');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Left_Numbers_' + graphID.toString();
        var labels = document.getElementById(dataID).innerHTML;
        var labels_split = labels.split(',');

        //Centre numbers
        this.el.setAttribute('position', '-1.15 0 0.1');
        this.el.setAttribute('rotation', '-90 90 0');
        this.el.setAttribute('scale', '6 6 6');

        for (var i=0; i<(labels_split.length); i++) {

            //Create text ID
            var textID = 'text__'+(i).toString();

            //Add text
            this.el.setAttribute(textID, {
                value: labels_split[i],
                height: 0.3,
                width: 0.3,
                xOffset: i/(labels_split.length * 2.5)
            });
        }

        //console.log('finish left numbers');
    }
});

AFRAME.registerComponent('graph_lines', {
    init: function () {
        //console.log('start add lines');
        var graphID = this.el.getAttribute('id');
        var dataID = 'data_' + graphID.toString();
        var data = document.getElementById(dataID).innerHTML;
        var dataPoints = data.split(',');
        
        for (var i=0; i<(dataPoints.length-1); i++) {
            //console.log("start:",dataPoints[i]);
            //console.log("end:",dataPoints[i+1]);

            //Create Line ID ( +2 due to axes )
            var lineID = 'line__'+(i+2).toString();

            // Add Line
            this.el.setAttribute(lineID, {
                start: dataPoints[i],
                end: dataPoints[i+1],
                color: '#FF5E7A'
            }); 
        }

        //console.log('finish add lines');
    }
});

AFRAME.registerComponent('graph_lines_csv', {
    schema: {
        leftPoints: {default: []},
        bottomPoints: {default: []},
        id: {default: 0},
        filePath: {default: ''}
    },

    init: function () {
        var graphID = this.el.getAttribute('id').replace('graph_', '');
        this.data.id = graphID;
        var dataLeftID = 'data_left_' + graphID.toString();
        var dataBottomID = 'data_bottom_' + graphID.toString();
        var dataLeft = document.getElementById(dataLeftID).innerHTML;
        var dataBottom = document.getElementById(dataBottomID).innerHTML;
        this.data.leftPoints = dataLeft.split(',');
        this.data.bottomPoints = dataBottom.split(',');
        this.data.filePath = document.getElementById('data_csv_'+this.data.id.toString()).innerHTML;
    },

    update: function (oldData) {
        //console.log('start add lines');
        var data = this.data;

        console.log('Data from CSV');

        if (data.filePath != '') {
            var dataLeft = [];
            var dataBottom = [];
            var values = [];

            // extract data from csv file
            d3.csv(data.filePath, (d) => {
                values = Object.values(d);
                dataLeft.push(values[0]);
                dataBottom.push(values[1]);
                //data.leftPoints.push(values[0]);
                //data.bottomPoints.push(values[1]);

                // Update graph line entity
                console.log('Updating attribute');
                this.el.setAttribute('graph_lines_csv', {leftPoints: dataLeft, bottomPoints: dataBottom});
                
            });

            data.filePath = '';
        }

        var numDataPoints = Math.max(data.leftPoints.length, data.bottomPoints.length);

        var startPoint = '0 0 0';
        var endPoint = '0 0 0';

        console.log('Create lines', numDataPoints);

        for (var i=0; i<(numDataPoints.length-1); i++) {

            //Create Line ID ( +2 due to axes )
            var lineID = 'line__'+(i+2).toString();

            // Create points
            startPoint = `${data.bottomPoints[i]} 0 ${data.leftPoints[i]}`;
            endPoint = `${data.bottomPoints[i+1]} 0 ${data.leftPoints[i+1]}`;

            console.log(lineID);
            console.log('startPoint', startPoint);
            console.log('endPoint', endPoint);

            // Add Line
            this.el.setAttribute(lineID, {
                start: startPoint,
                end: endPoint,
                color: '#FF5E7A'
            }); 
        }

        console.log('finish add lines');
    }
});

AFRAME.registerComponent('graph_lines_csv2', {
    schema: {
        leftPoints: {default: []},
        bottomPoints: {default: []},
        id: {default: 0},
        filePath: {default: ''},
        lineID: {default: 2}
    },

    init: function () {
        var graphID = this.el.getAttribute('id').replace('graph_', '');
        this.data.id = graphID;
        var dataLeftID = 'data_left_' + graphID.toString();
        var dataBottomID = 'data_bottom_' + graphID.toString();
        var dataLeft = document.getElementById(dataLeftID).innerHTML;
        var dataBottom = document.getElementById(dataBottomID).innerHTML;
        this.data.leftPoints = dataLeft.split(',');
        this.data.bottomPoints = dataBottom.split(',');
        this.data.filePath = document.getElementById('data_csv_'+this.data.id.toString()).innerHTML;
    },

    update: function (oldData) {
        //console.log('start add lines');
        var data = this.data;

        console.log('Data from CSV');

        if (data.filePath != '') {
            var dataLeft = [];
            var dataBottom = [];
            var values = [];

            // extract data from csv file
            d3.csv(data.filePath, (d) => {
                values = Object.values(d);
                dataLeft.push(values[0]);
                dataBottom.push(values[1]);
                //data.leftPoints.push(values[0]);
                //data.bottomPoints.push(values[1]);

                // Update graph line entity
                console.log('Updating attribute');
                this.el.setAttribute('graph_lines_csv', {leftPoints: dataLeft, bottomPoints: dataBottom});
                
            });

            data.filePath = '';
        }

        var numDataPoints = Math.max(data.leftPoints.length, data.bottomPoints.length);

        var startPoint = '0 0 0';
        var endPoint = '0 0 0';

        console.log('Create lines', numDataPoints);

        for (var i=0; i<(numDataPoints.length-1); i++) {

            //Create Line ID ( +2 due to axes )
            var lineID = 'line__'+(i+2).toString();

            // Create points
            startPoint = `${data.bottomPoints[i]} 0 ${data.leftPoints[i]}`;
            endPoint = `${data.bottomPoints[i+1]} 0 ${data.leftPoints[i+1]}`;

            console.log(lineID);
            console.log('startPoint', startPoint);
            console.log('endPoint', endPoint);

            // Add Line
            this.el.setAttribute(lineID, {
                start: startPoint,
                end: endPoint,
                color: '#FF5E7A'
            }); 
        }

        console.log('finish add lines');
    }
});

function read_from_csv(entityID, filePath) {
    d3.csv(filePath, (d) => {
        let el = document.getElementById(entityID);
        let graph_data = el.components.graph_csv_ahh.data;
        var dataLeft = graph_data.leftPoints.slice();
        var dataBottom = graph_data.bottomPoints.slice();
        
        values = Object.values(d);
        dataLeft.push(values[0]);
        dataBottom.push(values[1]);

        // Update graph line entity
        console.log('Updating attribute');
        el.setAttribute('graph_csv_ahh', {leftPoints: dataLeft, bottomPoints: dataBottom});
    });
}

AFRAME.registerComponent('graph_csv_ahh', {
    schema: {
        id: {default: 0},
        leftPoints: {default: []},
        bottomPoints: {default: []}
    },

    init: function () {
        if (this.data.id != 0) {
            var filePath = document.getElementById('data_csv_'+this.data.id.toString()).innerHTML;
            var entityID = 'graph_'+this.data.id.toString();
            read_from_csv(entityID, filePath);
        }
    },

    update: function (oldData) {
        console.log('Update hit');
        if (this.data.leftPoints.length != 0 && this.data.bottomPoints.length != 0) {
            
            var startPoint = '0 0 0';
            var endPoint = '0 0 0';

            // Normalise data points
            // bottom points through time function
            let bottomPoints = time_string_to_normalised_points(this.data.bottomPoints);
            let leftPoints = numbers_to_normalised_points(this.data.leftPoints);

            var numDataPoints = Math.max(leftPoints.normalisedPoints.length, bottomPoints.normalisedPoints.length);

            for (var i=0; i<(numDataPoints-1); i++) {

                //Create Line ID ( +2 due to axes )
                var lineID = 'line__'+(i+2).toString();

                // Create points
                startPoint = `${bottomPoints.normalisedPoints[i]} 0 ${leftPoints.normalisedPoints[i]}`;
                endPoint = `${bottomPoints.normalisedPoints[i+1]} 0 ${leftPoints.normalisedPoints[i+1]}`;

                //console.log(lineID);
                //console.log('startPoint', startPoint);
                //console.log('endPoint', endPoint);

                // Add Line
                this.el.setAttribute(lineID, {
                    start: startPoint,
                    end: endPoint,
                    color: '#FF5E7A'
                }); 
            }
        }
    }
});

AFRAME.registerComponent('timetest', {
    init: function () {
        //console.log('Time test start');
        var graphID = this.el.getAttribute('id');

        // Use function to get bottom axis time data
        var dataBottomID = 'data_bottom_' + graphID.toString();
        //var minIndex = 0;
        //var maxIndex = 0;
        //var normalisedPoints = [];

        let bottomPoints = time_string_to_normalised_points_from_id(dataBottomID);

        // get left axis data
        var dataLeftID = 'data_left_' + graphID.toString();
        let leftPoints = numbers_to_normalised_points_from_id(dataLeftID);

        var numDataPoints = Math.max(leftPoints.normalisedPoints.length, bottomPoints.normalisedPoints.length);

        var startPoint = '0 0 0';
        var endPoint = '0 0 0';

        // Loop through data points to create lines
        for (var i=0; i<(numDataPoints-1); i++) {
            // Create Line ID (+2 due to axes)
            var lineID = 'line__'+(i+2).toString();

            // Create points
            startPoint = `${bottomPoints.normalisedPoints[i]} 0 ${leftPoints.normalisedPoints[i]}`;
            endPoint = `${bottomPoints.normalisedPoints[i+1]} 0 ${leftPoints.normalisedPoints[i+1]}`;

            // Add Line
            this.el.setAttribute(lineID, {
                start: startPoint,
                end: endPoint,
                color: '#FF5E7A'
            });
        }

        //console.log('Time test finish');
    }
});

AFRAME.registerComponent('graph_background', {
    init: function() {
        this.el.setAttribute('position', '-0.01 -1 -0.05');
    }
});

AFRAME.registerComponent('image_test', {
    init: function() {
        // Set Dimensions
        const xSize = 500; 
        const ySize = 500;
        const margin = 40;
        const xMax = xSize - margin*2;
        const yMax = ySize - margin*2;

        // Create Random Points
        const numPoints = 100;
        const data = [];
        for (let i = 0; i < numPoints; i++) {
          data.push([Math.random() * xMax, Math.random() * yMax]);
        }

        // Append SVG Object to the Page
        const svg = d3.select("#myPlot")
          .append("svg")
          .append("g")
          .attr("transform","translate(" + margin + "," + margin + ")");

        // X Axis
        const x = d3.scaleLinear()
          .domain([0, 500])
          .range([0, xMax]);

        svg.append("g")
          .attr("transform", "translate(0," + yMax + ")")
          .call(d3.axisBottom(x));

        // Y Axis
        const y = d3.scaleLinear()
          .domain([0, 500])
          .range([ yMax, 0]);

        svg.append("g")
          .call(d3.axisLeft(y));

        // Dots
        svg.append('g')
          .selectAll("dot")
          .data(data).enter()
          .append("circle")
          .attr("cx", function (d) { return d[0] } )
          .attr("cy", function (d) { return d[1] } )
          .attr("r", 3)
          .style("fill", "Red");


        //html2canvas(document.body).then((canvas) => {
            //let a = document.createElement("a");
            //a.download = "ss.png";
            //a.href = canvas.toDataURL("image/png");
            //a.click();
        //})
    }
});

AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener("markerFound", (e) => {
            console.log('marker position found: ', this.el.getAttribute('position'));
            let markerEl = document.getElementById('marker4');
            var markerPos = markerEl.getAttribute('position');
            let graphEl = document.getElementById('myPlot');
            var movementAvailableY = screen.height - 500;
            //if (markerY > 0.8) {markerY = 0.8;}
            //else if (markerY < -0.8) {markerY = -0.8;}
            //var movementY = movementAvailableY * markerY / 0.8;
            

            var scaledY = (markerPos.y / markerPos.z) / 1.4;

            //Move the scaledY range from -0.3,0.3 to 0,0.6
            scaledY += 0.3;
            var movementY = movementAvailableY * scaledY / 0.6;

            graphEl.style.bottom = movementY;
        });
        this.el.sceneEl.addEventListener("markerLost", (e) => {
            console.log('marker position lost: ', this.el.getAttribute('position'));
        });
    }
});