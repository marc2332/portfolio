import * as THREE from 'three';
import { styled } from '@stitches/react';
import React from 'react';

const BackgroundContainer = styled('div', {
    position: 'fixed',
    background: 'transparent',
    left: 0,
    top: 0,
    zIndex: -999
});


export default function Background() {

    const ref = React.useRef(null);

    function startBackground() {


        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 5);
        camera.position.z = 3;
        camera.position.y = 1;
        camera.position.x = 1;

        camera.rotation.x = -0.5;

        const scene = new THREE.Scene();
     
        const light =  new THREE.PointLight( 0xffffff, 10, 5.2 );
        light.position.y = 5;
        scene.add(light);

        const startX = -2;
        const startZ = -2;

        window.addEventListener('mousemove', (e) => {
           
            light.position.x = startX + (45 * 0.13) / 100 * ((e.clientX / window.innerWidth) * 100)
            light.position.z = startZ + (23 * 0.2 / 100 * ((e.clientY / window.innerHeight) * 100))

        })


        let marginZ = 0;
        
        for (let z = 0; z < 23; z++, marginZ += 0.1) {
            let marginX = 0;
            for (let x = 0; x < 45; x++, marginX += 0.03) {
                const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
                const material = new THREE.MeshPhongMaterial({
                    color: 0x2a2a2a,
                });

                const mesh = new THREE.Mesh(geometry, material);

                mesh.position.x = startX + (x * 0.1) + marginX
                mesh.position.z = startZ + (z * 0.1) + marginZ;

                scene.add(mesh);
            }
        }

        function renderCycle() {
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
        })

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setAnimationLoop(renderCycle);
        ref.current?.firstChild.appendChild(renderer.domElement);

    }

    


    React.useEffect(() => {

        startBackground();

        const customWindow: any = window;

        // Enable the parallax effect in the threejs container
        new customWindow.Parallax(ref.current);

    }, [])

    return (
        <BackgroundContainer ref={ref} data-relative-input="true">
            <div data-depth="0.2" />
        </BackgroundContainer>
    )
}






