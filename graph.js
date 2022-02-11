AFRAME.registerComponent('graph', {
    init: function () {
        console.log('build graph');
        this.el.setAttribute('color', '#ffffff');
    }
});

AFRAME.registerComponent('CreateLine', {
    init: function () {
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('make-into-circle', '');
        this.el.appendChild(entityEl);
    }
});

AFRAME.registerComponent('make-into-circle' {
    init: function () {
        this.el.setAttribute('geometry', {
            primitive: 'circle',
            radius: 2
        });
    }
});