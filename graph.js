AFRAME.registerComponent('graph', {
    init: function () {
        console.log('build graph');
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
    }
});

AFRAME.registerComponent('graph_axis_bottom', {
    init: function () {
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
    }
});

AFRAME.registerComponent('graph_axis_bottom_numbers', {
    init: function () {
        var labels = document.getElementById("Axis_Bottom_Numbers").innerHTML;
        var labels_split = labels.split(',');

        //Centre numbers
        this.el.setAttribute('position', '0 0 1.10');
        this.el.setAttribute('rotation', '-45 0 0');
        this.el.setAttribute('scale', '6 6 6');

        for (var i=0; i<(labels_split.length); i++) {
            console.log(labels_split[i]);

            //Create text ID
            var textID = 'text__'+(i).toString();

            //Add text
            this.el.setAttribute(textID, {
                value: labels_split[i],
                height: 0.3,
                width: 0.3,
                xOffset: i/(labels_split.length * 3.5)
            });
        }
    }
});

AFRAME.registerComponent('graph_axis_left', {
    init: function () {
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
    }
});

AFRAME.registerComponent('addlines', {
    init: function () {
        console.log('add lines');
        var data = document.getElementById("data").innerHTML;
        var dataPoints = data.split(',');
        
        for (var i=0; i<(dataPoints.length-1); i++) {
            console.log("start:",dataPoints[i]);
            console.log("end:",dataPoints[i+1]);

            //Create Line ID ( +2 due to axes )
            var lineID = 'line__'+(i+2).toString();
            console.log(lineID);

            // Add Line
            this.el.setAttribute(lineID, {
                start: dataPoints[i],
                end: dataPoints[i+1],
                color: '#FF5E7A'
            }); 
        }  
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