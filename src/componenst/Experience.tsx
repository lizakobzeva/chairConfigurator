import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./public/models/scene.gltf");
  return (
    <PresentationControls
      speed={1.5}
      global
      polar={[-0.1, Math.PI / 4]}
      rotation={[Math.PI / 8, Math.PI / 4, 0]}
    >
      <Stage
        shadows={false}
        environment="city"
        intensity={0.3}
        castShadow={false}
      >
        <Suspense fallback={null}>
          <primitive object={gltf.scene} scale={1} position-y={0} />
        </Suspense>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.06}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#13191B"
          metalness={0.5}
          mirror={0}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
