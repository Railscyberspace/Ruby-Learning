import Crown48v from '../Images/Crown48v.png';
import femicareInverter48v from '../Images/femicareInverter48v.png';
import VimINverter48v from '../Images/VimINverter48v.png';




function Battery(){
    return(
        <div>
        <div class="container text-center">
             <div class="row align-items-start">
                   <div class="col">      
            <div class="card" width={18}>
                <div class="card-body">
                <img src ={Crown48v} height ={200} width ={200} alt="Crown 48v Inverter"/>
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span>N580,000.00</span>
                    <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
         </div>
            <div class="col">
            <div class="card" width={18} height={18} >
            <div class="card-body">
                <img src ={femicareInverter48v}  height ={200} width ={200} alt ="Crown 48v 5kva Inverter"/> 
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span>N650,000.00</span>
                    <button type="button" class="btn btn-secondary">Add to Cart</button>
                </div>
               </div>
              </div>
            <div class="col">
            <div class="card" width={18}>
            <div class="card-body">
                    <img src={VimINverter48v} height={200} width ={200} alt = 'femicare Inverter 48v 3.5kva'/> 
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span>N950,000.00</span>
                    <button type="button" class="btn btn-secondary">Add to Cart</button>
             </div>
            </div>
           </div>
  </div>
  </div>
</div>
    )
}

export default Battery;
