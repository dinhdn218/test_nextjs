import { NextPage } from 'Next'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const About: NextPage = ({ children }: Props) => {
  console.log(children)
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
