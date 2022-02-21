AFRAME.registerComponent('graph', {
    init: function () {
        console.log('start graph axis lines');
        this.el.setAttribute('color', '#ffffff');

        // Create axes
        this.el.setAttribute('line', {
            start: '-1 0 -1',
            end: '-1 0 1',
            color: '#800080'
        });
        this.el.setAttribute('line__1', {
            start: '-1 0 1',
            end: '1 0 1',
            color: '#FFFFFF'
        });

        console.log('finish graph axis lines');
    }
});

AFRAME.registerComponent('graph_axis_bottom', {
    init: function () {
        console.log('start bottom label');
        var label = document.getElementById("Axis_Bottom").innerHTML;

        //position axis
        this.el.setAttribute('position', '1.5 0 1.25');
        this.el.setAttribute('rotation', '-45 0 0');
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
        var labels = document.getElementById("Axis_Bottom_Numbers").innerHTML;
        var labels_split = labels.split(',');

        //Centre numbers
        this.el.setAttribute('position', '-0.1 0 1.10');
        this.el.setAttribute('rotation', '-45 0 0');
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
        var label = document.getElementById("Axis_Left").innerHTML;

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

        var labels = document.getElementById("Axis_Left_Numbers").innerHTML;
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

AFRAME.registerComponent('graph_lines_id', {
    init: function () {
        console.log('start add lines id');
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

        console.log('finish add lines id');
    }
});

AFRAME.registerComponent('graph_lines', {
    init: function () {
        console.log('start add lines');
        var data = document.getElementById("data").innerHTML;
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


AFRAME.registerComponent('createline', {
    init: function () {
        console.log('create line');
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('make-into-circle', '');
        this.el.appendChild(entityEl);
    }
});

AFRAME.registerComponent('make-into-circle', {
    init: function () {
        console.log('make into circle');
        this.el.setAttribute('geometry', {
            primitive: 'circle',
            radius: 2,
            position: '0 1 0',
            color: '#800080'
        });
    }
});

AFRAME.registerComponent('addline', {
    init: function () {
        console.log('lineee');
        this.lineID = 0;
    }
});

//Creates lines from a given list of points
function createLines(points, entity) {
    var numberOfPoints = points.length;

    var tempEntityEl;
    for (var i=0; i<numberOfPoints; i++) {
        tempEntityEl = document.createElement('a-entity');
        tempEntityEl.setAttribute('make-into-line');
        entity.appendChild(entityEl);
    }

};