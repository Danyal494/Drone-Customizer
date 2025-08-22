
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cameone(props) {
  const { nodes, materials } = useGLTF('/model/cam/Cam1.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.028, -0.294, 0.809]} rotation={[-Math.PI / 2, 0, 0]} scale={1.221}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle030.geometry}
          material={materials.Camara}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle030_1.geometry}
          material={materials.Cristal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle030_2.geometry}
          material={materials.Cables}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle030_3.geometry}
          material={materials.Carcasa}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/cam/Cam1.gltf')