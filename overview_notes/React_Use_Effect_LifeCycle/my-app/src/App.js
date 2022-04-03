import React, { useState } from 'react'
import ClassComponent from './components/ClassComponent'
import UseEffectComp from './components/UseEffectComp'
import Users from './components/Users'
import UseStateComp from './components/UseStateComp'

function App() {
    // conditional rendering:
    const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div className="App">
      {/* <button onClick={() => setIsVisible(!isVisible)}>IsVisible</button>
      {isVisible && <ClassComponent />} */}

      {/* <UseStateComp /> */}

      {/* <button onClick={() => setIsVisible(!isVisible)}>IsVisible</button>
      {isVisible && <UseEffectComp />} */}

      <Users />
    </div>
  )
}

export default App
