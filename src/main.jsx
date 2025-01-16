import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './buat_belajar/component/ComponentJsx.jsx'
import App from './App.jsx'
import Box from './buat_belajar/component/Component.jsx'
import ProfileCard from './buat_belajar/component/Props.jsx'
import Shop from './buat_belajar/component/Conditional.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Profile /> */}
    <ProfileCard />
    {/* <Shop /> */}
  </StrictMode>,
)
