import  inverter5kvapc from '../Images/inverter5kvapc.png';
import  lithiumbattery from '../Images/lithiumbattery.png';
import chargecontroller from '../Images/chargecontroller.png';
import powerhybrid from '../Images/powerhybrid.png';
import smartmpptsolarcharger from '../Images/smartmpptsolarcharger.png';
import lithiumbatteries from '../Images/lithiumbatteries.png';
import xtrapowerMPPT from '../Images/xtrapowerMPPT.png';
import xtrapower from '../Images/xtrapower.png';

function Inverters(){
    return(
        <div>
            <div class="container text-center">
  <div class="row align-items-start">
    <div class="col"> 
        <div class="card" width={18}>
        <img src= { inverter5kvapc} height={200} width ={200} alt = "Hybrid inveter" className='rounded float-start'/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <span>N580,000.00</span>
            <button type="button" class="btn btn-secondary">Add to Cart</button>
        </div>
        </div>
    </div>
    <div class="col">
            <div class="card" width={18}>
            <img src={lithiumbattery} height={200} width ={200} alt = 'Mppt charge controller' className='rounded float-start'/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
    </div>
    <div class="col">
            <div class="card" width={18}>
            <img src={chargecontroller} height={200} width ={200} alt = 'Mppt charge controller' className='rounded float-start'/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
        </div>
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
             <div class="card" width={18}>
             <img src={powerhybrid} height ={200} width ={200} alt = "powerhybrid" className='rounded float-start'/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
    </div>
    <div class="col">
            <div class="card" width={18} >
            <img src={smartmpptsolarcharger} height ={200} width ={200} alt = "powerhybrid" className='rounded float-start'/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
        </div>
        <div class="col">
        <div class="card" width={18}>
                <img src ={xtrapowerMPPT} height={200} width ={200} alt="xtrapowerMPPT" className='rounded float-start'/>
                   <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <span>N580,000.00</span>
                          <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
        </div>
  </div>
  <div class="row align-items-end">
    <div class="col" >
            <div class="card" width={18}>
            <img src={lithiumbatteries} height ={200} width ={200} alt ="Lithium battery"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
        </div>
        </div>
        </div>
        <div class="col">
        <div class="card" width={18}>
        <img src ={xtrapower} height ={200} width ={200} alt ="xtrapower" className='rounded float-start'/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span>N580,000.00</span>
                    <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
         </div>
        </div>
        <div class="col" >
        <div class="card" width={18}>
        <img src={lithiumbattery} height = {200} width ={200} alt = 'lithiumbattery' className='rounded float-start'/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span>N580,000.00</span>
                    <button type="button" class="btn btn-secondary">Add to Cart</button>
                </div>
       </div>
    </div>
  </div>
</div>
    </div>

    )
}

export default Inverters;