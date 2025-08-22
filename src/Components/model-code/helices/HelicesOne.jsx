// helicesone.jsx
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Heliceone({ color = "#ff0000", ...props }) {
  const { nodes } = useGLTF('/public/model/helices/Helice1.gltf')
  
  return (
    <group {...props} dispose={null}>
      <group position={[-1.321, 0.394, 1.28]} rotation={[0, 0.769, 0]} scale={[0.909, 1, 0.909]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane042.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane042_1.geometry} />
      </group>

      <group position={[-1.321, 0.394, -1.51]} rotation={[0, 0.769, 0]} scale={[0.909, 1, 0.909]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane021.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane021_1.geometry} />
      </group>

      <group position={[1.28, 0.394, -1.51]} rotation={[0, -0.91, 0]} scale={[0.909, 1, 0.909]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane022.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane022_1.geometry} />
      </group>

      <group position={[1.28, 0.394, 1.28]} rotation={[0, -0.91, 0]} scale={[0.909, 1, 0.909]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane023.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane023_1.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/public/model/helices/Helice1.gltf')
