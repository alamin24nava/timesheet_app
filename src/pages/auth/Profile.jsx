import { useSelector } from "react-redux"
import { postLogin, authUseSelector } from "../../features/auth/authSlice"
const Profile =()=>{
    const {user} = useSelector(authUseSelector)
    console.log(user)
    return(
        <div className="card card-side bg-base-100 shadow-xl w-2/3 m-auto">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    )
}
export default Profile