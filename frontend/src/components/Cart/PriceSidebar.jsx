
const PriceSidebar = ({ cartItems }) => {
    return (
        <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">

            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">
                <h1 className="px-6 py-3 border-b font-medium text-lg text-gray-500"><strong>Detalles</strong>  </h1>

                <div className="flex flex-col gap-4 p-6 pb-3">
                    <p className="flex justify-between">Precio ({cartItems.length} item) <span>${cartItems.reduce((sum, item) => sum + (item.cuttedPrice * item.quantity), 0).toLocaleString()}</span></p>
                    <p className="flex justify-between">Descuento <span className="text-primary-green">- ${cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity) - (item.price * item.quantity)), 0).toLocaleString()}</span></p>
                    <p className="flex justify-between">Costo de Envío<span className="text-primary-green">Gratis</span></p>

                    <div className="border border-dashed"></div>
                    <p className="flex justify-between text-lg font-medium">Cantidad total <span>${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</span></p>
                    <div className="border border-dashed"></div>
 
                    <p className="font-medium text-primary-green">Salvarás ${cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity) - (item.price * item.quantity)), 0).toLocaleString()} en este pedido</p>

                </div>

            </div>
            {/* <!-- nav tiles --> */}

        </div>
    );
};

export default PriceSidebar;
