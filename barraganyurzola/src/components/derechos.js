
import '../styles/derechosfamilia.css'
import arrow from '../images/arrow.png'
import Banner from './banner.js'
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    MarginTop:'150px',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="info-derechos-familia">
      <h2 className="font-weight-bold display-4 titleAreas" 
      style={{color: '#085072'}}> Áreas de práctica</h2>
    <div className='row' >
      <div className='col-md-9'>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
        expandIcon={<ExpandMoreIcon />}
        >
        
          <Typography> <h3>Derechos de familia</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography'>
        <p>¿Qué dice la constitución sobre la familia? </p>  
          <br></br>Artículo 42. La familia es el núcleo fundamental de la sociedad.
          <br></br>  Se constituye por vínculos naturales o jurídicos, por la decisión libre de un hombre y una mujer de
        contraer matrimonio o por la voluntad responsable de conformarla.
        <br></br>  El Estado y la sociedad garantizan la protección integral de la familia.
          </Typography>
          <Typography className='typography'>
         <p>Delitos contra la familia</p>  <br></br>En Colombia, como en casi todos los países, la familia es el bien jurídico supremo, que está resguardado en el Código Penal con disposiciones específicas que condenan la comisión de delitos en su contra. <br/>
    <br/> <p> El Código Penal Colombiano tipifica los siguientes delitos: </p>
    <br/>  Violencia intrafamiliar, ejercicio arbitrario de la custodia de un hijo menor de edad,
      mendicidad y tráfico de menores, inasistencia alimentaria, entre otros.</Typography>
        </AccordionDetails>
      </Accordion>

      

      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"
        expandIcon={<ExpandMoreIcon />}>
          <Typography><h3>Derechos administrativos</h3></Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography className='typography'>
           <p>¿Qué es el derecho administrativo?</p> <br></br>
           El derecho administrativo en Colombia al igual que para otros países, se refiere a las normas
         jurídicas que
         regulan la organización de la actividad de la administración pública.
        El derecho administrativo es una de las ramas del derecho que se concentra en el análisis,
        organización y clasificación de las diferentes normativas relacionadas
         con todos los organismos y entidades que forman parte del Estado.

          </Typography>
          <Typography className='typography'>
           <p>Ley 1437 de 2011</p> <br></br>
           La ley 1437 de 2011 viene a reafirmar la antigua vocación democrática del
        derecho administrativo colombiano y, bajo la influencia poderosa de la
        Constitución de 1991, ratifica la idea de la jurisdicción de lo contencioso administrativo como institución de defensa social y de salvaguardia de la justicia
        y del derecho y, en términos más generales, la idea de que el derecho administrativo tiene como objeto primordial la protección de todas las personas
        en sus intereses individuales y colectivos, y el amparo de las garantías sociales
        consignadas en la Carta Fundamental.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"
        expandIcon={<ExpandMoreIcon />}>
          <Typography><h3>Derechos urbanos</h3>
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography'>
          <p> ¿Qué es el derecho urbanístico?</p> <br></br>
            “el conjunto de normas de derecho administrativo que regulan los procedimientos e instrumentos legales necesarios para el desarrollo físico de los municipios y distritos, encaminados al correcto y eficaz ejercicio de la función pública del urbanismo, a la ejecución de los
instrumentos de gestión y al cumplimiento de los principios rectores del desarrollo territorial”
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header"
        expandIcon={<ExpandMoreIcon />}>
          <Typography><h3>Derechos civiles</h3>
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography'>
          <p>¿Qué es el derecho civil en Colombia?</p> <br></br>
          Se conoce como derecho civil a aquél que se encarga de regir los 
          vínculos privados que las personas establecen entre ellas. 
          Está formado por las reglas jurídicas que articulan las relaciones patrimoniales o personales entre individuos (personas físicas o personas jurídicas). La finalidad del derecho civil es preservar los intereses del sujeto a nivel patrimonial y moral.
          </Typography>
          <Typography className='typography'>
            <p>¿Cuáles son los derechos civiles de las personas?</p> <br></br>La libertad, la justicia, la igualdad, en un estado social y democrático de derecho,
        el principio de legalidad: todos los ciudadanos e incluso las administraciones están sujetas a la ley.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header"
        expandIcon={<ExpandMoreIcon />}>
          <Typography><h3>Derechos laborales</h3>
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography'>
          <p>¿Qué es el derecho laboral en Colombia?</p> <br></br>
          El derecho laboral colombiano es el conjunto de principios, acciones y 
          normas que regulan directa e indirectamente las relaciones entre 
          empleadores y trabajadores, y de estos con el Estado con el objeto 
          de garantizar los derechos fundamentales de los trabajadores y la 
          protección del trabajo. Todo lo anterior tiene el único fin de lograr 
          la paz social, siendo esta la finalidad del Código Laboral Colombiano.

          </Typography>
          <Typography className='typography'>
            <p>¿Cuándo se entienden vulnerados los derechos y garantías de los trabajadores y/o trabajadoras?
</p> <br></br>Se entienden vulnerados o lesionados cuando el empleador o quien lo 
representa realiza actos o adopta medidas que limitan el pleno ejercicio de los 
derechos fundamentales del trabajador sin justificación suficiente, en forma 
arbitraria o desproporcionada, o sin respeto a su contenido esencial.


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header"
        expandIcon={<ExpandMoreIcon />}>
          <Typography><h3>Sucesiones</h3>
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='typography'>
          <p>¿Qué es el derecho de sucesión?</p> <br></br>
          El derecho de sucesión hereditaria,  puede considerarse como aquella 
          parte del derecho privado constituida por el conjunto de normas que 
          regulan el destino que ha de darse a las relaciones jurídicas de una persona cuando muere.

          </Typography>
          <Typography className='typography'>
            <p> ¿Cuánto cuesta una sucesión en Colombia?</p> <br></br>
            Si los activos pertenecientes a la herencia no superan los 15 SMLV, 
            se puede realizar una sucesión ante la notaría 
            y sin la presentación de un abogado, y tiene una duración cercana a los
             15 días. Y si por el contrario, supera los 15 SMLV, deberá contratar los 
             servicios de un abogado y otorgar un poder para realizar el trámite y su
              duración se podrá demorar hasta un año. El costo varía de acuerdo al valor 
              de los elementos de que consta la herencia (bienes, vehículos, animales, etc.).


          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

      <Banner></Banner>
    </div>
    </div>
  );
}