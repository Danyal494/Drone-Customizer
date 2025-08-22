
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CamTwo(props) {
  const { nodes, materials } = useGLTF('/model/cam/Cam2.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.037, -0.311, 0.9]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063.geometry}
          material={materials.Camara}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063_1.geometry}
          material={materials.Cristal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063_2.geometry}
          material={materials.Cables}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063_3.geometry}
          material={materials.Carcasa}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/cam/Cam2.gltf')
