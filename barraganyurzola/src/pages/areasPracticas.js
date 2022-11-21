import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer.js'
import Navbar from '../components/navbar.js'
import Derechos from '../components/derechos.js'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

class AreasPracticas extends React.Component{
    render( ){
        return(
            <div>
                        <Navbar></Navbar>
                        <a href="https://api.whatsapp.com/send?phone=3114070139" class="btn-whatsapp-pulse">
         
         <i class="fab fa-whatsapp"><WhatsAppIcon className="wpp" fontSize="large"></WhatsAppIcon></i>
       </a>        
                <section id="derechos">
                <Derechos >
                        </Derechos>
                </section>
                       
                        <Footer></Footer>

            </div>
        );
    }
}
export default AreasPracticas;