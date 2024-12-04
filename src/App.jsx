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
import dora from "./img/DoraDura.svg"
import short from "./img/Short.svg"
import arrowl from "./img/ArrL.svg"
import arrowR from "./img/ArrR.svg"
import m from "./img/Man.svg"
import wm from "./img/Dora2.svg"
import mm from "./img/Man2.svg"
import arrrR from "./img/ArrowUpRight.svg"
import bloom from "./img/Bloomberg.svg"
import forb from "./img/Forbes.svg"
import fast from "./img/Fast_company.svg"
import link from "./img/Link.svg"
import one from "./img/one.svg"
import two from "./img/two.svg"
import three from "./img/three.svg"
import four from "./img/four.svg"
import buttl from "./img/ButL.svg"
import buttr from "./img/ButR.svg"

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
          <div className='text text-[32px] ml-[1200px] font-bold '>
            <p>view collection</p>
          </div>
          <div className='ml-[1425px] mt-[-31.5px]'>
          <img src={ar} alt=''/>
          </div>
        </div>
      </div>
      <div className='color items-center flex justify-between px-28 py-14 mt-[70px]'>
        <img src={z} alt="" />
        <img src={z1} alt="" />
        <img src={z2} alt="" />
        <img src={z3} alt="" />
        <img src={z4} alt="" />
      </div>
      <div>
        <div className='items-center justify-between flex'>
          <img src={arrowl} alt='' className='ml-[70px]'/>
          <img src={short} alt=''/>
          <img src={arrowR} alt=''/>
          <img src={dora} alt='' className='w-1/2'/>
        </div>
        <div>
          <button className='bg-black text-white absolute rounded-[8px] font-bold w-36 h-14 ml-[805px] mt-[-90px]'>Shop Shirts</button>
        </div>
        <div className='text-[20px] font-bold'>
          <div className='px-80 mt-[-170px]'>
            <p>Basic Shirt</p>
          </div>
          <div className='ml-[349px] mt-5'>
            <p>€49</p>
          </div>
        </div>
      </div>
      <div className='bg-white w-full h-[44px] mt-28'></div>
      <div>
        <div className='gray w-[596px] h-[636px] rounded-md ml-[140px]'>
          <div>
            <img src={m} alt=''/>
          </div>
        </div>
        <div className='color ml-[780px] mt-[-636px] w-[596px] h-[636px] rounded-md'>
          <div className='font-bold w-[496px] h-[278px] text-[40px] ml-[60px] py-[60px]'>
            “ First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase. “
          </div>
          <div className='font-bold w-[496px] h-[278px] text-[20px] ml-[60px] py-[280px]'>
          — Guera Latissa, Creative Director
          </div>
        </div>
        <button className='bg-black text-white absolute rounded-[8px] font-bold w-36 h-14 ml-44 mt-[-90px]'>Shop Sweaters</button>
      </div>
      <div className='bg-white w-full h-[44px] mt-20'></div>
      <div>
        <div className='flex justify-center'>
          <img src={wm} alt='' className='rounded-l-lg'></img>
          <img src={mm} alt='' className='rounded-r-lg'></img>
        </div>
        <div className='font-bold text-[12px] -mt-12 ml-48'>
          <p>WOMEN</p>
        </div>
        <img src={arrrR} className='-mt-5 ml-[245px]'/>
        <div className='font-bold text-[12px] -mt-[18px] ml-[800px]'>
          <p>MEN</p>
        </div>
        <div>
        <img src={arrrR} className='-mt-5 ml-[835px]'/>
        </div>
      </div>
      <div className='bg-white w-full h-[64px] mt-20'></div>
      <div>
        <p className='font-bold justify-center flex text-[40px]'>Hot off the press</p>
        <div className='border-2 rounded-xl ml-40 w-[1216px] h-[286px] flex justify-between'>
          <div className=' w-[405px] border-r-2 mb-6 mt-6'>
            <img src={bloom} className='py-4 px-10'/>
              <div className='w-[260px] h-[95px] px-10'>
                <p>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
              </div>
              <img src={link} className='mt-6 px-10'/>
          </div>
          <div className=' w-[405px] border-r-2 mb-6 mt-6'>
            <img src={forb} className='py-4 px-10'/>
              <div className='w-[260px] h-[95px] px-10'>
                <p>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
              </div>
              <img src={link} className='mt-6 px-10'/>
          </div>
          <div className='w-[405px]'>
            <img src={fast} className='py-10 px-10'/>
              <div className='w-[260px] h-[95px] px-10 mt-[-24px]'>
                <p>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
              </div>
              <img src={link} className='mt-6 px-10'/>
          </div>
        </div>
      </div>
      <div className='bg-white w-full h-[55px] mt-20'></div>
      <div>
        <div className='font-bold text-[40px] flex justify-center'>
          <p>Women — Must Haves</p>
        </div>
        <div className='bg-white w-full h-[10px] mt-10'></div>
        <div className='flex justify-between items-center'>
          <div>
            <img src={buttl}/>
          </div>
          <div>
            <img className='rounded-sm' src={one}/>
            <div className='flex mt-6 gap-[215px]'>
              <p>Basic Shirt</p>
              <p>€49</p>
            </div>
          </div>
          <div>
            <img className='rounded-sm' src={two}/>
            <div className='flex mt-6 gap-48'>
              <p>Beige Jumper</p>
              <p>€99</p>
            </div>
          </div>
          <div>
            <img className='rounded-sm' src={three}/>
            <div className='flex mt-6 gap-40'>
              <p>Signature Jacket</p>
              <p>€249</p>
            </div>
          </div>
          <div>
            <img className='rounded-sm' src={four}/>
            <div className='flex mt-6 gap-36'>
              <p>Navy Jumper</p>
              <p>€49</p>
            </div>
          </div>
          <div>
            <img src={buttr}/>
          </div>
        </div>
      </div>
      <div className='bg-white w-full h-[60px] mt-10'></div>
      <div>
        <div className='text-[40px] font-bold flex justify-center'>
          <p>We always have your back</p>
        </div>
      </div>
    </div>
  );
}
export default App;
