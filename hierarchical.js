/* CMPSCI 373 Homework 5: Hierarchical Scene */

const width = 1000, height = 800;
const fov = 60;
const cameraz = 6;
const aspect = width/height;
const smoothShading = true;
let   animation_speed = 1.0;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(fov, aspect, 1, 1000);
camera.position.set(0, 1, cameraz);

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
renderer.setClearColor(0x202020);
window.onload = function(e) {
	document.getElementById('window').appendChild(renderer.domElement);
}
let orbit = new THREE.OrbitControls(camera, renderer.domElement);	// create mouse control

let light0 = new THREE.DirectionalLight(0xFFFFFF, 1.0);
light0.position.set(camera.position.x, camera.position.y, camera.position.z);	// this light is at the camera
scene.add(light0);

let light1 = new THREE.DirectionalLight(0x800D0D, 1.0); // red light
light1.position.set(-1, 1, 0);
scene.add(light1);

let light2 = new THREE.DirectionalLight(0x0D0D80, 1.0); // blue light
light2.position.set(1, 1, 0);
scene.add(light2);

let amblight = new THREE.AmbientLight(0x202020);	// ambient light
scene.add(amblight);

let material = new THREE.MeshPhongMaterial({color:0x808080, specular:0x101010, shininess: 45                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           , side:THREE.FrontSide});
let models = []; // array that stores all models
let numModelsLoaded = 0;
let numModelsExpected = 0;

// load OBJ models or create shapes
// ===YOUR CODE STARTS HERE===
var loader = new THREE.TextureLoader();
let merTex = loader.load('textures/mercurymap.jpg');
let merMat = new THREE.MeshLambertMaterial({ side: THREE.FrontSide, map: merTex });

let venusTex = loader.load('textures/venusmap.jpg');
let venusMat = new THREE.MeshLambertMaterial({ side: THREE.FrontSide, map: venusTex });

let earthTex = loader.load('textures/earthmap1k.jpg');
let earthMat = new THREE.MeshPhongMaterial( {color: 0xffffff, map: earthTex, side:THREE.DoubleSide} );

let moonTex = loader.load('textures/moonmap1k.jpg');
let moonMat = new THREE.MeshPhongMaterial( {color: 0xffffff, map: moonTex, side:THREE.DoubleSide} );

let marsTex = loader.load('textures/marsmap1k.jpg');
let marsMat = new THREE.MeshLambertMaterial({ side: THREE.FrontSide, map: marsTex });

let jupiterTex = loader.load('textures/jupitermap.jpg');
let jupiterMat = new THREE.MeshLambertMaterial({ side: THREE.FrontSide, map: jupiterTex });

let saturnTex = loader.load('textures/saturnmap.jpg');
let saturnMat = new THREE.MeshLambertMaterial({ side: THREE.FrontSide, map: saturnTex });

let uranusTex = loader.load('textures/uranusmap.jpg');
let uranusMat = new THREE.MeshLambertMaterial({ side: THREE.FrontSide, map: uranusTex });

let neptuneTex = loader.load('textures/neptunemap.jpg');
let neptuneMat = new THREE.MeshLambertMaterial({ side: THREE.FrontSide, map: neptuneTex });

let haloMat = new THREE.MeshPhongMaterial({color:0xdaa520, emissive:0xb08f26, specular:0x101010, shininess: 50, side:THREE.FrontSide});

let bkgdTex = loader.load('textures/backgroundcube.png', function(bkgdTex){scene.background = bkgdTex});
let bkgdMat = new THREE.MeshLambertMaterial({ map: bkgdTex });


//by the time I realized that I could make a function that made each planet I had already created everything, scaled it and placed it
//loadOBJ('objs/name.obj', material, 'name', year, day, scale);
loadOBJ('objs/Rachael_scan.obj', material, 'rachael',1, 1,1.5 );
loadOBJ('objs/haloWO.obj',haloMat, 'halo', 1,1,1.4);
loadOBJ('objs/satellite.obj', material, 'satellite',1, 1,0.07);
// loadOBJ('objs/sphere.obj', earthMat, 'earth',1,1, 0.2);
// loadOBJ('objs/sphere.obj', material, 'moon',1,0.38,0.074);
// loadOBJ('objs/sphere.obj', merMat, 'mercury', 0.24, 58.64, 0.1);
// loadOBJ('objs/sphere.obj', material, 'venus', 0.615, -243, 0.18);
// loadOBJ('objs/sphere.obj', material, 'mars', 1.88, 1.025, 0.15);
// loadOBJ('objs/sphere.obj', material, 'jupiter', 11.86, 0.413, 0.8);
// loadOBJ('objs/sphere.obj', material, 'saturn', 29.447, 0.444, 0.62);
// loadOBJ('objs/sphere.obj', material, 'uranus', 84.016, -0.718, 0.5);
// loadOBJ('objs/sphere.obj', material, 'neptune', 64.016,0.671, 0.48);
loadOBJ('objs/tinker.obj', saturnMat, 'sRing', 64, 64, 1.2); //saturns ring
// loadOBJ('objs/sphere.obj', material, 'europa', 1.5,1 , 0.06);//my favorite of jupiters moons
// loadOBJ('objs/sphere.obj', material, 'io', 1,1, 0.08);//second favorite juipter moon


let mercuryGeo = new THREE.SphereGeometry(0.1,32,32);
let mercury = new THREE.Mesh(mercuryGeo, merMat);
mercury['year'] = 0.24;
mercury['day'] = 58.64;

let earthGeo = new THREE.SphereGeometry(0.2, 32, 32);
let earth = new THREE.Mesh(earthGeo, earthMat);
earth['year'] = 1;
earth['day']=1;

let moonGeo = new THREE.SphereGeometry(0.074, 32, 32);
let moon = new THREE.Mesh(moonGeo, moonMat);

let venusGeo = new THREE.SphereGeometry(0.18,32,32);
let venus = new THREE.Mesh(venusGeo, venusMat);
venus['year'] = 0.615;
venus['day']= 243;

let marsGeo = new THREE.SphereGeometry(0.15,32,32);
let mars = new THREE.Mesh(marsGeo, marsMat);
mars['year'] = 1.88;
mars['day']=1.03;

let jupiterGeo = new THREE.SphereGeometry(0.8, 32,32);
let jupiter = new THREE.Mesh(jupiterGeo, jupiterMat);
jupiter['year']=11.86;
jupiter['day']=0.413;

let europaGeo = new THREE.SphereGeometry(0.06, 32,32);
let europa = new THREE.Mesh(europaGeo, moonMat);
europa['year'] = 0.3;
europa['day']= 80;

let ioGeo = new THREE.SphereGeometry(0.08, 32,32);
let io = new THREE.Mesh(ioGeo, moonMat);
europa['year'] = 1,2;
europa['day']= 100;

let saturnGeo = new THREE.SphereGeometry(0.62, 32,32);
let saturn = new THREE.Mesh(saturnGeo, saturnMat);
saturn['year']=29.447;
saturn['day']=0.45;

let uranusGeo = new THREE.SphereGeometry(0.5, 32, 32);
let uranus = new  THREE.Mesh(uranusGeo, uranusMat);
uranus['year']=84.016;
uranus['day']=-0.72;

let neptuneGeo = new THREE.SphereGeometry(0.48, 32,32);
let neptune = new THREE.Mesh(neptuneGeo, neptuneMat);
neptune['year']=164.79;
neptune['day'] = 0.67;



let head = new THREE.Group(); //group for the head
let abtHead = new THREE.Group(); //group rotating around head
let earthG = new THREE.Group();
let abtEarth = new THREE.Group(); //group rotating around earth
let abtMoon = new THREE.Group(); //group rotating around the moon
let abtSaturn = new THREE.Group(); //group rotating around saturn
let abtJupiter = new THREE.Group(); //around jupiter


// ---YOUR CODE ENDS HERE---

// 'label' is a unique name for the model for accessing it later
function loadOBJ(fileName, mat, label, year,  day, scale) { //I added year, scale, day to adjust aspects of the planets
	numModelsExpected++;
	loadOBJAsMesh(fileName, function(mesh) { // callback function for non-blocking load
		mesh.computeFaceNormals();
		if(smoothShading) mesh.computeVertexNormals();
		models[label] = new THREE.Mesh(mesh, mat);
		models[label]["year"] = year;
		models[label]["scale"] = scale;
		models[label]["day"] = day;
		numModelsLoaded++;
	}, function() {}, function() {});
}


let initialized = false;
function animate() {
	requestAnimationFrame( animate );
	if(numModelsLoaded == numModelsExpected) {	// all models have been loaded
		if(!initialized) {
			initialized = true;
			// construct the scene
// ===YOUR CODE STARTS HERE===
		models['rachael'].scale.set(1.5,1.5,1.5); // larger to try and fix planet sizes to be more relatively accurate 
		models['rachael'].rotation.z = (Math.PI); //rotate head to face forward
		models['rachael'].rotation.x = (-Math.PI/2); //rotate head to be right side up
		//models['rachael'].add(abtHead);
		head.add(models['rachael']);
		
		models['halo'].position.y = 0.35;//move halo to be around head
		models['halo'].scale.set(1.45,1.45,1.45);
		head.add(models['halo']);
		head.add(abtHead);

		mercury.position.x = 2;
		abtHead.add(mercury);

		venus.position.x = 3;
		abtHead.add(venus);
		
		earth.position.x = 4;
		abtHead.add(earth);
		earth.add(abtEarth);
		
		abtEarth.position.x =0.45;
		moon.add(abtMoon);
		models['satellite'].scale.set(0.07, 0.07, 0.07);
		models['satellite'].position.y = 0.15;
		abtMoon.add(models['satellite']);
		abtEarth.add(moon);
		abtEarth.add(abtMoon);

		mars.position.x = 5.25;
		abtHead.add(mars);

		jupiter.position.x = 7.25;
		abtHead.add(jupiter);
		jupiter.add(abtJupiter);
		
		europa.position.x = 1.2;
		io.position.x = 1;
		abtJupiter.add(europa);
		abtJupiter.add(io);

		saturn.position.x = 10;
		abtHead.add(saturn);
		saturn.add(abtSaturn);

		models['sRing'].scale.set(1.2,1.2,1.2);
		//models['sRing'].rotation.x = Math.PI/2;
		//models['sRing'].rotation.y = Math.PI/4;
		abtSaturn.add(models['sRing']);

		uranus.position.x = 12.35;
		abtHead.add(uranus);

		neptune.position.x = 14.25;
		abtHead.add(neptune);

		scene.add(head);	
// ---YOUR CODE ENDS HERE---

		}
		// animate the scene
// ===YOUR CODE STARTS HERE===
		
		models['halo'].rotateZ(0.011*animation_speed); //rotate halo around head slightly faster than other stuff
		head.rotation.y+=0.005*animation_speed;

		let yaxis = new THREE.Vector3(0,1,0).normalize();

		abtMoon.rotation.x += 0.05*animation_speed;
		abtMoon.rotation.y += 0.05*animation_speed;
		
		let ringQuat = new THREE.Quaternion();
		ringQuat.setFromAxisAngle(new THREE.Vector3(1,-1,0).normalize(), 64*animation_speed);
		models['sRing'].applyQuaternion(ringQuat);
		
		for(j of abtHead.children){
			let quatRevolve = new THREE.Quaternion();
			let revolve = ((Math.PI*2/j.year)/365)*animation_speed;
			quatRevolve.setFromAxisAngle(yaxis, revolve);
			j.position.applyQuaternion(quatRevolve);
			let rote = (2*Math.PI/(j.day*0.01))*animation_speed;
			j.rotateY(rote);
		}
// ---YOUR CODE ENDS HERE---

	}
	light0.position.set(camera.position.x, camera.position.y, camera.position.z); // light0 always follows camera position
	renderer.render(scene, camera);
}

animate();

function onKeyDown(event) {
	switch(event.key) {
		case 'w':
		case 'W':
			material.wireframe = !material.wireframe;
			break;
		case '=':
		case '+':
			animation_speed += 0.05;
			document.getElementById('msg').innerHTML = 'animation_speed = '+animation_speed.toFixed(2);
			break;
		case '-':
		case '_':
			if(animation_speed>0) animation_speed-=0.05;
			document.getElementById('msg').innerHTML = 'animation_speed = '+animation_speed.toFixed(2);
			break;
		case 'r':
		case 'R':
			orbit.reset();
			break;
	}
}

window.addEventListener('keydown', onKeyDown, false); // as key control if you need
