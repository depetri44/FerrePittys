import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';

const Home = () => {

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Ferreteria Pitty | Electronicos, Herramientas, Pintura, Trabajo, Hogar, Inicio" />
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        <DealSlider title={"Descuentos Especiales"} />
        {!loading && <ProductSlider title={"Sugeridos"} tagline={"Basado en tu actividad"} />}
        <DealSlider title={"Mejores Marcas, Mejores Precios"} />
        {!loading && <ProductSlider title={"También te puede interesar.."} tagline={"Basado en tus Intereses"} />}
        <DealSlider title={"Ofertas Imperdibles"} />
        {!loading && <ProductSlider title={"¡No te los pierdas!"} tagline={"Insipirado en tus compras"} />}
      </main>
    </>
  );
};

export default Home;
