import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { motion } from 'framer-motion'
import { slideAnimation } from '../config/motion'

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div key="custom" className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>
          <div >
            
          </div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer