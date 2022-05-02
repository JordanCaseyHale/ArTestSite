AFRAME.registerComponent('dashboard_ring_background', {
    init: function () {
        // Add Background Ring
        this.el.setAttribute('geometry', {
            primitive: 'ring',
            radiusInner: 0.15,
            radiusOuter: 0.275
        });

        this.el.setAttribute('position', '0.7 0.0 -0.55');

        this.el.setAttribute('rotation', '-90 0 0');

        this.el.setAttribute('material', {
            color: '#FFFFFF'
        });
    }
});

AFRAME.registerComponent('dashboard_ring_foreground', {
    init: function () {
        var graphID = this.el.getAttribute('id');
        var dataID = 'Data_Ring_' + graphID.toString();
        var data = document.getElementById(dataID).innerHTML;

        // Percentage multipled for circle amount
        var thetaData = data / 100 * 360;

        //var colour = localStorage.getItem('DataLineColour');
        
        this.el.setAttribute('geometry', {
            primitive: 'ring',
            radiusInner: 0.15,
            radiusOuter: 0.275,
            thetaStart: 90,
            thetaLength: thetaData
        });

        this.el.setAttribute('position', '0.7 0.01 -0.55');

        this.el.setAttribute('rotation', '-90 0 0');

        this.el.setAttribute('material', {
            color: '#FF0000'
        });
    }
});

AFRAME.registerComponent('dashboard_ring_text', {
    init: function () {
        var graphID = this.el.getAttribute('id');
        var dataID = 'Ring_' + graphID.toString();
        var label = document.getElementById(dataID).innerHTML;

        var colour = localStorage.getItem('TextColour');

        this.el.setAttribute('rotation', '-90 0 0');
        this.el.setAttribute('scale', '7.5 7.5 7.5');

        //Add ring title
        this.el.setAttribute('text', {
            value: label,
            align: 'center',
            height: 0.3,
            width: 0.3,
            color: colour
        });
    }
});

AFRAME.registerComponent('dashboard_ring_title', {
    init: function () {
        this.el.setAttribute('position', '0.7 0 -0.95');
    }
});

AFRAME.registerComponent('dashboard_ring_centre', {
    init: function () {
        this.el.setAttribute('position', '0.7 0 -0.55');
    }
})

AFRAME.registerComponent('dashboard_progress_background', {
    init: function () {
        //Add background bar
        this.el.setAttribute('geometry', {
            primitive: 'box'
        });

        this.el.setAttribute('scale', '1 0.01 0.15');

        this.el.setAttribute('material', {
            color: '#FFFFFF'
        });
    }
});

AFRAME.registerComponent('dashboard_progress_foreground', {
    init: function () {
        //Add foreground bar
        this.el.setAttribute('geometry', {
            primitive: 'box'
        });

        this.el.setAttribute('material', {
            color: '#FF0000'
        });
    }
});

AFRAME.registerComponent('dashboard_progress_label', {
    init: function () {
        var graphID = this.el.getAttribute('id');
        var dataID = 'Progress_Label_' + graphID.toString();
        var label = document.getElementById(dataID).innerHTML;

        var colour = localStorage.getItem('TextColour');

        this.el.setAttribute('rotation', '-90 0 0');
        this.el.setAttribute('scale', '7.5 7.5 7.5');

        //Add label bar
        this.el.setAttribute('text', {
            value: label,
            align: 'center',
            height: 0.3,
            width: 0.3,
            color: colour
        });
    }
});

AFRAME.registerComponent('bar_top_front', {
    init: function () {
        var graphID = this.el.getAttribute('id');
        var dataID = 'Data_Progress_Top_' + graphID.toString();
        var data = document.getElementById(dataID).innerHTML;

        // data, as percentage, into scale value
        var scaleValue = data / 100

        var scale = scaleValue.toString() + ' 0.01 0.15';

        // Base position on scale (-0.6 centre of bar)
        var positionX = -0.7 - ((1 - scaleValue) / 2)

        var position = positionX.toString() + ' 0.01 0.45'

        this.el.setAttribute('scale', scale);

        this.el.setAttribute('position', position);
    }
});

AFRAME.registerComponent('bar_top_back', {
    init: function () {
        this.el.setAttribute('position', '-0.7 0 0.45');
    }
});

AFRAME.registerComponent('bar_bottom_front', {
    init: function () {
        var graphID = this.el.getAttribute('id');
        var dataID = 'Data_Progress_Bottom_' + graphID.toString();
        var data = document.getElementById(dataID).innerHTML;

        // data, as percentage, into scale value
        var scaleValue = data / 100

        var scale = scaleValue.toString() + ' 0.01 0.15';

        // Base position on scale (-0.6 centre of bar)
        var positionX = -0.7 - ((1 - scaleValue) / 2)

        var position = positionX.toString() + ' 0.01 0.8'

        this.el.setAttribute('scale', scale);

        this.el.setAttribute('position', position);
    }
});

AFRAME.registerComponent('bar_bottom_back', {
    init: function () {
        this.el.setAttribute('position', '-0.7 0 0.8');
    }
});

AFRAME.registerComponent('bar_top_label', {
    init: function () {
        this.el.setAttribute('position', '-0.7 0 0.6');
    }
});

AFRAME.registerComponent('bar_bottom_label', {
    init: function () {
        this.el.setAttribute('position', '-0.7 0 0.95');
    }
});

AFRAME.registerComponent('dashboard_graph_top', {
    init: function () {
        var colour = localStorage.getItem('LineColour');

        // Create axes
        this.el.setAttribute('line', {
            start: '-1.1 0 -1',
            end: '-1.1 0 0',
            color: colour
        });
        this.el.setAttribute('line__1', {
            start: '-1.1 0 0',
            end: '-0.1 0 0',
            color: colour
        });
    }
});

AFRAME.registerComponent('dashboard_graph_bottom', {
    init: function () {
        var colour = localStorage.getItem('LineColour');

        // Create axes
        this.el.setAttribute('line', {
            start: '0.2 0 0',
            end: '0.2 0 1',
            color: colour
        });
        this.el.setAttribute('line__1', {
            start: '0.2 0 1',
            end: '1.2 0 1',
            color: colour
        });
    }
});

AFRAME.registerComponent('dashboard_graph_axis_bottom', {
    init: function () {
        var colour = localStorage.getItem('TextColour');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Bottom_' + graphID.toString();
        var label = document.getElementById(dataID).innerHTML;

        this.el.setAttribute('rotation', '-90 0 0');
        this.el.setAttribute('scale', '7.5 7.5 7.5');

        //Add label
        this.el.setAttribute('text', {
            value: label,
            align: 'center',
            height: 0.3,
            width: 0.3,
            color: colour
        });
    }
});

AFRAME.registerComponent('dashboard_graph_top_axis_bottom', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '-0.7 0 0.2');
    }
});

AFRAME.registerComponent('dashboard_graph_bottom_axis_bottom', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '0.7 0 1.15');
    }
});

AFRAME.registerComponent('dashboard_graph_axis_left', {
    init: function () {
        var colour = localStorage.getItem('TextColour');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Left_' + graphID.toString();
        var label = document.getElementById(dataID).innerHTML;

        this.el.setAttribute('rotation', '-90 90 0');
        this.el.setAttribute('scale', '7.5 7.5 7.5');

        //Add label
        this.el.setAttribute('text', {
            value: label,
            align: 'center',
            height: 0.3,
            width: 0.3,
            color: colour
        });
    }
});

AFRAME.registerComponent('dashboard_graph_top_axis_left', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '-1.4 0 -0.5');
    }
});

AFRAME.registerComponent('dashboard_graph_bottom_axis_left', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '0.025 0 0.5');
    }
});

AFRAME.registerComponent('dashboard_graph_axis_left_numbers', {
    init: function () {
        var colour = localStorage.getItem('TextColour');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Left_Numbers_' + graphID.toString();
        var labels = document.getElementById(dataID).innerHTML;
        var labels_split = labels.split(',');

        this.el.setAttribute('rotation', '-90 90 0');
        this.el.setAttribute('scale', '6 6 6');

        for (var i=0; i<(labels_split.length); i++) {

            //Create text ID
            var textID = 'text__'+(i).toString();

            //Add text
            this.el.setAttribute(textID, {
                value: labels_split[i],
                height: 0.25,
                width: 0.25,
                xOffset: i/((labels_split.length-1) * 6.1),
                color: colour
            });
        }
    }
});

AFRAME.registerComponent('dashboard_graph_top_axis_left_numbers', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '-1.2 0 -0.71');
    }
});

AFRAME.registerComponent('dashboard_graph_bottom_axis_left_numbers', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '0.12 0 0.26');
    }
});

AFRAME.registerComponent('dashboard_graph_axis_bottom_numbers', {
    init: function () {
        var colour = localStorage.getItem('TextColour');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Bottom_Numbers_' + graphID.toString();
        var labels = document.getElementById(dataID).innerHTML;
        var labels_split = labels.split(',');

        this.el.setAttribute('rotation', '-90 0 0');
        this.el.setAttribute('scale', '6 6 6');

        for (var i=0; i<(labels_split.length); i++) {

            //Create text ID
            var textID = 'text__'+(i).toString();

            //Add text
            this.el.setAttribute(textID, {
                value: labels_split[i],
                height: 0.25,
                width: 0.25,
                xOffset: i/((labels_split.length-1) * 6.1),
                color: colour
            });
        }
    }
});

AFRAME.registerComponent('dashboard_graph_axis_bottom_numbers_updates', {
    schema: {
        labels: {default: []},
        labelUpdateNumber: {default: 0},
        numberOfLabels: {default: 5}
    },

    init: function () {
        var colour = localStorage.getItem('TextColour');

        var graphID = this.el.getAttribute('id');
        var dataID = 'Axis_Bottom_Numbers_' + graphID.toString();
        var labels = document.getElementById(dataID).innerHTML;
        var labels_split = labels.split(',');

        this.el.setAttribute('rotation', '-90 0 0');
        this.el.setAttribute('scale', '6 6 6');

        this.data.labels = labels_split;


        for (var i=0; i<(this.data.numberOfLabels); i++) {

            //Create text ID
            var textID = 'text__'+(i).toString();

            //Add text
            this.el.setAttribute(textID, {
                value: labels_split[i],
                height: 0.25,
                width: 0.25,
                xOffset: i/((labels_split.length-1) * 6.1),
                color: colour
            });
        }

        setInterval(update_dashboard_axis, 10000, graphID);
    },

    update: function (oldData) {
        // If even then update offset
        if (this.data.labelUpdateNumber % 2 == 0) {
            this.data.numberOfLabels = 5;
            this.data.labelUpdateNumber = this.data.labelUpdateNumber + 1;
        }
        else {
            this.data.numberOfLabels = 4;
        }

        for (var i=this.data.labelUpdateNumber; i<(this.data.numberOfLabels + this.data.labelUpdateNumber); i++) {

            //Create text ID
            var textID = 'text__'+(i).toString();

            // if 4 labels add offset
            var offset = 0;
            if (this.data.numberOfLabels == 4) {
                offset = -0.12;
            }

            //Add text
            this.el.setAttribute(textID, {
                value: this.data.labels[i],
                height: 0.25,
                width: 0.25,
                xOffset: i/((this.data.numberOfLabels-1) * 6.1) + offset,
                color: colour
            });
        }

    }
});

function update_dashboard_axis(graphID) {
    var el = document.getelementById(graphID);
    el.setAttribute('dashboard_graph_axis_bottom_numbers_updates', {labelUpdateNumber: el.components.dashboard_graph_axis_bottom_numbers_updates.data.labelUpdateNumber + 1});
}

AFRAME.registerComponent('dashboard_graph_top_axis_bottom_numbers', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '-0.43 0 0.05');
    }
});

AFRAME.registerComponent('dashboard_graph_bottom_axis_bottom_numbers', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '0.9 0 1.05');
    }
});

AFRAME.registerComponent('dashboard_graph_csv_ahh', {
    schema: {
        id: {default: '0'},
        leftPoints: {default: []},
        bottomPoints: {default: []},
        maxDataPoints: {default: 0},
        maxDataPointsOffset: {default: 0},
        lineColour: {default: '#FF0000'},
        posXoffset: {default: 0},
        posYoffset: {default: 0},
        maxX: {default: '1'},
        maxY: {default: 1},
        minX: {default: '0'},
        minY: {default: 0},
        interval: {default: null}
    },

    init: function () {
        var id = this.data.id;

        if (id != '0') {
            var filePath = document.getElementById('data_csv_'+id).innerHTML;
            var entityID = 'Graph_' + id;
            dashboard_read_from_csv(entityID, filePath);

            // Check if external max and min points exist
            var maxMinValues = document.getElementById('data_max_min_x_y_'+id).innerHTML.split(',');
            if (maxMinValues.length == 4) {
                this.data.maxX = maxMinValues[0];
                this.data.minX = maxMinValues[1];
                this.data.maxY = parseInt(maxMinValues[2]);
                this.data.minY = parseInt(maxMinValues[3]);
            }

            this.data.interval = setInterval(update_dashboard_graph, 10000, entityID);
        }
        this.data.lineColour = localStorage.getItem('DataLineColour');
    },

    update: function (oldData) {
        console.log('Update hit');
        if (this.data.leftPoints.length != 0 && this.data.bottomPoints.length != 0) {
            
            var startPoint = '0 0 0';
            var endPoint = '0 0 0';

            var bottomNormPoints = [];
            var leftNormPoints = [];

            var totalNumDataPoints = Math.max(this.data.leftPoints.length, this.data.bottomPoints.length);
            var displayDataPoints = 0;

            if (this.data.maxDataPoints < totalNumDataPoints && this.data.maxDataPoints > 0) {
                displayDataPoints = this.data.maxDataPoints;
            }
            else {
                displayDataPoints = totalNumDataPoints;
            }

            var dataPointsOffset = this.data.maxDataPointsOffset;

            // If offset is larger than number of points - max points then use the remaining points
            if (totalNumDataPoints > this.data.maxDataPoints && this.data.maxDataPoints > 0) {
                if (dataPointsOffset > (totalNumDataPoints - this.data.maxDataPoints)) {
                    dataPointsOffset = totalNumDataPoints - this.data.maxDataPoints;
                    this.data.maxDataPointsOffset = dataPointsOffset;
                    //clearInterval(this.data.interval);
                }
            }
            else {
                dataPointsOffset = 0;
                this.data.maxDataPointsOffset = dataPointsOffset;
            }


            // Normalise data points
            // bottom points through time function
            if (this.data.maxX == '1' && this.data.minX == '0') {
                bottomNormPoints = time_string_to_normalised_points(this.data.bottomPoints.slice(dataPointsOffset, (displayDataPoints+dataPointsOffset)));
            }
            else {
                bottomNormPoints = time_string_to_normalised_points_given_max_min(this.data.bottomPoints.slice(dataPointsOffset, (dataPointsOffset+displayDataPoints)), this.data.maxX, this.data.minX);
            }
            if (this.data.maxY == 1 && this.data.minY == 0) {
                leftNormPoints = numbers_to_normalised_points(this.data.leftPoints.slice(dataPointsOffset, (dataPointsOffset+displayDataPoints)));
            }
            else {
                leftNormPoints = numbers_to_normalised_points_given_max_min(this.data.leftPoints.slice(dataPointsOffset, (dataPointsOffset+displayDataPoints)), this.data.maxY, this.data.minY);
            }
            

            for (var i=0; i<(displayDataPoints-1); i++) {

                //Create Line ID ( +2 due to axes )
                var lineID = 'line__'+(i+2).toString();

                // Offset for dashboard location
                var posXoff = this.data.posXoffset;
                var posYoff = this.data.posYoffset;

                // Create points half the size and more based on where on dashboard
                startPoint = `${(bottomNormPoints[i] / 2) + posXoff} 0 ${(leftNormPoints[i] / 2) + posYoff}`;
                endPoint = `${(bottomNormPoints[i+1] / 2) + posXoff} 0 ${(leftNormPoints[i+1] / 2) + posYoff}`;

                // Add Line
                this.el.setAttribute(lineID, {
                    start: startPoint,
                    end: endPoint,
                    color: this.data.lineColour
                }); 
            }
        }
    }
});

function dashboard_read_from_csv(entityID, filePath) {
    d3.csv(filePath, (d) => {
        let el = document.getElementById(entityID);
        let graph_data = el.components.dashboard_graph_csv_ahh.data;
        var dataLeft = graph_data.leftPoints.slice();
        var dataBottom = graph_data.bottomPoints.slice();
        
        values = Object.values(d);
        dataLeft.push(values[0]);
        dataBottom.push(values[1]);

        // Update graph line entity
        console.log('Updating attribute');
        el.setAttribute('dashboard_graph_csv_ahh', {leftPoints: dataLeft, bottomPoints: dataBottom});
    });
}

function update_dashboard_graph(entityID) {
    console.log('interval test');
    var el = document.getElementById(entityID);
    //el.components.dashboard_graph_csv_ahh.data.maxDataPointsOffset = el.components.dashboard_graph_csv_ahh.data.maxDataPointsOffset + 1;
    el.setAttribute('dashboard_graph_csv_ahh', {maxDataPointsOffset: (el.components.dashboard_graph_csv_ahh.data.maxDataPointsOffset + 1)});
}