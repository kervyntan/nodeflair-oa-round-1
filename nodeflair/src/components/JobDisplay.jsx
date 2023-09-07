import React, { useEffect, useState } from 'react';
import JobListingCard from './JobListingCard';

const JobDisplay = () => {
    // Find out which is the one that's selected
    // OnClick -> it'll update which one is currently selected

    const [selected, setSelected] = useState()
    const [jobTitle, setJobTitle] = useState("")

    const jobData = [
        {
            logo: "https://nodeflair.com/companies/14357.png",
            company: "Trust Wallet",
            rating: "2.3",
            specialisation: "Blockchain",
            jobTitle: "Blockchain Engineer (C++ or GO or RUST)",
            recency: "about 3 hours ago",
            country: "Singapore",
            techStack: ["C++", "Go", "Rust"],
            activeClass: selected === 1 ? 'active' : ''
        },
        {
            logo: "https://nodeflair.com/companies/14357.png",
            company: "Trust Wallet",
            rating: "2.3",
            specialisation: "Blockchain",
            jobTitle: "Technical Engineer (Cloud)",
            recency: "about 3 hours ago",
            country: "Singapore",
            techStack: ["C++", "Go", "Rust", "REST API", "JavaScript", "Docker", "TypeScript", "TypeScript"],
            activeClass: selected === 2 ? 'active' : ''
        },
        {
            logo: "https://nodeflair.com/companies/14357.png",
            company: "Trust Wallet",
            rating: "2.3",
            specialisation: "Blockchain",
            jobTitle: "Blockchain Engineer (C++ or GO or RUST)",
            recency: "about 3 hours ago",
            country: "Singapore",
            techStack: ["C++", "Go", "Rust"],
            activeClass: selected === 3 ? 'active' : ''
        },
        {
            logo: "https://nodeflair.com/companies/14357.png",
            company: "Trust Wallet",
            rating: "2.3",
            specialisation: "Blockchain",
            jobTitle: "Blockchain Engineer (C++ or GO or RUST)",
            recency: "about 3 hours ago",
            country: "Singapore",
            techStack: ["C++", "Go", "Rust"],
            activeClass: selected === 4 ? 'active' : ''
        },
        {
            logo: "https://nodeflair.com/companies/14357.png",
            company: "Trust Wallet",
            rating: "2.3",
            specialisation: "Blockchain",
            jobTitle: "Blockchain Engineer (C++ or GO or RUST)",
            recency: "about 3 hours ago",
            country: "Singapore",
            techStack: ["C++", "Go", "Rust"],
            activeClass: selected === 5 ? 'active' : ''
        },
        {
            logo: "https://nodeflair.com/companies/14357.png",
            company: "Trust Wallet",
            rating: "2.3",
            specialisation: "Blockchain",
            jobTitle: "Blockchain Engineer (C++ or GO or RUST)",
            recency: "about 3 hours ago",
            country: "Singapore",
            techStack: ["C++", "Go", "Rust"],
            activeClass: selected === 6 ? 'active' : ''
        }
    ]

    return (

        <div className="jobs-display d-flex">
            <div className="jobs-display-left">
                <JobListingCard
                    data={jobData[0]}
                    onClick={() => {setSelected(1); setJobTitle(jobData[0].jobTitle)}} />

                <JobListingCard
                    data={jobData[1]}
                    onClick={() => {setSelected(2); setJobTitle(jobData[1].jobTitle)}}
                />

                <JobListingCard
                    data={jobData[2]}
                    onClick={() => {setSelected(3); setJobTitle(jobData[2].jobTitle)}}
                />

                <JobListingCard
                    data={jobData[3]}
                    onClick={() => {setSelected(4); setJobTitle(jobData[3].jobTitle)}}
                />

                <JobListingCard
                    data={jobData[4]}
                    onClick={() => {setSelected(5); setJobTitle(jobData[4].jobTitle)}} />

                <JobListingCard
                    data={jobData[5]}
                    onClick={() => {setSelected(6); setJobTitle(jobData[5].jobTitle)}}
                />
            </div>

            <div className="jobs-display-right">
                <h2 className="heading">
                    {jobTitle}
                </h2>
            </div>
        </div>
    )
}

export default JobDisplay;