import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Base(props) {
  const { nodes, materials } = useGLTF('/model/base/Base.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[0.273, 0.509, 0.086]}
      />
      <group position={[-0.794, 0.171, -0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials.Fibra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials.Plastico}
        />
      </group>
      <group position={[0.72, 0.171, -0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials.Fibra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.Plastico}
        />
      </group>
      <group position={[0.801, 0.299, -0.115]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle012.geometry}
          material={materials.Plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle012_1.geometry}
          material={materials.Fibra}
        />
      </group>
      <group position={[-0.873, 0.299, -0.115]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle026.geometry}
          material={materials.Plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle026_1.geometry}
          material={materials.Fibra}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eje1.geometry}
        material={materials.BrazoCamara}
        position={[0.201, 0.514, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eje2.geometry}
        material={materials.BrazoCamara}
        position={[-0.248, 0.514, 0.14]}
      />
      <group position={[1.27, -0.203, -1.355]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle020.geometry}
          material={materials.PlasticoClaro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle020_1.geometry}
          material={materials.Fibra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle020_2.geometry}
          material={materials.Plastico}
        />
      </group>
      <group position={[1.27, -0.203, 1.126]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle022.geometry}
          material={materials.PlasticoClaro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle022_1.geometry}
          material={materials.Fibra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle022_2.geometry}
          material={materials.Carcasa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle022_3.geometry}
          material={materials.Plastico}
        />
      </group>
      <group position={[-1.316, -0.203, -1.355]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle024.geometry}
          material={materials.PlasticoClaro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle024_1.geometry}
          material={materials.Plastico}
        />
      </group>
      <group position={[-1.316, -0.203, 1.126]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025.geometry}
          material={materials.PlasticoClaro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_1.geometry}
          material={materials.Fibra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle025_2.geometry}
          material={materials.Plastico}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CajaCir001.geometry}
        material={materials.Fibra}
        position={[-0.03, 0.304, -0.584]}
      />
      <group position={[-0.03, 0.555, -0.097]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Circuitos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Carcasa}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Rejillas}
        position={[-0.029, 0.508, 0.57]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.Cables}
        position={[0.128, 0.662, -0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.Cables}
        position={[-0.168, 0.662, -0.097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HoneyComb001.geometry}
        material={materials.Rejillas}
        position={[-0.031, 0.714, 0.186]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carcasa.geometry}
        material={materials.Carcasa}
        position={[-0.028, 0.495, 0.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.Plastico}
        position={[-0.028, 0.095, 0.898]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.BrazoCamara}
        position={[-0.028, 0.01, 0.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials.BrazoCamara}
        position={[-0.028, -0.161, 0.87]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials.BrazoCamara}
        position={[-0.028, -0.294, 0.766]}
      />
      <group position={[-0.403, -0.074, 1.091]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials.Plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials.Fibra}
        />
      </group>
      <group position={[0.333, -0.07, 1.089]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials.Plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials.Fibra}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Plastico}
        position={[-0.039, 0.039, 1.061]}
      />
    </group>
  )
}

useGLTF.preload('/model/base/Base.gltf')
