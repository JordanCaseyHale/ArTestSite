AFRAME.registerComponent('dashboard_ring_background', {
    init: function () {
        // Add Background Ring
        this.el.setAttribute('geometry', {
            primitive: 'ring',
            radiusInner: 0.15,
            radiusOuter: 0.275
        });

        this.el.setAttribute('position', '0.6 0.6 -0.5');

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

        this.el.setAttribute('position', '0.6 0.61 -0.5');

        this.el.setAttribute('rotation', '-90 0 0');

        this.el.setAttribute('material', {
            color: '#FF0000'
        });
    }
});

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
        this.el.setAttribute('position', '0 0 0.5');
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
                xOffset: i/(labels_split.length * 5),
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
                xOffset: i/(labels_split.length * 5),
                color: colour
            });
        }
    }
});

AFRAME.registerComponent('dashboard_graph_top_axis_bottom_numbers', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '-0.43 0 0.05');
    }
});

AFRAME.registerComponent('dashboard_graph_bottom_axis_bottom_numbers', {
    init: function () {
        //position axis
        this.el.setAttribute('position', '0.88 0 1.05');
    }
});

AFRAME.registerComponent('dashboard_graph_csv_ahh', {
    schema: {
        id: {default: '0'},
        leftPoints: {default: []},
        bottomPoints: {default: []},
        lineColour: {default: '#FF0000'},
        posXoffset: {default: 0},
        posYoffset: {default: 0}
    },

    init: function () {
        if (!this.data.id.equals('0')) {
            var filePath = document.getElementById('data_csv_'+this.data.id).innerHTML;
            var entityID = 'Graph_'+this.data.id.toString();
            read_from_csv(entityID, filePath);
        }
        this.data.lineColour = localStorage.getItem('DataLineColour');
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

                // Offset for dashboard location
                var posXoff = this.data.posXoffset;
                var posYoff = this.data.posYoffset;

                // Create points half the size and more based on where on dashboard
                startPoint = `${(bottomPoints.normalisedPoints[i] / 2) + posXoff} 0 ${(leftPoints.normalisedPoints[i] / 2) + posYoff}`;
                endPoint = `${(bottomPoints.normalisedPoints[i+1] / 2) + posXoff} 0 ${(leftPoints.normalisedPoints[i+1] / 2) + posYoff}`;

                //console.log(lineID);
                //console.log('startPoint', startPoint);
                //console.log('endPoint', endPoint);

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