import * as dataHandler from './dataHandler.js';

AFRAME.registerComponent('graph', {
    init: function () {
        console.log('start graph axis lines');

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

        console.log('finish graph axis lines');
    }
});

AFRAME.registerComponent('graph_axis_bottom', {
    init: function () {
        console.log('start bottom label');

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
        console.log('finish bottom label');
    }
});

AFRAME.registerComponent('graph_axis_bottom_numbers', {
    init: function () {
        console.log('start bottom numbers');

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

        console.log('finish bottom numbers');
    }
});

AFRAME.registerComponent('graph_axis_left', {
    init: function () {
        console.log('start left label');

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

        console.log('finish left label');
    }
});

AFRAME.registerComponent('graph_axis_left_numbers', {
    init: function () {
        console.log('start left numbers');

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

        console.log('finish left numbers');
    }
});

AFRAME.registerComponent('graph_lines', {
    init: function () {
        console.log('start add lines');
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

        console.log('finish add lines');
    }
});

AFRAME.registerComponent('timetest', {
    init: function () {
        console.log('Time test start');

        // Use function to get data
        var graphID = this.el.getAttribute('id');
        var dataID = 'data_y_' + graphID.toString();
        var minIndex = 0;
        var maxIndex = 0;
        var normalisedPoints = [];

        minIndex, maxIndex, normalisedPoints = dataHandler.time_string_to_normalised_points(dataID);

        console.log(minIndex);
        console.log(maxIndex);
        console.log(normalisedPoints);
        console.log('Time test finish');
    }
});