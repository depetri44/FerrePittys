import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import PriceSidebar from './PriceSidebar';
import Stepper from './Stepper';
import { useNavigate } from 'react-router-dom';
import MetaData from '../Layouts/MetaData';
import Button from '@mui/material/Button';

const OrderConfirm = () => {

    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);

    return (
        <>
        <MetaData title="Ferreteria Pitty | Confirmación del pedido" />
 
        <main className="w-full mt-20">

            {/* <!-- row --> */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">

                {/* <!-- cart column --> */}
                <div className="flex-1">

                    <Stepper activeStep={2}>
                        <div className="w-full bg-white">
                            {cartItems?.map((item, i) => (
                                <CartItem {...item} inCart={false} key={i} />
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4 bg-white px-6 py-3 rounded-b-sm">
                            <p className="text-sm">El correo electrónico de confirmación del pedido será enviado a <span className="font-medium">{user.email}</span></p>
                            <Button variant="contained" color="success" onClick={() => { navigate('/process/payment') }} className="bg-black px-6 py-2 text-white font-medium rounded-sm shadow hover:shadow-lg uppercase">Continuar</Button>
                        </div>
                    </Stepper>
                </div>

                <PriceSidebar cartItems={cartItems} />
            </div>
        </main>
        </>
    );
};

export default OrderConfirm;
