import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {load} from "three/addons/libs/opentype.module.js";

/**
 * Base
 */
const loader = new GLTFLoader();
let compteurModel = 24;

// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

/**
 * MODELE 3D
 */
// Cube floor
const cubeFloor = new THREE.Mesh(
    new THREE.BoxGeometry(8, 1, 8),
    new THREE.MeshStandardMaterial({ roughness: 0.7, color: '#95C992' })
)
cubeFloor.castShadow = true;
cubeFloor.receiveShadow = true;
cubeFloor.position.y = -0.23;
scene.add(cubeFloor)

//plane with texture
const planeTexture = textureLoader.load('./textures/grass/stone_path2.png');
planeTexture.generateMipmaps = true;
planeTexture.minFilter = THREE.LinearMipmapLinearFilter;
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.MeshStandardMaterial({ map: planeTexture, transparent: true })
)
plane.castShadow = true;
plane.receiveShadow = true;
plane.rotation.x = - Math.PI * 0.5;
plane.position.y = 0.28;
scene.add(plane)

//grass model
let herbe;
loader.load('./model/low_poly_grass_clump.glb', function (gltf) {
        herbe = gltf.scene;
        herbe.scale.set(1,1,1);
        herbe.position.y = 0.25;
        herbe.position.x = -2;
        herbe.position.z = -2;
        herbe.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(herbe);
    },
    undefined, function (error) {
        console.error(error);
    });

//grass model at random position
const Herbes = new THREE.Group()
scene.add(Herbes)
let herbe2;
for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 3;
    const radius = Math.random() * 4;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    loader.load('./model/low_poly_grass_clump.glb', function (gltf) {
            herbe2 = gltf.scene;
            herbe2.scale.set(0.7,0.7,0.7);
            herbe2.position.set(x, 0.3, z)
            herbe2.traverse(function (node) {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            compteurModel--;
            loading();
            Herbes.add(herbe2)
        },
        undefined, function (error) {
            console.error(error);
        });

}

//tree model
let arbre;
loader.load('./model/pine_tree_low_poly.glb', function (gltf) {
        arbre = gltf.scene;
        arbre.scale.set(1,1,1);
        arbre.position.y = 0.25;
        arbre.position.x = 0.5;
        arbre.position.z = -5;
        arbre.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(arbre);
    },
    undefined, function (error) {
        console.error(error);
    });

//tree 2 model
let arbre2;
loader.load('./model/pine_tree_low_poly.glb', function (gltf) {
        arbre2 = gltf.scene;
        arbre2.scale.set(1.5,1.5,1.5);
        arbre2.position.y = 0.25;
        arbre2.position.x = 1.8;
        arbre2.position.z = -2.5;
        arbre2.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(arbre2);
    },
    undefined, function (error) {
        console.error(error);
    });

//tree 3 model
let arbre3;
loader.load('./model/low_poly_tree.glb', function (gltf) {
        arbre3 = gltf.scene;
        arbre3.scale.set(0.8,0.8,0.8);
        arbre3.position.y = 0.25;
        arbre3.position.x = -3.5;
        arbre3.position.z = 3.2;
        arbre3.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(arbre3);
    },
    undefined, function (error) {
        console.error(error);
    });

//tree 4 model
let arbre4;
loader.load('./model/low_poly_tree.glb', function (gltf) {
        arbre4 = gltf.scene;
        arbre4.scale.set(0.6,0.6,0.6);
        arbre4.position.y = 0.25;
        arbre4.position.x = 3.5;
        arbre4.position.z = 3.2;
        arbre4.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(arbre4);
    },
    undefined, function (error) {
        console.error(error);
    });

//tree 5 model
let arbre5;
loader.load('./model/pine_tree_low_poly.glb', function (gltf) {
        arbre5 = gltf.scene;
        arbre5.scale.set(0.5,0.5,0.5);
        arbre5.position.y = 3.2;
        arbre5.position.x = -2.5;
        arbre5.position.z = -1.5;
        //arbre5.rotation.y = 0.5;
        arbre5.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(arbre5);
    },
    undefined, function (error) {
        console.error(error);
    });

//tree 6 model
let arbre6;
loader.load('./model/low_poly_tree.glb', function (gltf) {
        arbre6 = gltf.scene;
        arbre6.scale.set(0.5,0.5,0.5);
        arbre6.position.y = 1.3;
        arbre6.position.x = -3.5;
        arbre6.position.z = -2;
        //arbre5.rotation.y = 0.5;
        arbre6.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(arbre6);
    },
    undefined, function (error) {
        console.error(error);
    });

//tree 7 model
let arbre7;
loader.load('./model/low_poly_tree.glb', function (gltf) {
        arbre7 = gltf.scene;
        arbre7.scale.set(0.5,0.5,0.5);
        arbre7.position.y = 0.3;
        arbre7.position.x = 3.5;
        arbre7.position.z = -2;
        //arbre5.rotation.y = 0.5;
        arbre7.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
        compteurModel--;
        loading();
        scene.add(arbre7);
    },
    undefined, function (error) {
        console.error(error);
    });

//tree 8 model
let arbre8;
loader.load('./model/pine_tree_low_poly.glb', function (gltf) {
        arbre8 = gltf.scene;
        arbre8.scale.set(0.8,0.8,0.8);
        arbre8.position.y = 0.3;
        arbre8.position.x = 5.5;
        arbre8.position.z = -0.5;
        //arbre5.rotation.y = 0.5;
        arbre8.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
        compteurModel--;
        loading();
        scene.add(arbre8);
    },
    undefined, function (error) {
        console.error(error);
    });

//tree 9 model
let arbre9;
loader.load('./model/pine_tree_low_poly.glb', function (gltf) {
        arbre9 = gltf.scene;
        arbre9.scale.set(0.5,0.5,0.5);
        arbre9.position.y = 0.3;
        arbre9.position.x = 5.3;
        arbre9.position.z = 1;
        //arbre5.rotation.y = 0.5;
        arbre9.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
        compteurModel--;
        loading();
        scene.add(arbre9);
    },
    undefined, function (error) {
        console.error(error);
    });

//rock model
let roche;
loader.load('./model/low_poly_rocks.glb', function (gltf) {
        roche = gltf.scene;
        roche.scale.set(1.8,1.8,1.8);
        roche.position.y = 0.9;
        roche.position.x = -2.5;
        roche.position.z = -3;
        roche.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(roche);
    },
    undefined, function (error) {
        console.error(error);
    });

//rock 2 model
let roche2;
loader.load('./model/low_poly_rocks.glb', function (gltf) {
        roche2 = gltf.scene;
        roche2.scale.set(2,2,2);
        roche2.position.y = 1;
        roche2.position.x = 2;
        roche2.position.z = -3.5;
        roche2.rotation.y = -2.7;
        roche2.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(roche2);
    },
    undefined, function (error) {
        console.error(error);
    });

//rock 3 model
let roche3;
loader.load('./model/low_poly_mossy_rocks.glb', function (gltf) {
        roche3 = gltf.scene;
        roche3.scale.set(3,3,3);
        roche3.position.y = 1.7;
        roche3.position.x = -3.9;
        roche3.position.z = 0;
        roche3.rotation.y = -2.2;
        roche3.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(roche3);
    },
    undefined, function (error) {
        console.error(error);
    });

//rock 4 model
let roche4;
loader.load('./model/low_poly_mossy_rocks.glb', function (gltf) {
        roche4 = gltf.scene;
        roche4.scale.set(1,1,1);
        roche4.position.y = 0.7;
        roche4.position.x = 3.4;
        roche4.position.z = -1;
        roche4.rotation.y = -1.2;
        roche4.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
        compteurModel--;
        loading();
        scene.add(roche4);
    },
    undefined, function (error) {
        console.error(error);
    });

//pilon model
let pilon;
loader.load('./model/stone_pillar.glb', function (gltf) {
        pilon = gltf.scene;
        pilon.scale.set(0.4,0.4,0.4);
        pilon.position.y = 0.25;
        pilon.position.x = 2.8;
        pilon.position.z = -3.4;
        pilon.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(pilon);
    },
    undefined, function (error) {
        console.error(error);
    });

//pilon 2 model
let pilon2;
loader.load('./model/stone_pillar.glb', function (gltf) {
        pilon2 = gltf.scene;
        pilon2.scale.set(0.4,0.4,0.4);
        pilon2.position.y = -2;
        pilon2.position.x = 1.8;
        pilon2.position.z = -3.4;
        pilon2.rotation.z = 0.4;
        pilon2.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(pilon2);
    },
    undefined, function (error) {
        console.error(error);
    });

//rocher model
let rocher;
loader.load('./model/lowpoly_rock.glb', function (gltf) {
        rocher = gltf.scene;
        rocher.scale.set(2.5,2.5,2.5);
        rocher.position.y = 0.25;
        rocher.position.x = -0.1;
        rocher.position.z = -0.4;
        rocher.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(rocher);
    },
    undefined, function (error) {
        console.error(error);
    });

//rocher 2 model
let rocher2;
loader.load('./model/lowpoly_rock.glb', function (gltf) {
        rocher2 = gltf.scene;
        rocher2.scale.set(2,2,2);
        rocher2.position.y = 0.25;
        rocher2.position.x = 2.7;
        rocher2.position.z = 3.2;
        rocher2.rotation.y = 0.5;
        rocher2.rotation.z = 0.5;
        rocher2.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
        compteurModel--;
        loading();
        scene.add(rocher2);
    },
    undefined, function (error) {
        console.error(error);
    });

//sword model
let epee;
loader.load('./model/low_poly_sword.glb', function (gltf) {
        epee = gltf.scene;
        epee.scale.set(0.07,0.07,0.07);
        epee.position.y = 1;
        epee.position.x = 0;
        epee.position.z = 0;
        epee.rotation.x = 3;
        epee.rotation.z = 0.3;
        epee.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(epee);
    },
    undefined, function (error) {
        console.error(error);
    });

//chest model
let coffre;
loader.load('./model/low-poly_chest.glb', function (gltf) {
        coffre = gltf.scene;
        coffre.scale.set(0.003,0.003,0.003);
        coffre.position.y = 0.7;
        coffre.position.x = -0.4;
        coffre.position.z = -3.0;
        coffre.rotation.y = 0.2;
        coffre.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        compteurModel--;
        loading();
        scene.add(coffre);
});

//chest model 2
let coffre2;
loader.load('./model/low-poly_chest.glb', function (gltf) {
        coffre2 = gltf.scene;
        coffre2.scale.set(0.003,0.003,0.003);
        coffre2.position.y = 2.8;
        coffre2.position.x = -5;
        coffre2.position.z = 1.0;
        coffre2.rotation.y = -0.2;
        coffre2.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
        compteurModel--;
        loading();
        scene.add(coffre2);
});

//butterfly model
let papillon;
let mixerPap;
loader.load('./model/animated_butterfly.glb', function (gltf) {
        papillon = gltf.scene;
        papillon.scale.set(0.1,0.1,0.1);
        papillon.position.y = 1.5;
        papillon.position.x = 0;
        papillon.position.z = 0;
        papillon.rotation.y = 0.2;
        papillon.rotation.z = 0.2;
        papillon.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
    //animation
    mixerPap = new THREE.AnimationMixer( papillon );
    const action = mixerPap.clipAction(gltf.animations[ 0]);
    action.setDuration(0.3);
    action.play();
    compteurModel--;
    loading();
    scene.add(papillon);
});

//butterfly 2 model
let papillon2;
let mixerPap2;
loader.load('./model/animated_butterfly.glb', function (gltf) {
        papillon2 = gltf.scene;
        papillon2.scale.set(0.1,0.1,0.1);
        papillon2.position.y = 1.5;
        papillon2.position.x = 0;
        papillon2.position.z = 0;
        papillon2.rotation.y = 0.9;
        papillon2.rotation.z = 0.7;
        papillon2.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
    //animation
    mixerPap2 = new THREE.AnimationMixer( papillon2 );
    const action2 = mixerPap2.clipAction(gltf.animations[ 0]);
    action2.setDuration(0.3);
    action2.play();
    compteurModel--;
    loading();
    scene.add(papillon2);
});

//fox model who walk
let renard;
let mixerRen;
loader.load('./model/fox_walk.glb', function (gltf) {
        renard = gltf.scene;
        renard.scale.set(0.08,0.08,0.08);
        renard.position.y = 0.25;
        renard.position.x = 0;
        renard.position.z = 2;
        renard.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        })
        mixerRen = new THREE.AnimationMixer( renard );
        const actionRen = mixerRen.clipAction(gltf.animations[ 0]);
        actionRen.setDuration(5);
        actionRen.play();
        compteurModel--;
        loading();
        scene.add(renard);
    });

/** ECRAN CHARGEMENT**/
function loading() {
    if (compteurModel === 0) {
        document.querySelector(".loading").style.display = "none";
    }
}

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#FAE1B1', 0.2)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#FFD788', 1.5)
moonLight.position.set(4, 5, - 2)
moonLight.castShadow = true;
moonLight.shadow.mapSize.width = 1024; // default
moonLight.shadow.mapSize.height = 1024; // default
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

//light of the sword
const pointLight = new THREE.PointLight('#FFD788', 1.5)
pointLight.position.set(-0.2, 1, 0)

pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024; // default
pointLight.shadow.mapSize.height = 1024; // default
pointLight.shadow.camera.near = 0.5; // default
pointLight.shadow.camera.far = 500; // default
scene.add(pointLight)

//rayon de lumière comme Jesus
const spotLight = new THREE.SpotLight( 0xffffff, 1 );
spotLight.position.set( 0, 1, 0 );
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 0.05;
spotLight.decay = 2;
spotLight.distance = 200;
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 10;
spotLight.shadow.camera.far = 200;
scene.add( spotLight );

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 3
camera.position.y = 3
camera.position.z = 7
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setClearColor('#44B8E1');
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clockPap = new THREE.Clock()
const clockRen = new THREE.Clock()
const clockPap2 = new THREE.Clock()

const tick = () => {
    const elapsedTime = clockRen.getElapsedTime();

    // Render
    renderer.render(scene, camera);

    // Update butterfly mixer
    if (mixerPap && papillon) {
        mixerPap.update(clockPap.getDelta());
        papillon.position.y = Math.sin(elapsedTime) * 0.5 + 1.5;
        papillon.position.x = Math.sin(elapsedTime) * 0.5;
        papillon.position.z = Math.cos(elapsedTime) * 0.5;
        papillon.rotation.y = Math.sin(elapsedTime) * 0.5;
    }

    // Update butterfly 2 mixer
    if (mixerPap2 && papillon2) {
        mixerPap2.update(clockPap2.getDelta());
        papillon2.position.y = Math.sin(elapsedTime) * -0.2 + 1.5;
        papillon2.position.x = Math.sin(elapsedTime) * -0.2;
        papillon2.position.z = Math.cos(elapsedTime) * -0.2;
        papillon2.rotation.y = Math.sin(elapsedTime) * -0.2;
    }

    // Update fox mixer
    if (mixerRen && renard) {
        mixerRen.update(clockRen.getDelta());
        const timeInSeconds = elapsedTime / 25;
        const radius = 2.0;
        const rotationSpeed = -7.0;
        const angle = timeInSeconds * rotationSpeed;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        renard.position.set(x, renard.position.y, z);
        const tangentVector = new THREE.Vector3(
            -Math.cos(angle + Math.PI / -1),
            0,
            -Math.sin(angle + Math.PI / 10)
        );
        renard.lookAt(renard.position.clone().add(tangentVector));
    }

    // Update controls
    controls.update();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

// Start the animation loop
tick();