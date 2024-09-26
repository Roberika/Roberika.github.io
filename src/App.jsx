import { useState } from 'react'
import Grid from './Grid.jsx'

import items from './data.js'

function App() {
  return <div className='app'>
    <div className='header'>Header</div>
    <Grid items={[items, items, items, items].flat()} columns={3}/>
  </div>
}

export default App
