import { BrowserRouter, Route, Routes } from 'react-router-dom';
import google from '../assets/google.png';
import microphone from '../assets/microphone.png';
import lens from '../assets/lens.png';
import call from '../assets/unnamed.png';
import msg from '../assets/Message.png';
import chrome from '../assets/chrome.png';
import insta from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';
const Home = () => {
    return (
        <>   
            <div className='p-2 flex flex-col'>
                <div className='m-2 p-3 h-[290px]'>
                    <h1><span className='text-red-400'>1</span>9 <br/> 30</h1>
                    <p className='text-[12px] font-bold'>Sat , 18 Nov <br/> Fog 36°</p>
                </div>
                <div className='p-1 flex flex-row bg-[#242424] rounded-full'>
                    <img src={google} alt="" className='p-1 w-[24px]' />
                    <input type="search" className='px-2 py-1 bg-transparent outline-none w-[60%]'/>
                    <img src={microphone} alt="" className='p-1 w-[24px]' />
                    <img src={lens} alt="" className='p-1 w-[24px]' />
                </div>
                <div className='mt-5 p-1 flex flex-row rounded-full'>
                    <a href="#"><img src={call} alt="" className='p-1 w-[50px] rounded-full' /></a>
                    <a href="#"><img src={msg} alt="" className='p-1 w-[50px]' /></a>
                    <a href="#"><img src={chrome} alt="" className='p-1 w-[50px]' /></a>
                    <a href="#"><img src={insta} alt="" className='p-1 w-[50px] rounded-full' /></a>
                    <a href="#"><img src={whatsapp} alt="" className='p-1 w-[50px]' /></a>
                </div>
            </div>
        </>
    );
}
export default Home;