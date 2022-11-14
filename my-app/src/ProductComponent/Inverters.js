import  inverter5kvapc from '../Images/inverter5kvapc.png';
import  lithiumbattery from '../Images/lithiumbattery.png';
import chargecontroller from '../Images/chargecontroller.png';
import powerhybrid from '../Images/powerhybrid.png';
import smartmpptsolarcharger from '../Images/smartmpptsolarcharger.png';
import lithiumbatteries from '../Images/lithiumbatteries.png';
import xtrapowerMPPT from '../Images/xtrapowerMPPT.png';
import xtrapower from '../Images/xtrapower.png';
import Crown48v from '../Images/Crown48v.png';
import femicareInverter48v from '../Images/femicareInverter48v.png';
import VimINverter48v from '../Images/VimINverter48v.png';
import Proton24V from '../Images/Proton24V.png';
import ProtonHybrid48v from '../Images/ProtonHybrid48v.png';
import ProtonHyrbrid48v from '../Images/ProtonHyrbrid48v.jpeg';
import '../StyleComponent/Batteries.scss';
import  '../StyleComponent/inverter.scss';



function Inverters(){
    return(
<div>
<div class="container text-center batteries">
  <div class="row align-items-start ">
    <div class="col head"> 
        <div class="card" width={18}>
        <img className ="items" src= { inverter5kvapc} height={200} width ={200} alt = "Hybrid inveter" />
        <div class="card-body">
            <h5 class="card-title">xtrapower Hybrid</h5>
            <h6 class="card-subtitle mb-2 text-muted">5kva 48v</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <span className='butt-money'>N580,000.00</span>
            <button type="button" class="btn btn-secondary">Add to Cart</button>
        </div>
        </div>
    </div>
    <div class="col">
            <div class="card" width={18}>
            <img  className = "items"src={lithiumbattery} height={200} width ={200} alt = 'Mppt charge controller' />
            <div class="card-body">
                <h5 class="card-title">xtrapower Hybrid </h5>
                <h6 class="card-subtitle mb-2 text-muted">7.5kva 48v</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
    </div>
    <div class="col head">
            <div class="card" width={18}>
            <img className = "items" src={chargecontroller} height={200} width ={200} alt = 'Mppt charge controller' />
            <div class="card-body">
                <h5 class="card-title">xtrapower charge controller</h5>
                <h6 class="card-subtitle mb-2 text-muted">12v-48v 70A </h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
        </div>
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col head">
             <div class="card" width={18}>
             <img className='items' src={powerhybrid} height ={200} width ={200} alt = "powerhybrid"/>
            <div class="card-body">
                <h5 class="card-title">xtrapower Hybrid series</h5>
                <h6 class="card-subtitle mb-2 text-muted">4kva 48v</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
    </div>
    <div class="col head">
            <div class="card" width={18} >
            <img className='items' src={smartmpptsolarcharger} height ={200} width ={200} alt = "powerhybrid"/>
            <div class="card-body">
                <h5 class="card-title">xtrapower chargecontroller </h5>
                <h6 class="card-subtitle mb-2 text-muted">96v-300v 100A series</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
        </div>
        <div class="col head">
        <div class="card" width={18}>
                <img className='items' src ={xtrapowerMPPT} height={200} width ={200} alt="xtrapowerMPPT" />
                   <div class="card-body">
                      <h5 class="card-title">xtrapower touch screen chargecontroller</h5>
                          <h6 class="card-subtitle mb-2 text-muted">48v 100A touch screen series</h6>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <span className='butt-money'>N380,000.00</span>
                          <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
        </div>
  </div>
  <div class="row align-items-end">
    <div class="col head">
            <div class="card" width={18}>
            <img className='items' src={lithiumbatteries} height ={200} width ={200} alt ="Lithium battery"/>
                <div class="card-body">
                <h5 class="card-title">Lithium Batteries</h5>
                <h6 class="card-subtitle mb-2 text-muted">5.5kwh 25.5v</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
        </div>
        </div>
        </div>
        <div class="col">
        <div class="card" width={18}>
        <img src ={xtrapower} height ={200} width ={200} alt ="xtrapower" className='rounded float-start'/>
                <div class="card-body">
                    <h5 class="card-title">xtrapower Hybrid Inverter</h5>
                    <h6 class="card-subtitle mb-2 text-muted">3.5kva Hybide series 48v</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span className='butt-money'>N580,000.00</span>
                    <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
         </div>
        </div>
        <div class="col head">
        <div class="card" width={18}>
        <img className ="items" src={lithiumbattery} height = {200} width ={200} alt = 'lithiumbattery' />
                <div class="card-body">
                    <h5 class="card-title">Hybide Inverter</h5>
                    <h6 class="card-subtitle mb-2 text-muted">5kva 48v series</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span className='butt-money'>N580,000.00</span>
                    <button type="button" class="btn btn-secondary">Add to Cart</button>
                </div>
       </div>
    </div>
  </div>

  <div class="row align-items-center">
    <div class="col head">
                <div class="card" width={18}>
                <img className='items' src ={Crown48v} height ={200} width ={200} alt="Crown 48v Inverter"/>
               <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
    </div>
    <div class="col head">
            <div class="card" width={18}>
            <img className='items' src ={femicareInverter48v}  height ={200} width ={200} alt ="Crown 48v 5kva Inverter"/> 
            <div class="card-body">
                <h5 class="card-title">Femcare Inverter</h5>
                <h6 class="card-subtitle mb-2 text-muted">24v-48v 2.5kva </h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
    </div>
    <div class="col head">
            <div class="card" width={18}>
            <img className='items' src={VimINverter48v} height={200} width ={200} alt = 'femicare Inverter 48v 3.5kva'/> 
            <div class="card-body">
                <h5 class="card-title">Vim Solar generator</h5>
                <h6 class="card-subtitle mb-2 text-muted">600Watts series</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
         </div>
     </div>
</div>
<div class="row align-items-end">
            <div class="col head">
            <div class="card" width={18}>
                <img className='items' src={Proton24V} height={200} width ={200} alt = "Proton hyride inverter"/>
            <div class="card-body">
                <h5 class="card-title">Proton Hybide Inverter</h5>
                <h6 class="card-subtitle mb-2 text-muted">24v 2.5kva series</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className='butt-money'>N580,000.00</span>
                <button type="button" class="btn btn-secondary">Add to Cart</button>
            </div>
            </div>
          </div>
    <div class="col head">
    <div class="card" width={18}>
        <img className='items' src ={ProtonHybrid48v} height={200} width={200} alt ="proton Hybrid inverter series"/>
          <div class="card-body">
            <h5 class="card-title">Proton Hybide series </h5>
            <h6 class="card-subtitle mb-2 text-muted">5kva 48v series</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <span className='butt-money'>N580,000.00</span>
            <button type="button" class="btn btn-secondary">Add to Cart</button>
        </div>
        </div>
    </div>
    <div class="col head">
                <div class="card" width={18}>
                    <img className='items' src ={ProtonHyrbrid48v} height={200} width={200} alt ="Hybide series inverter"/>
                <div class="card-body">
                    <h5 class="card-title">Proton Hybide series</h5>
                    <h6 class="card-subtitle mb-2 text-muted">5kva - 10kva 48v</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span className='butt-money'>N580,000.00</span>
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