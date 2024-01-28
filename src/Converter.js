import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { stlSerializer } from 'usco-stl-serializer';


const loader = new OBJLoader();
loader.load(
    // resource URL
    'path/to/your.obj',
    // called when resource is loaded
    function (object) {
        scene.add(object);
        const geometry = new THREE.Geometry().fromBufferGeometry(object.children[0].geometry);
        // Now you have a three.js geometry that you can manipulate or convert
    },
    // called when loading is in progresses
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // called when loading has errors
    function (error) {
        console.log('An error happened');
    }
);
const stlString = stlSerializer.serialize(geometry);
const blob = new Blob([stlString], { type: 'model/stl' });
const url = URL.createObjectURL(blob);

