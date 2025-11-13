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

/* Dark Mode Icons */
import GranTurismoLogoDark from './assets/dark-gran-turismo-logo.png'
import GitHubDark from './assets/dark-github.svg'
import InstagramDark from './assets/dark-instagram.svg'
import LinkedInDark from './assets/dark-linkedin.svg'
import ListDark from './assets/dark-list.svg'
import MusicDark from './assets/dark-music.svg'

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
        <div className="relative flex min-w-[25.5rem] w-full h-[57.3125rem] px-[1.5rem] py-[1.25rem] flex-col items-center gap-[0.9375rem] sm:w-[120rem] sm:h-[67.5rem] sm:py-[3.125rem] sm:px-[5rem] md:px-[7.5rem] sm:items-start sm:gap-[4.0625rem] shadow-lg overflow-auto [background-image:var(--light-background)] dark:[background-image:var(--dark-background)] z-0">
          <div className="hidden sm:block sm:absolute sm:top-[5.69rem] sm:flex-shrink-0 sm:self-stretch sm:h-[56.0625rem] sm:aspect-[1353.44/897.00] sm:bg-transparent sm:overflow-hidden sm:left-1/2 sm:-translate-x-1/2 sm:w-[84.58988rem] 2xl:left-auto 2xl:right-[3.29rem] 2xl:translate-x-0">
            {/* 
              Ícone de Gran Turismo — propriedade de Sony Interactive Entertainment.
              Uso não comercial e apenas ilustrativo neste projeto educacional.
            */}
            <img
              src={GranTurismoLogo}
              alt="Gran Turismo Logo"
              className="block dark:hidden filter saturate-[150%] brightness-[0.9] opacity-[0.3] relative z-0"
            />
            <img
              src={GranTurismoLogoDark}
              alt="Gran Turismo Logo (dark)"
              className="hidden dark:block filter saturate-[150%] brightness-[1.5] opacity-[1] relative z-0"
            />
          </div>
          <header className="flex justify-between items-center self-stretch w-full px-[0.625rem]">
            <div className="flex h-[1.875rem] justify-center items-end text-[var(--black,#000)] dark:text-[var(--gray200)] gap-[0.3125rem] sm:items-center sm:gap-[0.5625rem]">
              <p className="text-[1.125rem] sm:text-[1.5rem] font-bold leading-normal select-none text-center [font-family:'Inter']">
                GHK ☕
              </p>
              <p className="text-[0.9375rem] sm:text-[1.25rem] font-normal leading-normal select-none [font-family:'Inter']">
                | Made with
              </p>
              <LinkedImage href="https://react.dev" src={ReactIcon} alt="React logo" size="md" iconOnly ariaLabel="React" imgClassName="w-[1.5625rem] h-[1.5625rem] aspect-[1/1] sm:w-[1.875rem] sm:h-[1.875rem] flex-shrink-0" />
              <p className="text-[0.9375rem] sm:text-[1.25rem] font-normal leading-normal select-none [font-family:'Inter']">
                and
              </p>
              <LinkedImage href="https://vitejs.dev" src={ViteIcon} alt="Vite logo" size="md" iconOnly ariaLabel="Vite" imgClassName="w-[1.5625rem] h-[1.5625rem] aspect-[1/1] sm:w-[1.875rem] sm:h-[1.875rem] flex-shrink-0" />
            </div>
            <div className="hidden lg:flex items-center gap-[4.375rem]">
              <SwitchToggle label="dark mode" />
              <LinkedImage href="https://www.youtube.com/watch?v=5bWVrKMro_Q&t=321s" src={SongIcon} darkSrc={MusicDark} alt="Music logo" size="lg" iconOnly ariaLabel="Play music" />
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
                  className="block dark:hidden text-[var(--bluegrey300,#90A4AE)] dark:text-[var(--gray200,#EEEEEE)] w-[2.5rem] h-[2.5rem] aspect-[1/1] sm:w-[3.125rem] sm:h-[3.125rem] flex-shrink-0"
                />
                <img
                  src={ListDark}
                  alt="Menu (dark)"
                  className="hidden dark:block text-[var(--bluegrey300,#90A4AE)] dark:text-[var(--gray200,#EEEEEE)] w-[2.5rem] h-[2.5rem] aspect-[1/1] sm:w-[3.125rem] sm:h-[3.125rem] flex-shrink-0"
                />
              </button>
              {menuOpen && (
                <div id="mobile-menu" className="absolute right-0 mt-2 w-[15rem] bg-gray-50 dark:bg-neutral-800 rounded-lg border dark:border-gray-700 shadow-lg p-5 z-50 ">
                  <div className="flex flex-col items-center gap-4">
                    <SwitchToggle label="dark mode" variant="compact" />
                    <LinkedImage href="https://www.youtube.com/watch?v=5bWVrKMro_Q&t=321s" src={SongIcon} darkSrc={MusicDark} alt="Music logo" size="lg" iconOnly ariaLabel="Play music" />
                  </div>
                </div>
              )}
            </div>
          </header>

          <main className="flex-1 w-full rounded p-[0.625rem] flex flex-col items-center gap-[3rem] 2xl:flex-row 2xl:justify-between xl:items-start xl:gap-0 h-[49.8125rem] flex-shrink-0 self-stretch">
            <div className="flex flex-col items-center gap-[0.5rem] relative z-10 xl:items-start xl:text-left animate-fadeIn">
              <h1 className="[font-family:'Instrument Sans'] text-[4.0625rem] lg:text-[7rem] xl:text-[9.375rem] text-[var(--gray800,#353535)] dark:text-[var(--gray100,#F5F5F5)] font-bold leading-tight select-none text-center xl:text-left self-stretch">
                Car Culture
              </h1>
              <p className="w-full 2xl:w-[51.5rem] text-center xl:text-left text-[var(--black,#000)] dark:text-white [font-family:'Instrument Sans'] text-[2rem] sm:text-[2.8125rem] lg:text-[3.5rem] xl:text-[5rem] font-semibold leading-tight select-none self-stretch">
                More than passion for machines, it’s a <span className="text-sky-600 dark:text-[var(--blue300)]">lifestyle</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-[1.25rem] p-[0.625rem] mx-0 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:gap-[2rem] sm:mx-[5rem] sm:p-4 xl:py-[3.75rem] self-stretch relative z-20 bg-transparent sm:bg-white/50 sm:backdrop-blur-sm xl:bg-transparent xl:backdrop-blur-none rounded-lg 2xl:ml-0 2xl:flex-col xl:justify-end 2xl:items-end 2xl:flex-nowrap">
              <div className="flex flex-row 2xl:flex-col justify-center items-center gap-[2.5rem]">
                <LinkedImage href="https://github.com/gustavo-h-k-oliveira" src={GitHub} darkSrc={GitHubDark} alt="GitHub logo" size="lg" iconOnly ariaLabel="GitHub" />
                <LinkedImage href="https://instagram.com/gustavo.h.k.oliveira" src={Instagram} darkSrc={InstagramDark} alt="Instagram logo" size="lg" iconOnly ariaLabel="Instagram" />
                <LinkedImage href="https://linkedin.com/in/gustavo-oliveira-713583214" src={LinkedIn} darkSrc={LinkedInDark} alt="LinkedIn logo" size="lg" iconOnly ariaLabel="LinkedIn" />
              </div>
              <p className="text-[var(--red300,#E57373)] text-center xl:text-right [font-family:'Instrument Sans'] text-[1.5625rem] font-bold leading-tight select-none">2016 Ford GT<br /><span className='text-[1.3rem] font-normal'>24h Le Mans</span></p>
            </div>
              <div className="block sm:hidden">
              {/* 
                Ícone de Gran Turismo — propriedade de Sony Interactive Entertainment.
                Uso não comercial e apenas ilustrativo neste projeto educacional.
              */}
              <img
                src={GranTurismoLogo}
                alt="Gran Turismo Logo"
                className="block dark:hidden filter saturate-[150%] brightness-[0.9] opacity-[0.3] relative z-0"
              />
              <img
                src={GranTurismoLogoDark}
                alt="Gran Turismo Logo (dark)"
                className="hidden dark:block filter saturate-[150%] brightness-[1.5] opacity-[1] relative z-0"
              />
            </div>
          </main>
        </div>
      <div className="absolute top-[55rem] sm:top-[62.12rem] flex justify-between items-center px-[3rem] md:px-[7.5rem] w-full h-[5.375rem] [background-image:var(--light-footer)] dark:[background-image:var(--dark-footer)]">
        <p className='text-xs sm:text-sm text-gray-600 dark:text-[var(--gray400)] select-none'><strong>GHK</strong> 2025</p>
        <p className='text-[10px] sm:text-xs text-gray-500 dark:text-[var(--bluegrey300)] select-none text-right'><strong>Gran Turismo</strong> is a registered trademark of <strong>Sony Interactive Entertainment Inc.</strong></p>
      </div>
      <img
        src={Car}
        alt=""
        className="w-[23.25rem] sm:w-[69.625rem] sm:min-h-[14.8125rem] aspect-[1114/237] absolute top-[50.5rem] sm:top-[47.75rem] -translate-x-1/2 bg-[lightgray_0px_0px/_100%_135.341%_no-repeat] object-cover animate-slideInRight"
      />
    </div>
  )
}
