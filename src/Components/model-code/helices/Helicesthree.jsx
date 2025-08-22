import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Helicethree({ color = "#ff0000", ...props }) {
  const { nodes } = useGLTF('/model/helices/Helice3.gltf')

  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.317, 0.393, 1.275]}
        rotation={[-Math.PI, 0.085, -Math.PI]}
        scale={[0.89, 1, 0.89]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane058.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane058_1.geometry} />
      </group>

      <group
        position={[-1.317, 0.393, -1.506]}
        rotation={[-Math.PI, 0.085, -Math.PI]}
        scale={[0.89, 1, 0.89]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane027.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane027_1.geometry} />
      </group>

      <group
        position={[1.268, 0.393, -1.506]}
        rotation={[Math.PI, -0.957, Math.PI]}
        scale={[0.89, 1, 0.89]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane028.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane028_1.geometry} />
      </group>

      <group
        position={[1.268, 0.393, 1.275]}
        rotation={[-Math.PI, 0.605, -Math.PI]}
        scale={[0.89, 1, 0.89]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane029.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane029_1.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/model/helices/Helice3.gltf')
