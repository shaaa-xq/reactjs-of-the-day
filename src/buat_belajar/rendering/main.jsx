import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import WithDependency from './UseEffect'
import WithoutDependency from './UseEffect'
import CleanupEffect from './UseEffect'
import ListRendering from './Lists'
// import '../../index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <WithDependency /> */}
    {/* <WithoutDependency /> */}
    {/* <CleanupEffect /> */}
    <ListRendering />
  </StrictMode>
);