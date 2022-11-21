import '../styles/footer.css'
import Logo from '../images/LogoB&U.svg'
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';

export default function Footer() {
    return (
        <div class="footer container-fluid pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div className="row my-5 justify-content-center py-5">
                    <div className="col-11">
                        <div className="row ">
                            <div className="col-xl-4 col-md-1 col-sm-3 col-12 ">
                                <h3 className="text-muted mb-md-0 mb-5 bold-text">
                                    Barragán & Urzola Asesoría legal S.A.S.
                                    </h3>
                                
                            </div>
                            <div className="imgLogo col-xl-4 col-md-1 col-sm-3 col-12 ">
                            <img src={Logo} height="100" width={"100"}></img>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-3 col-12">
                                <h6 class="mb-3 mb-lg-4 bold-text ">
                                    <b>MENU</b></h6>
                                <ul class="list-unstyled">
                                    <li>Inicio</li>
                                    <li>Acerca de nosotros</li>
                                    <li>Áreas prácticas</li>
                                    <li>Contáctenos</li>
                                </ul>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-3 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                                    <b>DIRECCIÓN</b></h6>
                                <p class="mb-1">Carrera 26A #18-47B.</p>
                                <p>EL BOSQUE</p> </div>
                        </div>
                        <div class="row ">
                            <div class="col-xl-8 col-md-4 col-sm-4 col-auto  my-md-0 mt-5 order-sm-1 order-3 align-self-end ">
                                <p class="social text-muted mb-0 pb-0 bold-text ">
                                    <span className="mx-2 ">
                                        <Link className='footerLink' href="https://instagram.com/barraganurzola?igshid=YmMyMTA2M2Y=" target="_blank">
                                        <InstagramIcon className = "insIcon" fontSize="large" />
                                        </Link>
                                        
                                    </span>
                                </p><small class="rights"><span>&#174;</span>2022 Barragán & Urzola Asesoría legal S.A.S.
                                 </small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end mt-3   ">
                                <h6 class="text-muted bold-text"><b>Celular</b></h6><small>
                                    <span><i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>3008189275</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end ">
                                <h6 class="mt-55 mt-2 text-muted bold-text"><b>Correo electronico</b></h6>
                                <small>
                                    <span>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>barraganurzola12@gmail.com</small>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}