AFRAME.registerComponent('dashboard_ring_background', {
    init: function () {
        // Add Background Ring
        this.el.setAttribute('geometry', {
            primitive: 'ring',
            radiusInner: 0.2,
            radiusOuter: 0.3,
            color: '#FFFFFF'
        });

        this.el.setAttribute('position', '0.5 0.5 0');
    }
});

AFRAME.registerComponent('dashboard_ring_foreground', {
    init: function () {
        //console.log('start add lines');
        var graphID = this.el.getAttribute('id');
        var dataID = 'data_' + graphID.toString();
        var data = document.getElementById(dataID).innerHTML;
        var dataPoints = data.split(',');
        var colour = localStorage.getItem('DataLineColour');
        
        for (var i=0; i<(dataPoints.length-1); i++) {
            //console.log("start:",dataPoints[i]);
            //console.log("end:",dataPoints[i+1]);

            //Create Line ID ( +2 due to axes )
            var lineID = 'line__'+(i+2).toString();

            // Add Line
            this.el.setAttribute(lineID, {
                start: dataPoints[i],
                end: dataPoints[i+1],
                color: colour
            }); 
        }

        //console.log('finish add lines');
    }
});