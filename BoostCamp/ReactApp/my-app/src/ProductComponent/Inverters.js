import  inverter5kvapc from '../Images/inverter5kvapc.png';
import  lithiumbattery from '../Images/lithiumbattery.png';
import chargecontroller from '../Images/chargecontroller.png';
import powerhybrid from '../Images/powerhybrid.png';
import smartmpptsolarcharger from '../Images/smartmpptsolarcharger.png';
import LITHIUMBATTERY from '../Images/LITHIUMBATTERY.png';
import xtrapowerMPPT from '../Images/xtrapowerMPPT.png';
import xtrapower from '../Images/xtrapower.png';

function Inverters(){
    return(
        <div>
            <div class="container text-center">
  <div class="row align-items-start">
    <div class="col"> 
    <img src= { inverter5kvapc} height={200} width ={200} alt = "Hybrid inveter" className='rounded float-start'/>
    </div>
    <div class="col">
    <img src={lithiumbattery} height={200} width ={200} alt = 'Mppt charge controller' className='rounded float-start'/>
    </div>
    <div class="col">
    <img src={chargecontroller} height={200} width ={200} alt = 'Mppt charge controller' className='rounded float-start'/>
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
    <img src={powerhybrid} height ={200} width ={200} alt = "powerhybrid" className='rounded float-start'/>

    </div>
    <div class="col">
    <img src={smartmpptsolarcharger} height ={200} width ={200} alt = "powerhybrid" className='rounded float-start'/>
    </div>
    <div class="col">
    <img src ={xtrapowerMPPT} height={200} width ={200} alt="xtrapowerMPPT" className='rounded float-start'/>
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col" >
    <img src={LITHIUMBATTERY} height ={200} width ={200} alt ="LITHIUMBATTERY"/>
    </div>
    <div class="col">
    <img src ={xtrapower} height ={200} width ={200} alt ="xtrapower" className='rounded float-start'/>
    </div>
    <div class="col" >
    <img src={lithiumbattery} height = {200} width ={200} alt = 'lithiumbattery' className='rounded float-start'/>
    </div>
  </div>
</div>
    </div>

    )
}

export default Inverters;