import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import WithDependency from './UseEffect'
import WithoutDependency from './UseEffect'
import CleanupEffect from './UseEffect'
import ListRendering from './Lists'
import RenderingAnimals from './Props'
import Props from './Props'
import InputRef from './Refs'
import ChangeBackground from './Refs2'
import App from './Events'
import ListOfSongs from './Lists'
import ChangeTheme from './Events'
// import '../../index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <WithDependency /> */}
    {/* <WithoutDependency /> */}
    {/* <CleanupEffect /> */}
    {/* <ListOfSongs /> */}
    <RenderingAnimals />
    {/* <Props /> */}
    {/* <InputRef /> */}
    {/* <App /> */}
    {/* <ChangeBackground /> */}
    {/* <ChangeTheme /> */}
  </StrictMode>
);