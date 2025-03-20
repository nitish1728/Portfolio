import '../css/Header.css'
export default function Header(props){
    return(
        <div id="Home" className="nav-main">
            <div className="nav-left">
                <div className="logo">
                    <h1>Nitish</h1>
                </div>
                
            </div>
            <div className={props.menu?"nav-right on":"nav-right"}>
                <a href="#Home">Home</a> 
                <a href="#About">About</a>
                <a href="#Experience">Experience</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
                <div className="menu-icon" onClick={props.change}>
                    <div className={props.menu?"bar1 on":"bar1"}></div>
                    <div className={props.menu?"bar2 on":"bar2"}></div>
                    <div className={props.menu?"bar3 on":"bar3"}></div>
                </div>
            </div>
        </div>
    )
}