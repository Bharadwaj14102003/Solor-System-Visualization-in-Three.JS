import * as THREE from 'three';

import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

//canvas
const canvas = document.getElementById('canvas');

//textures setup
const loadManager = new THREE.LoadingManager();

// Called when loading starts
loadManager.onStart = (url, itemsLoaded, itemsTotal) => {
    console.log('Starting to load:', url);
    console.log(`Items loaded: ${itemsLoaded} / ${itemsTotal}`);
};

// Called when an item is loaded (tracking progress)
loadManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    console.log(`Processing: ${url}`);
    console.log(`Items loaded: ${itemsLoaded} / ${itemsTotal}`);
};

// Called when all items are loaded successfully
loadManager.onLoad = () => {
    console.log('All assets have been successfully loaded!');
};

// Called if any error occurs
loadManager.onError = (url) => {
    console.log('Error loading:', url);
}

//textures
const textureLoader = new THREE.TextureLoader(loadManager)
let sun = textureLoader.load('./8k_sun.jpg')
let mer = textureLoader.load('./moon.jpg')
let ven = textureLoader.load('./8k_venus_surface.jpg')
let eart = textureLoader.load('./8k_earth_daymap.jpg')
let mar = textureLoader.load('./8k_mars.jpg')
let jup = textureLoader.load('./8k_jupiter.jpg')
let sat = textureLoader.load('./8k_saturn.jpg')
let ring = textureLoader.load('./8k_saturn_ring_alpha.png')
let ura = textureLoader.load('./2k_uranus.jpg')
let nep = textureLoader.load('./2k_neptune.jpg')

const scene = new THREE.Scene();
let galaxy = textureLoader.load('./8k_stars_milky_way.jpg')
galaxy.mapping = THREE.EquirectangularReflectionMapping
scene.background = galaxy
scene.environment =galaxy
//geometry
const geometry = new THREE.SphereGeometry(2.5); 
const material = new THREE.MeshBasicMaterial( { map: sun } ); 
const sphere = new THREE.Mesh( geometry, material );

const torusgeometry = new THREE.TorusGeometry( 10,0.1,2,200,6.283185); 
const torusmaterial = new THREE.MeshBasicMaterial( {color : 'white'}); 
const torus = new THREE.Mesh( torusgeometry, torusmaterial );

const mergeometry = new THREE.SphereGeometry(1.2); 
const mermaterial = new THREE.MeshBasicMaterial( {map :mer}  ); 
const mercury = new THREE.Mesh( mergeometry, mermaterial );
mercury.position.x = 10.0;

const vengeometry = new THREE.SphereGeometry(1.3); 
const venmaterial = new THREE.MeshBasicMaterial( {map :ven}  ); 
const venus = new THREE.Mesh( vengeometry, venmaterial );
venus.position.x = -15.0;

const eargeometry = new THREE.SphereGeometry(2.2); 
const earmaterial = new THREE.MeshBasicMaterial( {map :eart}  ); 
const earth = new THREE.Mesh( eargeometry, earmaterial );
earth.position.x = 20.0;

const margeometry = new THREE.SphereGeometry(1.2); 
const marmaterial = new THREE.MeshBasicMaterial( {map :mar}  ); 
const mars = new THREE.Mesh( margeometry, marmaterial );
mars.position.x = -25.0;

const jupgeometry = new THREE.SphereGeometry(2.5); 
const jupmaterial = new THREE.MeshBasicMaterial( {map :jup}  ); 
const jupiter = new THREE.Mesh( jupgeometry, jupmaterial );
jupiter.position.x =-30.0;

const satgeometry = new THREE.SphereGeometry(2.2); 
const satmaterial = new THREE.MeshBasicMaterial( {map :sat}  ); 
const saturn = new THREE.Mesh( satgeometry, satmaterial );
saturn.position.x = 35.0;

const sat1geometry = new THREE.TorusGeometry(1.55,0.95,500,600 ); 
const sat1material = new THREE.MeshBasicMaterial( {map : ring}); 
const saturn1 = new THREE.Mesh( sat1geometry, sat1material );
saturn1.position.x =35.0

const urageometry = new THREE.SphereGeometry(1.5); 
const uramaterial = new THREE.MeshBasicMaterial( {map :ura}  ); 
const uranus = new THREE.Mesh( urageometry, uramaterial );
uranus.position.x = -40.0;

const nepgeometry = new THREE.SphereGeometry(1.5); 
const nepmaterial = new THREE.MeshBasicMaterial( {map :nep}  ); 
const neptune = new THREE.Mesh( nepgeometry, nepmaterial );
neptune.position.x = 45.0;

const torus1geometry = new THREE.TorusGeometry( 15,0.1,2,200,6.283185); 
const torus1material = new THREE.MeshBasicMaterial( {color : 'white'}); 
const torus1 = new THREE.Mesh( torus1geometry, torus1material );

const torus2geometry = new THREE.TorusGeometry( 20,0.1,2,200,6.283185); 
const torus2material = new THREE.MeshBasicMaterial( {color : 'white'}); 
const torus2 = new THREE.Mesh( torus2geometry, torus2material );

const torus3geometry = new THREE.TorusGeometry( 25,0.1,2,200,6.283185); 
const torus3material = new THREE.MeshBasicMaterial( {color : 'white'}); 
const torus3 = new THREE.Mesh( torus3geometry, torus3material );

const torus4geometry = new THREE.TorusGeometry( 30,0.1,2,200,6.283185); 
const torus4material = new THREE.MeshBasicMaterial( {color : 'white'}); 
const torus4 = new THREE.Mesh( torus4geometry, torus4material );

const torus5geometry = new THREE.TorusGeometry( 35,0.1,2,200,6.283185); 
const torus5material = new THREE.MeshBasicMaterial( {color : 'white'}); 
const torus5 = new THREE.Mesh( torus5geometry, torus5material );

const torus6geometry = new THREE.TorusGeometry( 40,0.1,2,200,6.283185); 
const torus6material = new THREE.MeshBasicMaterial( {color : 'white'}); 
const torus6 = new THREE.Mesh( torus6geometry, torus6material );

const torus7geometry = new THREE.TorusGeometry( 45,0.1,2,200,6.283185); 
const torus7material = new THREE.MeshBasicMaterial( {color : 'white'}); 
const torus7 = new THREE.Mesh( torus7geometry, torus7material );

//lights
const aml = new THREE.AmbientLight('red',1);
scene.add(aml)

const pl = new THREE.PointLight('blue',2);
scene.add(pl)

//group
let group1=new THREE.Group()
group1.add(torus,mercury);
let group2=new THREE.Group()
group2.add(torus1,venus);
let group3=new THREE.Group()
group3.add(torus2,earth);
let group4=new THREE.Group()
group4.add(torus3,mars);
let group5=new THREE.Group()
group5.add(torus4,jupiter);
let group6=new THREE.Group()
group6.add(torus5,saturn,saturn1);
let group7=new THREE.Group()
group7.add(torus6,uranus)
let group8=new THREE.Group()
group8.add(torus7,neptune)

scene.add(group1);
scene.add(group2);
scene.add(group3);
scene.add(group4);
scene.add(group5);
scene.add(group6);
scene.add(group7);
scene.add(group8);
scene.add(sphere)

//light
// const ambientLight = new THREE.AmbientLight('white',1);
// scene.add(ambientLight)

const dl = new THREE.DirectionalLight('white',3);
dl.position.set(1,2,3)
scene.add(dl)
//camera
let widht = window.innerWidth;
let height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(50,widht/height,0.01,200);
camera.position.z = 95;
scene.add(camera);

//renderer setup
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(widht,height);
renderer.render(scene,camera);

//orbitControl Setup
const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true
controls.dampingFactor = 0.01

//clock Animation
const clock = new THREE.Clock()

//Animation
const animation =() => {
    const deltaTime = clock.getElapsedTime();
    sphere.rotation.y =deltaTime*0.5;
    earth.rotation.y =deltaTime*0.3;
    group1.rotation.z =deltaTime*0.3;
    group2.rotation.z =-deltaTime*0.1;
    group3.rotation.z =deltaTime*0.1;
    group4.rotation.z =-deltaTime*0.2;
    group5.rotation.z =deltaTime*0.2;
    group6.rotation.z =-deltaTime*0.1;
    group7.rotation.z =deltaTime*0.1; 
    group8.rotation.z =-deltaTime*0.2;
    
    //group.position.x =Math.sin(deltaTime)*1.5;
    
    controls.update()
    renderer.render(scene,camera)
}
renderer.setAnimationLoop(animation)

//FullScreen
window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
//ReSize
window.addEventListener('resize',() => {
    widht = window.innerWidth;
    height = window.innerHeight;
    renderer.setSize(widht,height);
    camera.aspect = widht/height
    camera.updateProjectionMatrix()
    renderer.render(scene,camera);
})