import { Routes, Route } from "react-router-dom"

import LandingPage from "../pages/Customer/LandingPage"

function RouteIndex() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </>
  )
}

export default RouteIndex