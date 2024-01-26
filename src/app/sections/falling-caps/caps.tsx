// import * as Scrollytelling from "@bsmnt/scrollytelling";
// import { Suspense, useRef } from "react";
// import {  OrbitControls, useGLTF } from "@react-three/drei";

// import { Canvas, useFrame } from "@react-three/fiber";
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


// const Computers = () => {
//   const computer = useGLTF("/models/1.glb");
//   const innerRef = useRef<THREE.Group>(null);
//   const { timeline } = Scrollytelling.useScrollytelling();

  //   useFrame(() => {
  //     if (!innerRef.current || !timeline?.scrollTrigger) return;

  //     innerRef.current.rotation.y = Math.PI * 2 * timeline.scrollTrigger.progress;
  //   });

//   return (
//     <mesh>
//     <group dispose={null} scale={0.6} ref={innerRef}>
//       <group position={[0, 2, 0]} rotation={[0.45, -0.51, -0.03]}>
//         <hemisphereLight intensity={0.8} color="black"/>
//         <pointLight intensity={0.6} 
//         position={[3 , 0.8, 1]}
//         scale={1}
//         rotation={[0, 0, 0]}/>
//         <spotLight
//           position={[-20, 50, 10]}
//           angle={0.12}
//           penumbra={1}
//           intensity={1}
//           castShadow
//           shadow-mapSize={1024}
//         />
//         <primitive
//           object={computer.scene}
//           scale={1.15}
//           position={[0, 0, 0]}
//           rotation={[-0.2, 0.8, -0]}
//         />
//       </group>
//     </group>
//   </mesh>
//   );
// };

// const CapsModel = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

 

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       ref={canvasRef}
//       onCreated={() => {
//         gsap.registerPlugin(ScrollTrigger);
//         gsap.from(canvasRef.current, {
//           ease: "power2.inout",
//           scrollTrigger: {
//             trigger: canvasRef.current,
//             scrub: true,
//             start: "top+=950px center",
//             end: "bottom+=990px 15%",
  
//           },
//           opacity: 0,
//           y: "+=600",
//         });
//       }}
//     >
//       <Suspense >
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//           autoRotate= {true}
//         />
//         <Computers  />
//       </Suspense>


//     </Canvas>
//   );
// };

// export default CapsModel;


import * as Scrollytelling from "@bsmnt/scrollytelling";
import { Suspense, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";



const Computers = () => {
  const computer = useGLTF("/models/1.glb");
    const { timeline } = Scrollytelling.useScrollytelling();
    const innerRef = useRef<THREE.Group>(null);

    useFrame(() => {
      if (!innerRef.current || !timeline?.scrollTrigger) return;
      
        innerRef.current.rotation.y = Math.PI * 2 * timeline.scrollTrigger.progress;
      });

  return (
    <mesh ref={innerRef}>
      <hemisphereLight intensity={1.5} groundColor='black' />
      <spotLight
        position={[1, 1,  0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} 
      position={[2.4, 0.2, 0]}/>
      <primitive
        object={computer.scene}
        scale={  0.75}
       position={[0, 0, 0]}
       rotation={[0, 0.6, -0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {



  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;