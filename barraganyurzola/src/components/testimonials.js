import React, { useState } from "react"
import '../styles/testimonials.css'
import quote from '../images/quote.png';
import whiteQuote from '../images/whiteQuote.png';
import profesora from '../images/professor.png';
import profesor from '../images/teacher.png';

export default function Testimonials(props) {
  
    return (
        <div class="container my-5">
        <section>
            <div class="text-center mb-5">
                <span>TESTIMONIOS</span>
                <h2 className="font-weight-bold display-4 ">¿Qué dicen nuestros <span style={{color: '#085072'}}>Clientes</span> ?</h2>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="bg-light position-relative px-3 mt-5 text-center py-5">
                        <div class="my-2">
                        <img src={quote}/>
                        </div>
                        <div class="px-3 text-center pb-3">
                            <p class="font-weight-light my-3 text-secondary">
                             Excelente iniciativa para la comunidad de profesores del departamento de Sucre.   </p>
                        </div>
                    </div>
                    <div>
                        <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white mt-4"
                         style={{backgroundColor: '#085072',width: '60px',height: '60px;'}}
                            >
                            <img class="rounded-circle" src={profesor} alt="Teacher icons created by Freepik - Flaticon" height="55px" width="55px"/>
                        </div>
                        <div class="text-center">
                            <h5 class="font-weight-bold mt-4 mb-0" 
                            style={{color: '#085072'}}
                            >Profesor afiliado</h5>
                            <small class="font-weight-bold" >Barragán&Urzola S.A.S</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div
                      style={{backgroundColor: '#085072'}}
                     class="position-relative px-3 mt-5 text-center py-5">
                        <div class="my-2">
                        <img src={whiteQuote}/>
                        </div>
                        <div class="px-3 text-center pb-3">
                            <p class="font-weight-light my-3 text-white">Rapida respuesta de los abogados y afiliadores para todos los procesos que llevan a cabo.</p>
                        </div>
                    </div>
                    <div>
                        <div  class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white mt-4"
                             style={{width: '60px', height: '60px' ,backgroundColor: '#085072'}}
                             >
                            <img class="rounded-circle" src={profesora} alt="" height="55px" width="55px"/>
                        </div>
                        <div class="text-center">
                            <h5 class="font-weight-bold mt-4 mb-0 " style={{color: '#085072'}}>Profesora afiliada</h5>
                            <small class="font-weight-bold"style={{lineHeight: 1}}>Barragán&Urzola S.A.S</small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bg-light position-relative px-3 mt-5 text-center py-5">
                        <div class="my-2">
                        <img src={quote}/>
                        </div>
                        <div class="px-3 text-center pb-3">
                            <p class="font-weight-light my-3 text-secondary">Me han ayudado con todos mis procesos, sus instalaciones me parecen excelentes, todo está en buen estado.</p>
                        </div>
                    </div>
                    <div>
                        <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white mt-4"
                             style={{width: '60px',height: '60px', backgroundColor: '#085072'}}>
                            <img class="rounded-circle"src={profesora}  alt="" height="55px" width="55px"/>
                        </div>
                        <div class="text-center">
                            <h5 class="font-weight-bold mt-4 mb-0 " style={{color: '#085072'}}>Profesora afiliada</h5>
                            <small class="font-weight-bold" style={{lineHeight: 1}}>Barragán&Urzola S.A.S</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>



 
    );
}