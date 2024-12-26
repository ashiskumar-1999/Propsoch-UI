import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div style={{padding:"20px", justifySelf:"center"}}>
      <Image src="/logo.png" width={111} height={30} alt="logo"/>
    </div>
  )
}

export default Logo