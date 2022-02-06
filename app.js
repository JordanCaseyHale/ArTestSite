import * as THREE from './libs/build/three.module.js';
import { OrbitControls } from './libs/examples/jsm/controls/OrbitControls.js';
import { Stats } from './libs/stats.module.js';
import { ARButton } from './libs/examples/jsm/webxr/ARButton.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
        
        this.clock = new THREE.Clock();
        
		this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 );
		
		this.scene = new THREE.Scene();
        
		this.scene.add( new THREE.HemisphereLight( 0x606060, 0x404040 ) );

        const light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 ).normalize();
		this.scene.add( light );
			
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        
		container.appendChild( this.renderer.domElement );
        
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.target.set(0, 3.5, 0);
        this.controls.update();
        
        this.stats = new Stats();
        document.body.appendChild( this.stats.dom );
        
        this.initScene();
        this.setupXR();
        
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    initScene(){
    	const material = new THREE.LineBasicMaterial({
			color: 0x0000ff
		});

		const points = [];
		points.push( new THREE.Vector3( - 0.3, 0, 0 ) );
		points.push( new THREE.Vector3( 0, 0.3, 0 ) );
		points.push( new THREE.Vector3( 0.3, 0, 0 ) );

		const geometry = new THREE.BufferGeometry().setFromPoints( points );

		const line = new THREE.Line( geometry, material );
		this.scene.add( line );

        this.geometry = new THREE.BoxBufferGeometry( 0.06, 0.06, 0.06 );
        this.meshes = [];
    }
    
    setupXR(){
        this.renderer.xr.enabled = true;
	    
	const self = this;
	let controller;
	    
	// When screen is clicked?
	function onSelect() {
		//const material = new THREE.MeshPhongMaterial( { color: 0xFFFFFF * Math.random() });
		const material = new THREE.MeshPhongMaterial( { color: 0xFFFFFF });
		const mesh = new THREE.Mesh( self.geometry, material );
		mesh.position.set( 0,0,-1).applyMatrix4( controller.matrixWorld );
		mesh.quaternion.setFromRotationMatrix( controller.matrixWorld );
		self.scene.add(mesh);
		self.meshes.push(mesh);

		const geometry = new THREE.PlaneGeometry(0.2,0.2);
		const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x800080, side: THREE.DoubleSide});
		const plane = new THREE.Mesh ( geometry, planeMaterial );
		plane.position.set(0,0,-0.5).applyMatrix4( controller.matrixWorld );
		self.scene.add(plane);
	}
	    
	document.body.appendChild(
		ARButton.createButton( this.renderer )
	);
	    
	controller = this.renderer.xr.getController(0);
	controller.addEventListener( 'select', onSelect );
	this.scene.add(controller);
	    
        this.renderer.setAnimationLoop( this.render.bind(this) );
    }
    
    resize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );  
    }
    
	render( ) {   
        this.stats.update();
        this.meshes.forEach( (mesh) => { mesh.rotateY( 0.01 ); });
        this.renderer.render( this.scene, this.camera );
    }
}

export { App };
