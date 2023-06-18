import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
  import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "Acerca De",
    links: [
      {
        name: "Contacténos",
        redirect: "https://www.FerreteriaPitty.com/helpcentre",
      },
      {
        name: "Nosotros",
        redirect: "https://www.FerreteriaPitty.com/about-us",
      }, 
    ] 
  },
  {
    title: "Ayuda",
    links: [
      {
        name: "Pagos",
        redirect: "https://www.FerreteriaPitty.com/pages/payments",
      },
      {
        name: "Envío",
        redirect: "https://www.FerreteriaPitty.com/pages/shipping",
      },
      {
        name: "Cancelación y devoluciones",
        redirect: "https://www.FerreteriaPitty.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "FAQ",
        redirect: "https://www.FerreteriaPitty.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      }
    ]
  },
  {
    title: "Política",
    links: [
      {
        name: "Política de devoluciones",
        redirect: "https://www.FerreteriaPitty.com/pages/returnpolicy",
      },
      {
        name: "Termsinos de Uso",
        redirect: "https://www.FerreteriaPitty.com/pages/terms",
      },
      {
        name: "Seguridad",
        redirect: "https://www.FerreteriaPitty.com/pages/paymentsecurity",
      },
      {
        name: "Privacidad",
        redirect: "https://www.FerreteriaPitty.com/pages/privacypolicy",
      },
      {
        name: "Sitemap",
        redirect: "https://www.FerreteriaPitty.com/sitemap",
      }, 
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/FerreteriaPitty",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/FerreteriaPitty",
      },
      {
        name: "Instagram",
        redirect: "https://www.youtube.com/FerreteriaPitty",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div> 

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Contacto:</h2>
                <p className="mt-2 leading-5">Ferreteria Pitty,<br />
                Dirección: Gral. las Heras 313,<br />
                Justiniano Posse, Córdoba,<br />                 
                Teléfono: 03537 43-0277,<br />
                  Córdoba, Argentina
                </p>
              </div> 

          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            <a href="https://seller.Ferreteriapitty.com/sell-online" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Vender en Ferreteria Pitty
            </a> 
            <a href="https://www.Ferreteriapitty.com/helpcentre" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Centro de Ayuda
            </a>

            <span>&copy; 2023-{new Date().getFullYear()} FerreteriaPitty.com</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
