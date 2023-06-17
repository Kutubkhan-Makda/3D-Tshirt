import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <div>Home</div>
  )
}

export default Home