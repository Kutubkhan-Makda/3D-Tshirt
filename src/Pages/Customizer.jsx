import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { motion } from 'framer-motion'
import { slideAnimation } from '../config/motion'
import { EditorTabs } from '../config/constants'

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div key="custom" className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>
          <div className='flex items-center min-h-screen'>
            <div className='editortabs-container tabs'>
              {EditorTabs}
            </div>
          </div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer