// Get a reference to the container element
var container = document.body;

// Create a new scene
var scene = new THREE.Scene();

// Create a new camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a new renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Create a new sphere
var geometry = new THREE.SphereGeometry(5, 32, 32);
var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Set the initial position of the camera and sphere
camera.position.z = 15;
sphere.position.z = -10;

// Add lighting to the scene
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 0);
scene.add(light);

// Create a function to update the position of the sphere
function updateSphere() {
	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
}

// Render the scene
function render() {
	requestAnimationFrame(render);

	updateSphere();

	renderer.render(scene, camera);
}
render();
