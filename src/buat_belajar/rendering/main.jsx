import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import WithDependency from './UseEffect'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WithDependency />
  </StrictMode>
);