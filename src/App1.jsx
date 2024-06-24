import React from 'react'
import memeData from "./components/memeData"
import { Navbar } from './components/Navbar'
import { Meme } from './components/Meme'
import { Things } from "./components/Things"
import { Outing } from "./components/Outing"
import { Contacts }  from "./components/Contacts"
import { Counter } from "./components/Counter"
import { Johndoe } from "./components/Johndoe"
import { Apple } from "./components/Header"
import { Body } from "./components/Body"
import { Boxes } from './components/Boxes'
import { Jokee } from './components/Jokee'
import JokesData from './components/JokesData'
import { Messages } from './components/Messages'
import { Form } from './components/Form'
import { SignUpForm } from './components/SignUpForm'
import { StarWars } from './components/StarWars'
import { Window } from './components/Window'
import { Section } from './components/Section'
import Toggle from './components/Toggle'


function App() {
  // const [user, setUser] = React.useState("Bob")
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
     <>
     {/* <Header /> */}
     {/* <Apple /> */}
     {/* <div className="bg-gray-100 dark:bg-red-800 transition-colors duration-300">
      <div className='flex justify-end'>
      <Toggle />
      </div>
     <Section />
    </div> */}

      <div className='container'>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Section darkMode={darkMode}  />
      </div>

     {/* <Window /> */}
     {/* <StarWars /> */}
     {/* <SignUpForm /> */}
     {/* <Form /> */}
      {/* <Messages /> */}
     {/* </Jokee /> */}
    {/* // <Boxes darkMode = { false } /> */}
    {/* <Header user={user} />
    <Body user={user}/> */}
    {/* <Johndoe /> */}
    {/* <Counter /> */}
     {/* <Meme />  */}
    {/* <Contacts /> */}
    {/* <Outing /> */}
    {/* <Navbar />
    <Things />
    <Greet /> */}
    </>
  )
}

export default App
