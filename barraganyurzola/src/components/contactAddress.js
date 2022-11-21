import '../styles/contactAddress.css'

export default function ContactAddress(params) {
    return (
        <div>
        <section class="contact-address-area">
            <div class="container">
                <div class="sec-title-style1 text-center max-width">
                    <div class="title">Contáctanos</div>
                    <div class="text"><div class="decor-left"><span></span></div><p>Información de interés</p><div class="decor-right"><span></span></div></div>
                    {/* <div class="bottom-text">
                        <p>Fixyman is proud to be the name that nearly 1 million homeowners have trusted since 1996 for home improvement and repair, providing virtually any home repair.</p>
                    </div> */}
                </div>
                <div class="contact-address-box row">
                    {/* <!--Start Single Contact Address Box--> */}
                    <div class="col-sm-4 single-contact-address-box text-center">
                        <div class="icon-holder">
                            <span class="icon-clock-1">
                                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span>
                            </span>
                        </div>
                        <h3>Servicios jurídicos</h3>
                        <h2>Especializados a la población docente</h2>
                    </div>
                    {/* <!--End Single Contact Address Box--> */}
                    {/* <!--Start Single Contact Address Box--> */}
                    <div class="col-sm-4 single-contact-address-box main-branch">
                        <h3>Puedes encontrarnos en:</h3>
                        <div class="inner">
                            <ul>
                                <li>
                                    <div class="title">
                                        <h4>Dirección:</h4>
                                    </div>
                                    <div class="text">
                                        <p>Sincelejo, Sucre<br/> Carrera 26A #18-47, Barrio el bosque</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">
                                        <h4>Ph & Fax:</h4>
                                    </div>
                                    <div class="text">
                                        <p>3114070139 <br/> 3008189275</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">
                                        <h4>Hrs oficina:</h4>
                                    </div>
                                    <div class="text">
                                        <p>Lun-Vier: 8:30am - 4:30pm<br/> Sab-Dom: Cerrado</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--End Single Contact Address Box--> */}
                    {/* <!--Start Single Contact Address Box--> */}
                    <div class="col-sm-4 single-contact-address-box text-center">
                        <div class="icon-holder">
                            <span class="icon-question-2">
                                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                            </span>
                        </div>
                        <h3> Integra la jurisdicción </h3>
                        <h2> departamental de Sucre.</h2>
                    </div>
                    {/* <!--End Single Contact Address Box--> */}
                </div>
            </div>
        </section>  
{/* End Contact Address Area   */}
{/* Start contact form area  */}
{/* <section class="contact-info-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="contact-form">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="sec-title-style1 float-left">
                                <div class="title">Compártenos tu caso </div>
                                <div class="text"><div class="decor-left"><span></span></div><p>Envía un mensaje</p></div>
                            </div>
                            <div class="text-box float-right">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div> 
                    </div>   
                    <div class="inner-box">
                        <form id="contact-form" name="contact_form" class="default-form" action="inc/sendmail.php" method="post">
                            <div class="row">
                                <div class="col-xl-6 col-lg-12">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div class="input-box">   
                                                <input type="text" 
                                                name="form_name"    
                                                placeholder="Nombre" 
                                                required=""
                                                />
                                            </div> 
                                             <div class="input-box"> 
                                                <input type="text" 
                                                 name="form_website"
                                                // value="" 
                                                placeholder="Apellido"/>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="input-box"> 
                                                <input type="email" 
                                                name="form_email" 
                                                
                                                placeholder="Email" 
                                                required=""/>
                                            </div>
                                            <div class="input-box"> 
                                                <input type="text" 
                                                 
                                                name="form_phone" 
                                                placeholder="Celular"/>
                                            </div> 
                                        </div>  
                                    </div>    
                                </div>
                                <div class="col-xl-6 col-lg-12">
                                    <div class="input-box">    
                                        <textarea name="form_message" 
                                        placeholder="Escribe aqui tu mensaje..." 
                                        required=""></textarea>
                                    </div>
                                    <div class="button-box">
                                        <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value=""/>
                                        <button type="submit" data-loading-text="Please wait...">Send Message<span class="flaticon-next"></span></button>    
                                    </div>         
                                </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section> */}
</div>
    );
}