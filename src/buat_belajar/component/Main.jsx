import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import Profile from "./ComponentJsx";
import ProfileCard from "./Props";
import Shop from "./Conditional";
import Counter from "./UseState";
import Composition from "./Composition";
import '../../index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Profile />  */}
    {/* <ProfileCard /> */}
    {/* <Shop /> */}
    <Counter />
    {/* <Composition /> */}
  </StrictMode>,
)
