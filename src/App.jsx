import './App.css'

import Header from './component/Header'
import Hero from './component/Hero'
import PlanList from './component/PlanList'
import TextSide from './component/TextSide'

function App () {
  return (
    <div className='App'>
      <Header visible={false} />
      <main>
        <Hero newClass='App-section' />
        <PlanList newClass='App-section' />
        <TextSide newClass='App-section' />
      </main>
    </div>
  )
}

export default App
