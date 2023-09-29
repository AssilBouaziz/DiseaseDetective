import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function PrivateRoute(props) {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  if (token) {
    return (
      <div>
          {props.role === user.role || !props.role ? props.component : null}
          <Footer email={user.email} />
      </div> 
    );
  } else {
    return <Navigate to={"/signin"} replace />;
  }
}

export default PrivateRoute;
