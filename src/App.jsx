import Header from './components/pages/Header'
import Home from './components/pages/Home';
import About from './components/pages/About.jsx';
import Experience from './components/pages/Experience.jsx'
import Projects from './components/pages/Projects.jsx'
import {useState} from 'react'
import './components/css/App.css'

export default function App(){
    const [Headers,setHeaders] = useState(false)
    function change(){
        setHeaders(Headers=>!Headers)
    }
    return(
        <>
        <div className="main"  id='Home'>
            <Header change={change} menu={Headers} />
            <Home menu={Headers} image="../images/image.png"/>
        </div>
        <div className="About" id='About'>
            <About image="../images/nitishc.png" dynatrace= "../images/dynatrace.png" />
        </div>
        <div className="Experience" id='Experience'>
            <Experience workimg="../images/work.png" educationimg="../images/education.png"/>
        </div>
        <div className="Projects" id='Projects'>
            <Projects />
        </div>
        </>
    )
}