import React from 'react'
import Navbar from '../components/navbar.js'
import Carousel from '../components/carousel.js'
import arrow from '../images/arrow.png'
import '../styles/home.css'
import Lawyer from '../components/lawyerSwiper.js'
import TeamSwiper from '../components/teamSwiper'
import Testimonials from '../components/testimonials.js'
import Contact from '../components/contactAddress'
import Footer from '../components/footer.js'
import about from '../images/about-1.png'
import family from '../images/family.png'
import advice from '../images/advice.png'
import tribunal from '../images/tribunal.png'
import contabilidad from '../images/contabilidad.png'
import cobertura from '../images/customer-service.png'
import ilimitado from '../images/public-service.png'
import contabilidad2 from '../images/contabilidad2.png'
import juridico from '../images/agreement2.png'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <a href="https://api.whatsapp.com/send?phone=3114070139" class="btn-whatsapp-pulse">
         
          <i class="fab fa-whatsapp"><WhatsAppIcon className="wpp" fontSize="large"></WhatsAppIcon></i>
        </a>
        <section id="acerca-de">
          <h1 className="font-weight-bold display-4 "> Barragán & Urzola Asesoría legal S.A.S </h1>
          <div class="container">
            <p className='font-weight-light my-3 '> Es una firma jurídica que ofrece servicios legales especializados en consultorías, asesorías y representaciones judiciales a personas naturales y
              jurídicas, en áreas del Derecho Privado (Civil, Civil-Bienes, Sucesiones, Familia, Comercial, Procesal, Laboral y Seguridad Social y Penal), y las correspondientes al Derecho Público (Administrativo, Contencioso Administrativo, Disciplinario, Fiscal y Constitucional), con un amplio portafolio que se puede amoldar a los requerimientos y necesidades del cuerpo de docentes y de personal del área administrativa de la Secretaría municipal y departamental en Sincelejo y sucre. </p>
          </div>
 
        </section>
        <section id="practice_area">
          <h1 className="font-weight-bold display-4 ">Áreas Prácticas</h1>
          <div class="container">
            <div class="row">

              <div class="col-md-6">
                <div class="container">
                  <Link to={"/areasPracticas/"}>
                  <a ><h3> Derechos de familia <img class="align" src={arrow} alt="https://www.flaticon.com/authors/lucy-g" /></h3></a>

                  </Link>
                  <Link to={"/areasPracticas"}>
                  <a >  <h3>Sucesiones  <img class="align1" src={arrow} alt="https://www.flaticon.com/authors/lucy-g" /> </h3> </a>
                  </Link>
                  <Link to={"/areasPracticas"}>
                  <a >    <h3> Derechos administrativos <img class="align2" src={arrow} alt="https://www.flaticon.com/authors/lucy-g" /></h3> </a>
                  </Link>

                </div>
              </div>
              <div class="col-md-6">
                <div class="container">
                <Link to={"/areasPracticas"}>
                <a>    <h3> Derechos urbanos<img class="align3" src={arrow} alt="https://www.flaticon.com/authors/lucy-g" /></h3></a>

                </Link>

                 <Link to={"/areasPracticas"}>
                 <a > <h3> Derechos civiles<img class="align4" src={arrow} alt="https://www.flaticon.com/authors/lucy-g" /></h3></a>

                 </Link>
                 <Link to={"/areasPracticas"}>
                 <a >    <h3> Derechos laborales<img class="align5" src={arrow} alt="https://www.flaticon.com/authors/lucy-g" /></h3></a>

                 </Link>

                </div>
              </div>

            </div>

          </div>

        </section>
         {/* <!---Welcome/about section--> */}
         <section class="about-section mt-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 text-center heading-section mb-5">
            <h1 className="font-weight-bold display-4 mt-4 mb-4" style={{ color: '#085072' }}> Finalidad del servicio </h1>
                <p className='font-weight-light my-3 '> 
                La firma jurídica y todo su equipo de trabajo, 
                quiere ofrecer a todo el cuerpo docente y 
                área administrativa que dependa de la Secretaría 
                de Educación Municipal de Sincelejo y Departamental de Sucre, 
                una cobertura en servicios jurídicos especializados de manera 
                integral, que logre abarcar todas las necesidades y problemáticas 
                en las distintas áreas del derecho que esta población requiera 
                durante el transcurrir de su diario vivir. </p>
            </div>
        </div>
        <div class="row img-wrap mb-5 mb-lg-0">
            <div class="col-12">
                <div class="row">
                    <div class="mb-4 margin-lg-0 col-lg-6 order-lg-2">
                        <a href="#" class="effect">
                            <img src=""alt=""
                            class="img-fluid"/>
                        </a>
                    </div>
                    <div class="col-lg-5 mr-auto text-lg-right align-self-center order-lg-1">
                        <h2 class="font-weight-bold t" style={{ color: '#085072' }}>Misión</h2>
                        <p class="mb-4">
                        Disponer de todo nuestro capital humano y de conocimiento, 
                        para brindar servicios que garanticen los derechos e intereses de 
                        todos nuestros usuarios y afiliados. en el área personal, empresarial,
                         industrial, corporativo e institucional. Así mismo prestar soluciones de capital económico a interesados en nuestro modelo de libranzas ajustado a sus necesidades, dirigido al sector público y privado </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row img-wrap mb-5 mb-lg-0">
            <div class="col-12">
                <div class="row">
                    <div class="mb-4 margin-lg-0 col-lg-6">
                        <a href="#" class="effect">
                            <img src="images/about-2.jpg"alt=""
                            class="img-fluid"/>
                        </a>
                    </div>
                    <div class="col-lg-5 ml-auto align-self-center order-lg-1">
                        <h2  style={{ color: '#085072' }}>Visión</h2>
                        <p class="mb-4">
                        Seremos un actor integral que propenda la defensa de los derechos 
                        e intereses de todos aquellos que soliciten nuestra asistencia 
                        en los diferentes escenarios. Aportando un modelo de equilibrio, 
                        sana convivencia y soluciones pertinentes a nuestro conocimiento 
                        y naturaleza empresarial.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row img-wrap mb-5 mb-lg-0">
            <div class="col-12">
                <div class="row">
                    <div class="mb-4 margin-lg-0 col-lg-6 order-lg-2">
                        <a href="#" class="effect">
                            <img src=""alt=""
                            class="img-fluid"/>
                        </a>
                    </div>

                </div>
            </div>
        </div>


    </div>
</section>
<section>

  <section id="services"  style={{ backgroundColor: '#085072' }} class="page-section colord">
  <div class="container">
    <div class="row"> 
      <div class="col-md-3 text-center"> 
      <i class="circle">
        <img className=""src={cobertura} alt="" />
        </i>
        <h3>Cobertura</h3>
<p>Para las personas que hagan parte del núcleo familiar del docente 
  o la persona que tenga el estatus de afiliado</p>
      </div>
      
      <div class="col-md-3 text-center"><i class="circle"> <img src={ilimitado} alt="" /></i>
        <h3>Ilimitado</h3>
<p>Los suscritos tendrán acceso ilimitado a todo el portafolio de servicios</p>      
</div>
      
      <div class="col-md-3 text-center"><i class="circle"> <img src={contabilidad2} alt="" /></i>
        <h3>Contabilidad</h3>
        <p>Asesoría especializada por personal
           capacitado, cobertura frente a temas cómo declaración de renta.</p>
      </div>
      
      <div class="col-md-3 text-center">
        <i class="circle"> <img src={juridico}alt="" /></i>
        <h3>Sociedad jurídica</h3>
        <p>Ejercerá representación de los intereses del afiliado ante cualquier situación de índole jurídico y contable</p>
      </div>
    </div>
  </div>
</section>
  
</section>

        <section id="lawyers">
          <h1 className="font-weight-bold display-4 ">Abogados</h1>
          <Lawyer></Lawyer>
        </section>

        {/* <section id="ourTeam">
          <div style={{ position: 'relative' }}>
            <h1 className='our p-0'>Nuestro</h1>
            <div class="title-brand" >
              <h1 class="presentation-title">EQUIPO</h1>
            </div>
            <div className='teamSwiperHome'>
            <TeamSwiper ></TeamSwiper>
            </div>
           
          </div>

        </section> */}

        <section id="testimonials">
          <Testimonials></Testimonials>
        </section>
        
        <section id="contact">
        <Contact></Contact>
        </section>

        <Footer></Footer>
      </div>
    )
  }
}
export default Home