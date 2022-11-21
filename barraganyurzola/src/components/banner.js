import message from '../images/message (1).png';
import phone from '../images/phone-receiver.png';

export default function Banner() {
    return (
        <div class="col-md-3" id="banner">
            <div class="container" >

                <div class="card">
                    <div class="card-title mb-0">
                        <h5 id="titulo1">Áreas prácticas</h5>
                    </div>
                    <div class="card-body-banner shadow-sm p-3 mb-5 , rounded">
                        <a >Derechos de familia.</a><br />
                        <a >Sucesiones.</a><br />
                        <a >Derechos administrativos.</a><br />
                        <a >Derechos urbanos.</a><br />
                        <a >Derecho civil.</a><br />
                        <a >Derecho laboral.</a><br />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="container">
                        <div class="card">
                            <div class="card-title mb-0">
                                <h5 id="titulo1"> Contáctenos</h5>
                            </div>
                            <div class="card-body-banner shadow-sm p-3 mb-5, rounded">
                                <div><img src={message} alt="" />barraganurzola12@gmail.com</div>
                                <div><img src={phone} alt="" /> 3114070139</div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}