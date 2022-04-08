import './App.css'

import Header from './component/Header'
import Hero from './component/Hero'

function App () {
  return (
    <div className='App'>
      <Header visible={false} />
      <main>
        <Hero newClass='App-section' />
      </main>
    </div>
  )
}

export default App
