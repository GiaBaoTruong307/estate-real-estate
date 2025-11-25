import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div
      className="mb-4 flex min-h-screen w-full items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-4 text-center text-white md:px-20 lg:px-32"
      >
        <h2 className="inline-block max-w-3xl pt-20 text-5xl font-semibold sm:text-6xl md:text-[82px]">
          Explore homes that fit your dreams
        </h2>
        <div className="mt-16 space-x-6">
          <a href="#Projects" className="rounded border border-white px-8 py-3">
            Projects
          </a>
          <a href="#Contact" className="rounded bg-blue-500 px-8 py-3">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
