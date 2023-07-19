import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { motion } from 'framer-motion'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { EditorTabs } from '../config/constants'
import Tab from '../Components/Tab'
import CustomButton from '../Components/CustomButton'

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div key="custom" className='absolute top-0 left-0 z-10' {...slideAnimation('left')}>
          <div className='flex items-center min-h-screen'>
            <div className='editortabs-container tabs'>
              {EditorTabs.map((tab)=>(<Tab key={tab.name} tab={tab} handleClick={() => {}}/>))}
            </div>
          </div>
        </motion.div>
        <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
          <CustomButton type='filled' title='Go Back' handelclick={() => state.intro=true} CustomStyles='w-fit px-4 py-2.5 font-bold text-sm'/>
        </motion.div>
        <motion.div className='filtertabs-container'>

        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer