import { NextPage } from 'Next'
import Link from 'next/link'
import React from 'react'

const About: NextPage = () => {
  return (
    <div>
      <div className="about">about</div>
      <Link href="/">
        <a>Go to home page</a>
      </Link>
    </div>
  )
}

export default About
