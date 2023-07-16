import { AnimatePresence } from 'framer-motion'
import React from 'react'
import state from '../store'

const Customizer = () => {
  const snap = useSnapeshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        
      )}
    </AnimatePresence>
  )
}

export default Customizer