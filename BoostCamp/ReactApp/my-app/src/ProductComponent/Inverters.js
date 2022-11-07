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
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col">
                <img src= { inverter5kvapc} height={200} width ={200} alt = "Hybrid inveter"/>
                </div>
                <div class="col">
                <img src={lithiumbattery} height={200} width ={200} alt = 'Mppt charge controller'/>
                </div>
                <div class="col">
                <img src={chargecontroller} height={200} width ={200} alt = 'Mppt charge controller'/>
                </div>
            </div>
        </div>

        <div class="row align-items-center">
            <div class="col">
            <img src={powerhybrid} height ={200} width ={200} alt = "powerhybrid"/>
            </div>
            <div class="col">
            <img src={smartmpptsolarcharger} height ={200} width ={200} alt = "powerhybrid"/>
            </div>
            <div class="col">
            <img src ={xtrapowerMPPT} height={200} width ={200} alt="xtrapowerMPPT"/>
            </div>
        </div>

        <div class="row align-items-end">
            <div class="col">
            <img src={LITHIUMBATTERY} height ={200} width ={200} alt ="LITHIUMBATTERY"/>
            </div>
            <div class="col">
            <img src ={xtrapower} height ={200} width ={200} alt ="xtrapower"/>
            </div>
            <div class="col">
            <img src={lithiumbattery} height = {200} width ={200} alt = 'lithiumbattery'/>
            </div>
        </div>
    </div>

    )
}

export default Inverters;