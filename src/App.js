import ThemeChanger from './ThemeChanger'
import { useState } from 'react'
import Sidebar from './Sidebar'

function App() {
  const [theme, setTheme] = useState('dark')
  const handleTheme = (status) => {
    status ? setTheme('cupcake') : setTheme('dark')
  }
  return (
    <div data-theme={theme} className='h-screen w-screen bg-base-300'>
      <ThemeChanger handleThemeChange={handleTheme} />
      {/* <Sidebar /> */}
    </div>
  )
}

export default App
