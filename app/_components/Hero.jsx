import React from 'react';
import { ThreeDCardDemo } from '../dashboard/_components/ThreeDCardDemo';
import Footer from './Footer';

function Hero() {
  return (
    <div>
    <section
      className="relative bg-[url(https://assets.bacancytechnology.com/main-boot-5/images/ai-generative/banner.jpg?v-1)] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            AI Course Generator
            <strong className="block font-extrabold text-primary">Learning Home. </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white text-xl">
            Unlock personalised education with Ai-driven course creation. Tailor you learning journey to fit your uniqur goals and pace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="/dashboard"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
    <div className=''>
      <Footer/>
    </div>
    </div>
  );
}

export default Hero;
