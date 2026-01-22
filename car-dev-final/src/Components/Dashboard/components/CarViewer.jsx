import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";

/* =========================
   MUSTANG MODEL
========================= */
const MustangModel = () => {
  const { scene } = useGLTF("/mustang.glb");

  return (
    <primitive
      object={scene}
      scale={0.01}                 // adjust if needed
      position={[0, -0.5, 0]}      // keeps car grounded
      rotation={[0, Math.PI / 4, 0]}
    />
  );
};

/* Preload model */
useGLTF.preload("/mustang.glb");

/* =========================
   CAR VIEWER
========================= */
const CarViewer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "500px",
      }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        {/* CAMERA */}
        <PerspectiveCamera
          makeDefault
          position={[5, 3, 5]}
          fov={50}
        />

        {/* CONTROLS */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minPolarAngle={0.4}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />

        {/* LIGHTING */}
        <ambientLight intensity={0.7} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.25}
          penumbra={1}
          intensity={1.8}
          castShadow
        />

        {/* MODEL */}
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.6}
            adjustCamera={1.2}
          >
            <MustangModel />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CarViewer;
