import './../css/Experience.css';
export default function Experience(props){
    return(
        <div className="experience-main">
            <center><h1>Experience</h1></center>
            <div className="sub-experience">
                <h1><img src={props.workimg} alt="Work" />Work Experience</h1>
                <nav>
                    <ul>
                        <li className='experience-details'>
                            <p>React JS Developer</p>
                            <div className="age-experience">
                                <p>BNP PARIBAS PRIVATE LIMITED | Chennai </p>
                                <p>JAN 2024 – PRESENT</p>
                            </div>
                            <div className="experience-description">
                                <ul>
                                    <li>Developed and maintained responsive web applications using React.js, enhancing 
                                    user engagement by 25%.</li>
                                    <li>Collaborated with designers and backend developers to implement dynamic and 
                                    interactive features. </li>
                                    <li>Optimized components for maximum performance across various devices and 
                                    browsers. </li>
                                    <li>Utilized Redux for state management, ensuring predictable application behaviour. </li>
                                </ul>
                            </div>
                        </li>
                        <li className='experience-details'>
                            <p>Application Production Support</p>
                            <div className="age-experience">
                                <p>BNP PARIBAS PRIVATE LIMITED | Chennai </p>
                                <p>FEB 2023 – JAN 2024</p>
                            </div>
                            <div className="experience-description">
                                <ul>
                                    <li>Monitored Application performance and reliability using Dynatrace, reducing incident 
                                    response time by 30%</li>
                                    <li>Resolved issues by addressing errors in multiple file imports by collaborating with 
                                    upstream, technical team and development teams to improve success rates and to 
                                    enhance data accuracy. </li>
                                    <li>Supported the migration of legacy systems to cloud, optimizing cost and 
                                    performance. </li>
                                    <li>Developed automation scripts using Bash to simplify daily BAU operations and 
                                    reduced manual effort. </li>
                                    <li>Collaborated with upstream and upstream development teams on branch-specific 
                                    data to design and implement a job for relaunching data for specific time periods, 
                                    ensuring data accuracy and integrity. </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="sub-experience">
                <h1><img src={props.educationimg} alt="education" />Education</h1>
                <nav>
                    <ul>
                        <li className='experience-details'>
                            <p>Bachelor of Technology</p>
                            <div className="age-experience">
                                <p>Amrita School of Engineering | Kerala </p>
                                <p>JULY 2019 – MAY 2023</p>
                            </div>
                            <div className="experience-description">
                                <ul>
                                    <li>Completed B.Tech in Computer Science and Engineering branch with Distinction with 
                                    an overall CGPA of 8.7 </li>
                                </ul>
                            </div>
                        </li>
                        <li className='experience-details'>
                            <p>Intermediate</p>
                            <div className="age-experience">
                                <p>Sri Chaitanya Junior College | Vishakapatnam </p>
                                <p>JULY 2017 – MAY 2019</p>
                            </div>
                            <div className="experience-description">
                                <ul>
                                    <li>Completed MPC with a CGPA of 9.63 </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}