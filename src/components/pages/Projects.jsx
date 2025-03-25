import './../css/Projects.css';
export default function Projects(props){
    return(
        <div className="projects-main">
          <center><h1>Projects</h1></center> 
          <div className="sub-projects-div">
          <div className="sub-projects">
              <div className="sub-projects-image">
                <a href="https://portfolio-tau-gold-33.vercel.app/" target='blank'><img src={props.profimg1} alt="Portfolio" /></a>
              </div>
              <div className="sub-projects-description">
                <div className="sub-projects-name">
                  <h3>My Portfolio</h3>
                </div>
                <div className="sub-projects-links">
                  <a href="https://github.com/nitish1728/Portfolio" target='blank'><img src={props.githubimg} alt="Github" /></a>
                  <a href="https://portfolio-tau-gold-33.vercel.app/" target='blank'><img src={props.linkimg} alt="Link" /></a>
                </div>
              </div>
              <div className="sub-projects-details">
                <div className="sub-projects-text">
                  <p>Single Page Responsive Portfolio Website using React JS.
                  Compatible with all mobile devices, with a beautiful and pleasant user interface</p>
                </div>
                <div className="sub-projects-technologies">
                  <a data-title="HTML" href="."><svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#e14e1d" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#ebebeb" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg></a>
                  <a data-title="CSS" href="."><svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277bd" rx="60"/><path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg></a>
                  <a data-title="JavaScript" href="."><svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f0db4f" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg></a>
                  <a data-title="React&nbsp;JS" href="."><svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"/><path stroke="#00d8ff" stroke-width="8.911" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.911" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.911" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clip-rule="evenodd"/></g></svg></a>
                </div>
              </div>
            </div>
            <div className="sub-projects">
              <div className="sub-projects-image">
                <a href="https://falvor-faith.vercel.app/" target='blank'><img src={props.profimg2} alt="Receipe Generator" /></a>
              </div>
              <div className="sub-projects-description">
                <div className="sub-projects-name">
                <h3>Receipe Generator</h3>
                </div>
                <div className="sub-projects-links">
                  <a href="https://github.com/nitish1728/FalvorFaith"><img src={props.githubimg} alt="Github" /></a>
                  <a href="https://falvor-faith.vercel.app/"><img src={props.linkimg} alt="Link" /></a>
                </div>
              </div>
              <div className="sub-projects-details">
                <div className="sub-projects-text"></div>
                <div className="sub-projects-technologies"></div>
              </div>
            </div>
            <div className="sub-projects">
              <div className="sub-projects-image"></div>
              <div className="sub-projects-description">
                <div className="sub-projects-name">
                  <h3>Contact Management System</h3>
                </div>
                <div className="sub-projects-links">
                  <a href="."><img src={props.githubimg} alt="Github" /></a>
                  <a href="."><img src={props.linkimg} alt="Link" /></a>
                </div>
              </div>
              <div className="sub-projects-details">
                <div className="sub-projects-text">
                </div>
                <div className="sub-projects-technologies"></div>
              </div>
            </div>
            <div className="sub-projects">
              <div className="sub-projects-image"></div>
              <div className="sub-projects-description">
                <div className="sub-projects-name">
                <h3>Interview Bot</h3>
                </div>
                <div className="sub-projects-links">
                  <a href="."><img src={props.githubimg} alt="Github" /></a>
                  <a href="."><img src={props.linkimg} alt="Link" /></a>
                </div>
              </div>
              <div className="sub-projects-details">
                <div className="sub-projects-text"></div>
                <div className="sub-projects-technologies"></div>
              </div>
            </div>
          </div> 
        </div>
    )
}