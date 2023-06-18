import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../../actions/userAction';

const PrimaryDropDownMenu = ({ setTogglePrimaryDropDown, user }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { wishlistItems } = useSelector((state) => state.wishlist);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
        enqueueSnackbar("Cierre de sesión con éxito", { variant: "success" });
        setTogglePrimaryDropDown(false);
    }

    const navs = [
        
        {
            title: "Pedidos",
            icon: <ShoppingBagIcon sx={{ fontSize: "18px" }} />,
            redirect: "/orders",
        },
        {
            title: "Me Gusta",
            icon: <FavoriteIcon sx={{ fontSize: "18px" }} />,
            redirect: "/wishlist",
        },
        {
            title: "Notificiones",
            icon: <NotificationsIcon sx={{ fontSize: "18px" }} />,
            redirect: "/",
        },
    ]

    return (
        <div className="absolute w-60 -left-24 ml-2 top-9 bg-white shadow-2xl rounded flex-col text-sm">

            {user.role === "admin" &&
                <Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to="/admin/dashboard">
                    <span className="text-primary-blue"><DashboardIcon sx={{ fontSize: "18px" }} /></span>
                    Panel de Administración
                </Link>
            }

            <Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t" to="/account">
                <span className="text-primary-blue"><AccountCircleIcon sx={{ fontSize: "18px" }} /></span>
                Perfíl
            </Link>

            {navs.map((item, i) => {
                const { title, icon, redirect } = item;

                return (
                    <>
                        {title === "Wishlist" ? (
                            <Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" to={redirect} key={i}>
                                <span className="text-primary-blue">{icon}</span>
                                {title}
                                <span className="ml-auto mr-3 bg-gray-100 p-0.5 px-2 text-gray-600 rounded">
                                    {wishlistItems.length}
                                </span>
                            </Link>
                        ) : (
                            <Link className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50" to={redirect} key={i}>
                                <span className="text-primary-blue">{icon}</span>
                                {title}
                            </Link>
                        )}
                    </>
                )
            })}

            <div className="pl-3 py-3.5 flex gap-3 items-center hover:bg-gray-50 rounded-b cursor-pointer" onClick={handleLogout} >
                <span className="text-primary-blue"><PowerSettingsNewIcon sx={{ fontSize: "18px" }} /></span>
                Salir
            </div>

            <div className="absolute right-1/2 -top-2.5">
                <div className="arrow_down"></div>
            </div>
        </div>
    );
};

export default PrimaryDropDownMenu;
