import React from 'react'

const Sidebar = () => {
  return (
    <div class='drawer  bg-base-200 drawer-mobile'>
      <div class='drawer-side w-16  fixed bg-base-100 h-screen'>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-2 m-0 overflow-y-auto bg-base-100 text-base-content'>
          <li>
            <a> 1</a>
          </li>
          <li>
            <a> 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

{
  /* <div class='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        <label for='my-drawer-2' class='btn btn-primary drawer-button lg:hidden'>
          Open drawer
        </label>
      </div>
      <div class='drawer-side'>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div> */
}
