import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { useGLTF, useTexture } from '@react-three/drei';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes,materials } = useGLTF('/shirt_baked.glb');
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      
    </group>
  )
}

export default Shirt