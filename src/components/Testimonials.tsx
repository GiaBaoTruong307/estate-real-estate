import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto w-full overflow-hidden py-10 lg:px-32"
      id="Testimonials"
    >
      <h1 className="mb-2 text-center text-2xl font-bold sm:text-4xl">
        Customer{' '}
        <span className="under font-light underline decoration-1 underline-offset-4">
          Testimonials
        </span>
      </h1>
      <p className="mx-auto mb-12 max-w-80 text-center text-gray-500">
        Real Stories From Those Who Found Home With Us
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px] rounded border px-8 py-12 text-center shadow-lg"
          >
            <img
              className="mx-auto mb-4 size-20 rounded-full"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl font-medium text-gray-700">{testimonial.name}</h2>
            <p className="mb-4 text-sm text-gray-500">{testimonial.title}</p>
            <div className="mb-3 flex justify-center gap-1 text-red-500">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
