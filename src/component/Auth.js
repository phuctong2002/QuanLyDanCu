const { Outlet, Navigate } = require("react-router-dom")

const Auth = ()=>{
    const token = sessionStorage.getItem("token");
    if( token ){
        return <Outlet/>
    }
    return <Navigate to="/login"/>
}

export default Auth;