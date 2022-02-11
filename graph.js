AFRAME.registerComponent('graph', {
    init: function () {
        console.log('build graph');
        //this.el.visible = true;
        console.log(this.el);
        this.el.setAttribute('color', '#ffffff');
        console.log(this.el);
    }
});