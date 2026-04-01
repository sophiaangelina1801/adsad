import { useState } from 'react'
import './App.css'
import logoGta from './assets/logo-gta.svg'
import { Joystick,Gamepad2,Dice6,} from 'lucide-react';

export default function App() {

  return (
    <>
      <main>
        <section>
          <img src={logoGta} alt="" />
        </section>

        <footer>
          <small>@2026 ag2cti.com</small>
          <div id="social">
            <div className="rs"><Joystick /></div>
            <div className="rs"> <Gamepad2/> </div>
            <div className="rs"><Dice6/></div>
          </div>
        </footer>
      </main>
    </>
  )
}
