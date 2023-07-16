import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { motion } from 'framer-motion'

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <>
        <motion.div>
          
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer