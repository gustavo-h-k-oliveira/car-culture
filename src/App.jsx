import React, { useState, useRef, useEffect } from 'react'
import LinkedImage from './components/LinkedImage'
import SwitchToggle from './components/SwitchToggle'
import ReactIcon from './assets/React.svg'
import ViteIcon from './assets/Vite.svg'
import SongIcon from './assets/Music.svg'
import List from './assets/List.svg'
import GranTurismoLogo from './assets/gran-turismo-logo.svg'
import GitHub from './assets/GitHub.svg'
import Instagram from './assets/Instagram.svg'
import LinkedIn from './assets/LinkedIn.svg'
import Car from './assets/FordGT.png'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
    }
    function handleKey(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])
  return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="relative flex w-[120rem] h-[67.5rem] py-[3.125rem] px-[5rem] md:px-[7.5rem] flex-col items-start gap-[4.0625rem] rounded shadow-lg overflow-auto bg-[linear-gradient(180deg,_#FFF_50%,_#999_100%)] z-0">
          <div className="absolute top-[5.69rem] w-[84.58988rem] h-[56.0625rem] flex-shrink-0 aspect-[1353.44/897.00] bg-transparent overflow-hidden left-1/2 -translate-x-1/2 2xl:left-auto 2xl:right-[3.29rem] 2xl:translate-x-0">
            <img
              src={GranTurismoLogo}
              alt="Gran Turismo Logo"
              className="block filter saturate-[150%] brightness-[0.9] opacity-[0.3] relative z-0"
            />
          </div>
          <header className="flex justify-between items-center self-stretch w-full">
            <div className="flex w-[20.625rem] h-[1.875rem] justify-center items-center gap-[0.5625rem]">
              <p className="text-[var(--black,#000)] text-[1.5rem] font-bold leading-normal">
                GHK ☕
              </p>
              <p className="text-[var(--black,#000)] text-[1.25rem] font-normal leading-normal">
                | Made with
              </p>
              <LinkedImage href="https://react.dev" src={ReactIcon} alt="React logo" size="md" iconOnly ariaLabel="React" />
              <p className="text-[1.25rem]">and</p>
              <LinkedImage href="https://vitejs.dev" src={ViteIcon} alt="Vite logo" size="md" iconOnly ariaLabel="Vite" />
            </div>
            <div className="hidden lg:flex items-center gap-[4.375rem]">
              <SwitchToggle label="dark mode" />
              <LinkedImage href="https://www.youtube.com/watch?v=5bWVrKMro_Q&t=321s" src={SongIcon} alt="Music logo" size="lg" iconOnly ariaLabel="Play music" />
            </div>
            <div className="relative lg:hidden" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(open => !open)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="flex items-center"
              >
                <img
                  src={List}
                  alt="Menu"
                  className="text-[var(--bluegrey300,#90A4AE)] w-[3.125rem] h-[3.125rem] flex-shrink-0 aspect-[1/1]"
                />
              </button>
              {menuOpen && (
                <div id="mobile-menu" className="absolute right-0 mt-2 w-[15rem] bg-gray-50 rounded-lg border shadow-lg p-5 z-50 ">
                  <div className="flex flex-col items-center gap-4">
                    <SwitchToggle label="dark mode" variant="compact" />
                    <LinkedImage href="https://www.youtube.com/watch?v=5bWVrKMro_Q&t=321s" src={SongIcon} alt="Music logo" size="lg" iconOnly ariaLabel="Play music" />
                  </div>
                </div>
              )}
            </div>
          </header>

          <main className="flex-1 w-full rounded p-[0.625rem] flex flex-col items-center gap-[3rem] 2xl:flex-row 2xl:justify-between xl:items-start xl:gap-0 h-[49.8125rem] flex-shrink-0 self-stretch">
            <div className="flex flex-col items-center gap-[0.5rem] relative z-10 xl:items-start xl:text-left">
              <h1 className="[font-family:'Instrument Sans'] text-[9.375rem] text-[var(--gray800,#353535)] font-bold leading-none">
                Car Culture
              </h1>
              <p className="w-full 2xl:w-[51.5rem] text-center xl:text-left text-[var(--black,#000)] [font-family:'Instrument Sans'] text-[5rem] font-semibold leading-tight">
                More than passion for machines, it’s a <span className="text-sky-600">lifestyle</span>
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-[3.75rem] mx-[5rem] xl:py-[3.75rem] self-stretch relative z-20 bg-white/50 xl:bg-transparent backdrop-blur-sm xl:backdrop-blur-none rounded-lg p-4 2xl:ml-0 2xl:flex-col xl:justify-end 2xl:items-end 2xl:flex-nowrap">
              <LinkedImage href="https://github.com/gustavo-h-k-oliveira" src={GitHub} alt="GitHub logo" size="lg" iconOnly ariaLabel="GitHub" />
              <LinkedImage href="https://instagram.com/gustavo.h.k.oliveira" src={Instagram} alt="Instagram logo" size="lg" iconOnly ariaLabel="Instagram" />
              <LinkedImage href="https://linkedin.com/in/gustavo-oliveira-713583214" src={LinkedIn} alt="LinkedIn logo" size="lg" iconOnly ariaLabel="LinkedIn" />
              <p className="text-[var(--red300,#E57373)] text-right [font-family:'Instrument Sans'] text-[1.5625rem] font-bold leading-tight">2016 Ford GT<br /><span className='text-[1.3rem] font-normal'>24h Le Mans</span></p>
            </div>
          </main>
        </div>
      <div className="absolute left-0 top-[62.12rem] flex items-center px-[5rem] md:px-[7.5rem] w-full h-[5.375rem] bg-[linear-gradient(180deg,_#949494_1.0%,_#9E9E9E_15.01%,_#CECECE_60.56%,_#FFF_98.54%)]">
        <p className='text-sm text-gray-600'>© <strong>GHK</strong> 2025</p>
      </div>
      <img
        src={Car}
        alt="Carro esportivo"
        className="w-[69.625rem] xl:h-[30.9] 2xl:h-[14.8125rem] aspect-[1114/237] absolute left-1/2 -translate-x-1/2 top-[47.7rem] bg-[lightgray_0px_0px/_100%_135.341%_no-repeat] object-cover"
      />
    </div>
  )
}
