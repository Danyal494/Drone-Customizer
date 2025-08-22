import React from "react";
import { useGLTF } from "@react-three/drei";

export function Motorone({ color = "#ff0000", ...props }) {
  const { nodes } = useGLTF("/public/model/motor/Motor1.gltf");

  return (
    <group {...props} dispose={null}>
    
      <mesh castShadow receiveShadow geometry={nodes.Circle039.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>

      
      <mesh castShadow receiveShadow geometry={nodes.Circle039_1.geometry} />
    </group>
  );
}

useGLTF.preload("/public/model/motor/Motor1.gltf");
