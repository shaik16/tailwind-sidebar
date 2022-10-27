import React, { useState } from 'react'
import { BsFillLightningFill, BsSunFill, BsPlus } from 'react-icons/bs'
import { FaFire, FaPoo, FaRegMoon } from 'react-icons/fa'

const ThemeChanger = ({ handleThemeChange }) => {
  const [dark, setDark] = useState(false)
  return (
    <div class='drawer'>
      <input id='my-drawer' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content'>
        <div class='navbar bg-base-100'>
          <div class='navbar-start'>
            <label for='my-drawer' tabindex='0' class='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h7' />
              </svg>
            </label>
          </div>
          <div class='navbar-center'>
            <a class='btn btn-ghost normal-case text-xl'>daisyUI</a>
          </div>
          <div class='navbar-end'>
            <button class='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
            <div className='flex bg-base-100'>
              <label className='btn btn-ghost btn-circle swap swap-rotate'>
                <input
                  type='checkbox'
                  checked={dark}
                  onChange={() => {
                    setDark(!dark)
                    handleThemeChange(!dark)
                  }}
                />

                <BsSunFill className='swap-on text-yellow-500 fill-current' size='16' />
                <FaRegMoon className='swap-off fill-current' size='16' />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class='drawer-side'>
        <label for='my-drawer' class='drawer-overlay'></label>
        <ul class='menu p-2  w-16 bg-base-100 text-base-content'>
          {/* <li>
            <span>1</span>
          </li>
          <li>
            <a>2</a>
          </li> */}
          <SideBarIcon icon={<FaFire size='28' />} text='Overview 🎛 ' />
          <SideBarIcon icon={<BsPlus size='28' />} text='Audio 🔈' />
          <SideBarIcon icon={<BsFillLightningFill size='28' />} text='Campaign' />
          <SideBarIcon icon={<FaPoo size='28' />} text='Insight' />
        </ul>
      </div>
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡   :ad' }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
  </div>
)

export default ThemeChanger
