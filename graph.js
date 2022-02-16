AFRAME.registerComponent('graph', {
    init: function () {
        console.log('build graph');
        this.el.setAttribute('color', '#ffffff');
    }
});

AFRAME.registerComponent('addlines', {
    init: function () {
        console.log('add lines');
        var data = document.getElementById("data").innerHTML;
        var dataPoints = data.split(',');
        
        for (var i=0; i<(dataPoints.length); i++) {
            console.log("start:",dataPoints[i]);
            console.log("end:",dataPoints[i+1]);
            //Create Line ID
            var lineID = 'line';
            if (i>0) {
                lineID = 'line__'+(i+1).toString();
            }
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