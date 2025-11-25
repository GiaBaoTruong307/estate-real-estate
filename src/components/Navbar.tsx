import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <div className="absolute left-0 top-0 z-10 w-full">
      <div className="container mx-auto flex items-center justify-between bg-transparent px-6 py-4 md:px-20 lg:px-32">
        <img src={assets.logo} alt="" />
        <ul className="hidden gap-7 text-white md:flex">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden rounded-full bg-white px-8 py-2 md:block">Sign Up</button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="w-7 cursor-pointer md:hidden"
          alt=""
        />
      </div>
      {/* ----------- mobile-menu */}
      <div
        className={`inset-y-0 right-0 overflow-hidden bg-white transition-all md:hidden ${showMobileMenu ? 'fixed w-full' : 'size-0'}`}
      >
        <div className="flex cursor-pointer justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="mt-5 flex flex-col items-center gap-2 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="inline-block rounded-full px-4 py-2"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="inline-block rounded-full px-4 py-2"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="inline-block rounded-full px-4 py-2"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="inline-block rounded-full px-4 py-2"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
