import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto flex w-full flex-col items-center justify-center overflow-hidden p-14 md:px-20 lg:px-32"
      id="About"
    >
      <h1 className="mb-2 text-2xl font-bold sm:text-4xl">
        About{' '}
        <span className="under font-light underline decoration-1 underline-offset-4">
          Our Brand
        </span>
      </h1>
      <p className="mb-8 max-w-80 text-center text-gray-500">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col items-center md:flex-row md:items-start md:gap-20">
        <img src={assets.brand_img} alt="" className="w-full max-w-lg sm:w-1/2" />
        <div className="mt-10 flex flex-col items-center text-gray-600 md:items-start">
          <div className="grid w-full grid-cols-2 gap-6 md:gap-10 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam amet, autem deleniti
            molestias eveniet esse laborum architecto molestiae eligendi totam magnam excepturi
            alias inventore illo enim necessitatibus praesentium nobis iusto.
          </p>
          <button className="rounded bg-blue-600 px-8 py-2 text-white">Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
