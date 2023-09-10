import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/images/amapayLogo.png"

const Logo = () => {
  return (
    <>
    <div>
        <Image src={logo} alt='logo' width={110} height={22}/>
    </div>
    </>
  )
}

export default Logo