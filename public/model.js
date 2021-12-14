'use strict'

const scene = new THREE.Scene();


// PERSPEKTİF KAMERA
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(0, 2, 4);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xaaaaaa);


var controls = new THREE.OrbitControls(camera, renderer.domElement);


//IŞIKLAR

const lightA = new THREE.AmbientLight(0x404040);
scene.add(lightA);

const lightP = new THREE.PointLight(0xddff00, 1);
lightP.position.set(-1, 3, 5);
scene.add(lightP);

// IŞIKLARIN SONU 


let yRotation = 0;
let xPosition = 0;
let zPosition = 0;

const loader = new THREE.GLTFLoader();

loader.load('./dog/scene.gltf', process);
loader.load('./collar/scene.gltf', process);

let model = new THREE.Object3D();

let center, size;

let t = 0;
let x0 = xPosition;
let dx;

animate();

function animate(){
    requestAnimationFrame(animate);

    yRotation += 0.002;
    t += 0.001;
    dx = Math.sin(t)

    model.rotation.y = yRotation;

    model.position.x = xPosition;
    model.position.z = zPosition;

    renderer.render(scene, camera);
}

function process(gltf){
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const boxHelper = new THREE.Box3Helper(box, 0xffff00);

    center = box.getCenter( new THREE.Vector3());
    size = box.getSize( new THREE.Vector3());

    gltf.scene.position.set(-center.x, size.y / 2 - center.y, -center.z);

     model.add(gltf.scene);
    scene.add(model);
}