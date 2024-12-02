import './index.css';
import dots from "./img/Dots.svg"
import logo1 from "./img/Logo1.svg"
import logo2 from "./img/Logo2.svg"
import logo3 from "./img/Logo3.svg"
import bw from "./img/BW.svg"
import ar from "./img/Arr.svg"
import z from "./img/a1.svg"
import z1 from "./img/a2.svg"
import z2 from "./img/a3.svg"
import z3 from "./img/a4.svg"
import z4 from "./img/a5.svg"

function App() {
  return (
    <div className="App">
      <header className='color flex justify-between px-4 py-3'>
        <img className='' src={dots} alt=""/>
        <p className='text-sm font-bold'>SUMMER SALE UP TO 50% OFF</p>
        <img src={dots} alt=""/>
      </header>
      <div className='items-center flex justify-center h-[280px] gap-[57px]'>
          <img src= {logo1} alt=''/>
          <img src= {logo2} alt=''/>
          <img src= {logo3} alt=''/>
      </div>
      <div>
        <div>
          <img className='w-full' src= {bw} alt=''/>
        </div>
        <div>
          <div className='text mt-[-160px] ml-[112px] text-[32px] font-bold '>
          <p>Spring Season</p>
          </div>
          <div className='text text-[32px] ml-[2500px] mt-[-30px] font-bold '>
            <p>view collection</p>
          </div>
          <div className='ml-[2725px] mt-[-31.5px]'>
          <img src={ar} alt=''/>
          </div>
        </div>
      </div>
      <div className='color px-28 py-14 mt-[100px]'>
        <div className='items-center flex justify-between py-[120px]'>
        <img src={z} alt="" />
        <img src={z1} alt="" />
        <img src={z2} alt="" />
        <img src={z3} alt="" />
        <img src={z4} alt="" />
        </div>
      </div>
    </div>
  );
}
export default App;
