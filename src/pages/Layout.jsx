import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="drawer">
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-base-300 w-full">
                    <div className="mx-2 flex-1 px-2">
                        <Link to="/">LOGO</Link>
                    </div>
                    <div className="flex-none block">
                        <ul className="menu menu-horizontal">
                            <li className="justify-center">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="justify-center">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="justify-center">
                                <Link to="/timesheet">Timesheets</Link>
                            </li>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn py-0 m-1">
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li className="justify-center">
                                        <Link to="/login">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="p-5">
                <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
