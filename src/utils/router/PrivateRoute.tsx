import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const auth = false

    return (
        auth ? <Outlet /> : <Navigate to="login" />
    )
}

export default PrivateRoute