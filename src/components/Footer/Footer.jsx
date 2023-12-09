import React from 'react'
import { Link } from 'react-router-dom'
import {Logo} from '../index.js'

function Footer() {
  return (
    <section className="py-10 bg-gradient-to-r from-red to-light-blue border border-t-2 border-t-black">
    <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap -m-4">
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col h-full justify-between">
                    {/* Your logo component goes here */}
                    <div className="mb-4">
                        <Logo width="100px" />
                    </div>
                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/harsh-kumar-24318b207/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:text-gray-700"
                        >
                            <img src='./src/assets/linkedin.png'/>
                        </a>
                        <a
                            href="https://twitter.com/HarshUmpoxy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:text-gray-700"
                        >
                            <img src='./src/assets/twitter.jpg'/>
                        </a>
                        <a 
                            href="https://github.com/HarshUmpoxy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:text-gray-700"
                        >
                            <img src='./src/assets/github.png'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-2/3">
                {/* Message to connect */}
                <div className="text-black">
                    <p className="mb-4 font-bold text-lg">
                        Connect with me on social media for updates and collaboration!
                    </p>
                    <p className="text-base">
                        Feel free to reach out. Let's build something awesome together!
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>


  )
}

export default Footer;