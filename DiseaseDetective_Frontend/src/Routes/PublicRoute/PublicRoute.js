import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PublicRoute(props) {
    
    const token =useSelector(state =>state.auth.token)
    if (!token) {
        return props.component
    } else {
        return <Navigate to={"/home"}replace />
    }
}

export default PublicRoute