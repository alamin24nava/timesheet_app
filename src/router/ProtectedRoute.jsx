import { useSelector } from "react-redux"
import { authUseSelector } from "../features/auth/authSlice"
import { Navigate, Outlet } from "react-router-dom"
const ProtectedRoute = ()=>{
    // const {user} = useSelector(authUseSelector)
    // console.log(user)
    // // const isLoggedIn = window.localStorage.getItem("token")

    // return user?.status == "success" ? <Outlet/> : <Navigate to="/login"/>
}
export default ProtectedRoute