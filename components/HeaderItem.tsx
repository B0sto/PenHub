import React from 'react'

const HeaderItem = ({text}: {text: string}) => {
  return (
    <li className='hover:text-cyan-400 transition-all duration-200 hover:drop-shadow-[0_0_5px_cyan] cursor-pointer'>
        {text}
    </li>
  )
}

export default HeaderItem