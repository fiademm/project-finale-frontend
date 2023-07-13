import React, { useState, useEffect } from 'react';

const JobListing = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      fetch('https://jobs.github.com/positions.json')
        .then(response => response.json())
        .then(data => setJobs(data));
    }, []);
  
    return (
      <div>
        <h1>Job Listings</h1>
        <ul>
          {jobs.map(job => (
            <li key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default JobListing;