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

AFRAME.registerComponent('graphaxes', {
    init: function () {
            //position axes
            this.el.setAttribute('position', '0 0 1.25');
            this.el.setAttribute('rotation', '-45 0 0');
            this.el.setAttribute('scale', '7.5 7.5 7.5');

            // Add axes label
            this.el.setAttribute('text', {
                value: 'Axis 1'
            });
            this.el.setAttribute('text', {
                value: 'Axis 2',
                height: 0.5,
                width: 0.5
            });
    
            // Add axes numbers
            this.el.setAttribute('numbers', {
                value: 'numbers'
            });
    }
})

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