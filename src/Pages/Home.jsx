import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { slideAnimation } from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className='home' {...slideAnimation('left')}>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home