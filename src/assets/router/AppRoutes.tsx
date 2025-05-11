import { Route, Routes } from "react-router-dom"
import { PATHS } from "./PATHS"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path={PATHS.home} element={<Home/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRoutes