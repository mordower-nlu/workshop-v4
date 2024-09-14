import { useState } from 'react'
import nluLogo from './assets/svg/nlu-emblem.svg'
import './Styles/styles.css'
import './Styles/wysiwyg.css'
import './Styles/addition.css'
import './Styles/customstyles.css'
import { LSEventsPageTestView } from './Views/LSEventsPageTestView'
import { ZoomTestView } from './Views/ZoomTestView'

enum TestPageView {
  ZOOMBG,
  LSEVENTS
}


function App() {
  const [testPage, setTestPage] = useState(TestPageView.LSEVENTS);
  
 
  const renderedPage = ()=>{
    switch (testPage){
      case TestPageView.LSEVENTS:
        return <LSEventsPageTestView/>;
      case TestPageView.ZOOMBG:
      default:
        return <ZoomTestView/>;
    }
  }


  return (
    <>
      <div className='main'>
        <div>
            <img src={nluLogo} className="logo" alt="NLU logo" />
          
        </div>
        <h1>LS Event Automation App</h1>
      <p>
        <button onClick={()=>setTestPage(TestPageView.LSEVENTS)}>LS Events Page</button>
        <button onClick={()=>setTestPage(TestPageView.ZOOMBG)}>Zoom BG Page</button>
      </p>
        <div >
          {renderedPage()}
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
