import './home.css'
import steamFrame from './assets/steamframe.png'

import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';


Aos.init();
function HomePage(){
    return (
            <div className='Page'>
                <header className='Intro'> The future of reality as you know it</header>
                <h1 data-aos="fade-up">Meet Project Reality</h1>

                <div data-aos="zoom-in" className="Vr-Image">
                    <img src = {steamFrame} alt="vr"></img>
                </div>

                <div className='Cards'>
                     <div data-aos="fade-right" className='Title-Card Title-Card--left'>
                        <p className='Pop-Text'>4128 x 4128 pixels per eye.</p>
                        <p className='Pop-Text'>Micro OLED display</p>
                        <p className='Pop-Text'>Ultra thin Pancake Lenses</p>
                    </div>

                    <div data-aos="fade-left" className='Title-Card Title-Card--right'>
                        <p className='Pop-Text'>Carbon fiber construction</p>
                        <p className='Pop-Text'>13 hours of battery life</p>
                        <p className='Pop-Text'>Full degree IPD adjustment</p>
                    </div>
                </div>
               <div className='More-Info'>
                    <div>
                        <h1>About our project</h1>
                    </div>

                    <div className='Column-Container'>

                        <div className='About-Column'>
                            <p className='Pop-Text'>We take it in our power to improve the vr market no matter the size of the task.</p>
                        </div>
                        <div className='About-Column Column-Center'>
                            <p className='Pop-Text'>We spent 2981 days developing our finalized version of "Project Reality"</p>
                        </div>

                        <div className='About-Column Column-Right'>
                            <p className='Pop-Text'>Ultra realisitc streaming device with a powerful solution</p>
                        </div>

                    </div>
                    
                    <div className='about-text'>
                        <p>Project Reality represents our ambition to push immersion far beyond conventional VR. Built around hyper-responsive tracking, lifelike visual fidelity, and an adaptive sensory system, the PR headset is engineered to dissolve the barrier between the digital and the tangible. Every movement, every detail, and every interaction is crafted to feel instinctive and seamless, giving users a presence so convincing it redefines what “virtual” can be.</p>
                    </div>

                </div>
            </div>
            
    )

}

export default HomePage