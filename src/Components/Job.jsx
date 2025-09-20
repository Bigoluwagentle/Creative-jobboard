import Header from "./Header";
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'; 
import "./Job.css";

function Job(){
    const [jobs, setJobs] = useState([]); 
      const [loading, setLoading] = useState(true); 
      const [searchTerm, setSearchTerm] = useState("");
    
      useEffect(() => { 
        fetch('https://remoteok.com/api') 
          .then(res => res.json()) 
          .then(data => { 
            const jobPosts = data.slice(1);
            setJobs(jobPosts); 
            setLoading(false); 
            console.log(data);
          }) 
          .catch(err => { 
            console.error('Failed to fetch jobs:', err); 
            setLoading(false); 
          }); 
      }, []); 
    
      const filteredJobs = jobs.filter(job => {
        const lowerSearch = searchTerm.toLowerCase();
        return (
          job.position?.toLowerCase().includes(lowerSearch) ||
          job.company?.toLowerCase().includes(lowerSearch) ||
          job.tags?.some(tag => tag.toLowerCase().includes(lowerSearch))
        );
      });
    
      if (loading) return <p>Loading jobs...</p>; 
    return(
        <div id="job">
            <Header/>
            <input
                type="text"
                placeholder="Search by role, company, or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div id="container">
                <section id="aside">
                    <nav>
                        <div>
                            <span>Get A Head Start Now</span>
                            <p>Aid your search  by subscribing to get regular  updates on jobs tailored to yours skillset </p>
                            <nav>
                                <input type="email" id="email" placeholder="Enter Your Email" />
                                <button>Submit</button>
                            </nav>
                        </div>
                        <aside>
                            <h2>Filters</h2>
                            <h4>Schedules</h4>
                            <p><input type="checkbox" name="" id="" /> on-site</p>
                            <p><input type="checkbox" name="" id="" /> Remote</p>
                            <p><input type="checkbox" name="" id="" /> Hybrid</p>
                        </aside>
                        <aside>
                            <h4>Experience</h4>
                            <p><input type="checkbox" name="" id="" /> 0-1 year</p>
                            <p><input type="checkbox" name="" id="" /> 1-3 year</p>
                            <p><input type="checkbox" name="" id="" /> 3-6 years</p>
                            <p><input type="checkbox" name="" id="" /> 6-12 year</p>
                            <p><input type="checkbox" name="" id="" /> 12+ years</p>
                        </aside>
                    </nav>
                </section>
                <section id="main">
                    <nav>
                        <p>Home category</p>
                        <h4>Find your Dream Job</h4>
                        <div>
                            <h4>Reccomendations</h4>
                            <nav>
                                <li>Sort by date</li>
                                <p>Sorted by popularity</p>
                            </nav>
                        </div>
                        {/* <p>The green dot indicated a promoted job posted </p> */}
                    </nav>
                    <div className="container">
                        <section>
                            {filteredJobs.length > 0 ? (
                                    filteredJobs.map(job => ( 
                                    <motion.div className='dashboard' key={job.id}
                                        initial={{opacity:0, y:100}}
                                        whileInView={{opacity:1, y:0}}
                                        transition={{duration:1, delay:0.5}}
                                    > 
                                    <h3>{job.position}</h3> 
                                    <p>{job.company}</p> 
                                    <li style={{listStyleType: "none"}}>{job.date}</li>
                                    
                                    <h4>{job.location}</h4>
                                    <h4>${job.salary_min} <i className="fa-solid fa-arrow-right"></i> ${job.salary_max}</h4>
                                    <div id="skill">
                                    {job.tags?.slice(0, 5).map((tag, i) => (
                                        <button key={i}>{tag}</button>
                                    ))}
                                    </div>

                                    <button id='view' onClick={() => {
                                    const a = document.createElement("a");
                                    a.href = job.url;
                                    a.target = "_blank";
                                    a.click();
                                    document.body.appendChild(a);
                                    document.body.removeChild(a);
                                    }}>
                                    View Job <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </motion.div> 
                                ))
                            ) : (
                                <p>No jobs found for "{searchTerm}"</p>
                            )}
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Job;