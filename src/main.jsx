import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './buat_belajar/component/ComponentJsx.jsx'
import App from './App.jsx'
import Box from './buat_belajar/component/Component.jsx'
import ProfileCard from './buat_belajar/component/Props.jsx'
import Shop from './buat_belajar/component/Conditional.jsx'
import Counter from './buat_belajar/component/UseState.jsx'
import Composition from './buat_belajar/component/Composition.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Profile /> */}
    {/* <ProfileCard /> */}
    {/* <Shop /> */}
    {/* <Counter /> */}
    <Composition />
  </StrictMode>,
)
