import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { useGLTF } from '@react-three/drei';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes,materials } = useGLTF('/shirt_baked.glb');

  return (
    <div>Shirt</div>
  )
}

export default Shirt