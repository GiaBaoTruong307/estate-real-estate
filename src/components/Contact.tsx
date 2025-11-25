import { useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (event: any) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', '30f1f81a-b37c-48c3-889c-786ce4ee8843')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('')
      toast.success('Form submitted successfully!')
      event.target.reset()
    } else {
      console.log('Error', data)
      toast.error(data.message)
      setResult('')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden p-6 py-20 text-center lg:px-32"
      id="Contact"
    >
      <h1 className="mb-2 text-center text-2xl font-bold sm:text-4xl">
        Contact{' '}
        <span className="under font-light underline decoration-1 underline-offset-4">With Us</span>
      </h1>
      <p className="mx-auto mb-12 max-w-80 text-center text-gray-500">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className="mx-auto max-w-2xl pt-8 text-gray-600">
        <div className="flex flex-wrap">
          <div className="w-full text-left md:w-1/2">
            Your Name
            <input
              className="mt-2 w-full rounded border border-gray-300 px-4 py-3"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full text-left md:w-1/2 md:pl-4">
            Your Email
            <input
              className="mt-2 w-full rounded border border-gray-300 px-4 py-3"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="mt-2 h-48 w-full resize-none rounded border border-gray-300 px-4 py-3"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="mb-10 rounded bg-blue-600 px-12 py-2 text-white">
          {result ? result : 'Send Message'}
        </button>
      </form>
    </motion.div>
  )
}

export default Contact
