import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Helicetwo({ color = "#ff0000", ...props }) {
  const { nodes } = useGLTF('/public/model/helices/Helice2.gltf')

  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.317, 0.385, 1.262]}
        rotation={[Math.PI, -1.296, Math.PI]}
        scale={[0.863, 1, 0.863]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane048.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane048_1.geometry} />
      </group>

      <group
        position={[-1.317, 0.385, -1.503]}
        rotation={[Math.PI, -1.296, Math.PI]}
        scale={[0.863, 1, 0.863]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane024.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane024_1.geometry} />
      </group>

      <group
        position={[1.285, 0.385, -1.503]}
        rotation={[0, -1.341, 0]}
        scale={[0.863, 1, 0.863]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane025.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane025_1.geometry} />
      </group>

      <group
        position={[1.285, 0.385, 1.275]}
        rotation={[0, -1.386, 0]}
        scale={[0.863, 1, 0.863]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane026.geometry}>
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Plane026_1.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('/public/model/helices/Helice2.gltf')
