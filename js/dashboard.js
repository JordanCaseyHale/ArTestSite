AFRAME.registerComponent('dashboard_ring_background', {
    init: function () {
        // Add Background Ring
        this.el.setAttribute('geometry', {
            primitive: 'ring',
            radiusInner: 0.15,
            radiusOuter: 0.275
        });

        this.el.setAttribute('position', '0.6 0.6 0');

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

        this.el.setAttribute('position', '0.6 0.61 0');

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

AFRAME.registerComponent('bar_top_front', {
    init: function () {
        var graphID = this.el.getAttribute('id');
        var dataID = 'Data_Progress_Top_' + graphID.toString();
        var data = document.getElementById(dataID).innerHTML;

        // data, as percentage, into scale value
        var scaleValue = data / 100

        var scale = scaleValue.toString() + ' 0.01 0.15';

        // Base position on scale (-0.6 centre of bar)
        var positionX = -0.6 - ((1 - scaleValue) / 2)

        var position = positionX.toString() + ' 0.01 0.6'

        this.el.setAttribute('scale', scale);

        this.el.setAttribute('position', position);
    }
});

AFRAME.registerComponent('bar_top_back', {
    init: function () {
        this.el.setAttribute('position', '-0.6 0 0.6');
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
        var positionX = -0.6 - ((1 - scaleValue) / 2)

        var position = positionX.toString() + ' 0.01 0.8'

        this.el.setAttribute('scale', scale);

        this.el.setAttribute('position', position);
    }
});

AFRAME.registerComponent('bar_bottom_back', {
    init: function () {
        this.el.setAttribute('position', '-0.6 0 0.8');
    }
});