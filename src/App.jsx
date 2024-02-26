import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Grid from './Grid.jsx'

import Image1 from '/image1.jpg'
import Image2 from '/image2.jpg'
import Image3 from '/image3.jpg'

function App() {
  const [items, setItems] = useState([
    {
      image: Image1,
      caption: 'testItems1',
      url: 'url1',
    },
    {
      image: Image2,
      caption: 'zanyDoing2',
      url: 'url2',
    },
    {
      image: Image3,
      caption: 'coolMaths3',
      url: 'url3',
    },
    {
      image: Image2,
      caption: 'pogLolzz4',
      url: 'url4',
    },
  ])

  return <div className='app'>
    <div className='header'>Header</div>
    <Grid items={[items, items, items, items].flat()} columns={3}/>
  </div>
}

export default App
