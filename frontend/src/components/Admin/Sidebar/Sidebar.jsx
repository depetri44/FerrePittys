import { Link, useNavigate } from 'react-router-dom';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import './Sidebar.css';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../../actions/userAction';

const navMenu = [
    {
        icon: <EqualizerIcon />,
        label: "Panel De Administración",
        ref: "/admin/dashboard",
    },
    {
        icon: <ShoppingBagIcon />,
        label: "Pedidos",
        ref: "/admin/orders",
    },
    {
        icon: <InventoryIcon />,
        label: "Productos",
        ref: "/admin/products",
    },
    {
        icon: <AddBoxIcon />,
        label: "Agregar Producto",
        ref: "/admin/new_product",
    },
    {
        icon: <GroupIcon />,
        label: "Usuarios",
        ref: "/admin/users",
    },
    {
        icon: <ReviewsIcon />,
        label: "Comentarios",
        ref: "/admin/reviews",
    },
    {
        icon: <AccountBoxIcon />,
        label: "Mi Cuenta",
        ref: "/account",
    },
    {
        icon: <LogoutIcon />,
        label: "Salir",
    },
];

const Sidebar = ({ activeTab, setToggleSidebar }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        enqueueSnackbar("Salida Exitosa", { variant: "success" });
        navigate("/login");
    }

    return (
        <aside className="sidebar dj z-10 sm:z-0 block min-h-screen fixed left-0 pb-14 max-h-screen w-3/4 sm:w-1/6 bg-gray-800 text-white overflow-x-hidden border-r">
            <div className="flex items-center djletrass gap-3 bg-gray-700 p-2 rounded-lg shadow-lg my-4 mx-3.5">
                <Avatar
                    alt="Avatar"
                    src={user.avatar.url}
                />
                <div className="flex flex-col gap-0">
                    <span className="font-medium text-lg">{user.name}</span>
                    <span className="text-gray-300 text-sm">{user.email}</span>
                </div>
                <button onClick={()=>setToggleSidebar(false)} className="sm:hidden bg-gray-800 ml-auto rounded-full w-10 h-10 flex items-center justify-center">
                    <CloseIcon/>
                </button>
            </div>

            <div className="flex flex-col w-full djletrass gap-0 my-8">
                {navMenu.map((item, index) => {
                    const { icon, label, ref } = item;
                    return (
                        <>
                            {label === "Logout" ? (
                                <button onClick={handleLogout} className="hover:bg-gray-700 flex gap-3 items-center py-3 px-4 font-medium">
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </button>
                            ) : (
                                <Link to={ref} className={`${activeTab === index ? "bg-gray-700" : "hover:bg-gray-700"} flex gap-3 items-center py-3 px-4 font-medium`}>
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </Link>
                            )}
                        </>
                    )
                }
                )}
            </div>

            <div className="flex flex-col gap-1 bg-gray-700 p-3 rounded-lg shadow-lg mb-6 mt-28 mx-3.5 overflow-hidden">
                <h5>Desarrollado por:</h5>
                <div className="flex flex-col gap-0">
                    <a href="https://www.linkedin.com/in/nicolas-depetri" target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-blue-500">Nicolás Depetri</a>
                    <a href="mailto:nicolasdepetri@hotmail.com" className="text-gray-300 text-sm hover:text-blue-500">nicolasdepetri@hotmail.com</a>
                </div>
            </div>
        </aside>
    )
};

export default Sidebar;
