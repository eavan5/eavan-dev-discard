'use client'

import classNames from "classnames"
import React from "react"
import { FaTwitter, FaTelegramPlane, FaGithubAlt } from "react-icons/fa";

function Cover ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={classNames(className, "flex items-center justify-center bg-yellow-100")} {...props}>
      <div className="text-6xl font-bold text-white">
        Eavan
      </div>
    </div>
  )
}

function Introduction ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (

    <div className={classNames(className, "flex items-center justify-center  sm:px-8 lg:px-10")} {...props}>
      <div>
        <div className="border border-light-border dark:border-dark-border inline-block px-4 rounded-lg">Hi there,I'm Eavan 👋</div>
        <div className="text-lg sm:text-3xl lg:text-5xl  font-black text-text-100 mb-8 py-2">
          Development engineer,<br />
          Founder, and<br />
          Aspiring designer.
        </div>
        <div className="hidden md:block text-text-200">
          Welcome to my blog! Explore digital marketing, entrepreneurship, and design insights.
          Join me on this journey of knowledge, inspiration, and growth. Let's learn and grow together!
        </div>
        <div className="flex gap-4 py-6 px-2">
          <FaGithubAlt size={24} />
          <FaTelegramPlane size={24} />
          <FaTwitter size={24} />
        </div>
      </div>
    </div>

  )
}


export default function Headline () {
  return (
    <>
      <div className="flex h-80 sm:h-96 lg:h-[600px]">
        <Cover className="flex-none sm:w-80 lg:w-[500px] hidden sm:block" />
        <Introduction className="flex-initial w-full" />
      </div>
      <div className="border border-gray-100 my-4" />
    </>
  )
}