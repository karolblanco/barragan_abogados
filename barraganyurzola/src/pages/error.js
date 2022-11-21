import '../styles/error.css'


export default function Error() {
    return(
<div class="card errorBody">
    
    <div class="star top">
        <img src={"https://svgshare.com/i/YdG.svg"}/>
    </div>
    <div class="star top-rg">
      <img src={"https://svgshare.com/i/Ydc.svg"}/>
    </div>
    <div class="star bottom-lf">
      <img src={"https://svgshare.com/i/YdG.svg"}/>
    </div>
    <div class="star bottom-rg">
      <img src={"https://svgshare.com/i/Ydo.svg"}/>
    </div>
      <div class="container flex">
          <div class="error">
              <span>404
                  error
              </span>
              <p>La pagina o funcionalidad a la que intentas acceder no existe </p>
              <p>Estamos trabajando para que esta pagina esté disponible 
                y poder presentarte</p>
              <button>more</button>
          </div>
          <div class="img">
            <img src="https://svgshare.com/i/Ye7.svg"/>
        </div>

          
      </div>
  </div>
  );
}