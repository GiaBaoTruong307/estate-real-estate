import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900 px-4 pt-10 md:px-20 lg:px-32" id="Footer">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-8 w-full md:mb-0 md:w-1/3">
          <img src={assets.logo_dark} alt="" />
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium eos earum
            placeat similique odio enim consequatur, voluptate eaque qui doloremque, animi tempore
            ut cum iste expedita inventore. Mollitia, nesciunt?
          </p>
        </div>
        <div className="mb-8 w-full md:mb-0 md:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-white">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact us
            </a>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="mb-4 text-lg font-bold text-white">Subscribe to our newsletter</h3>
          <p className="mb-4 max-w-80 text-gray-400">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border border-gray-700 bg-gray-800 p-2 text-gray-400 focus:outline-none md:w-auto"
            />
            <button className="rounded bg-blue-500 px-4 py-2 text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 py-4 text-center text-gray-500">
        Copyright 2025 © GiaBaoTruong. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
