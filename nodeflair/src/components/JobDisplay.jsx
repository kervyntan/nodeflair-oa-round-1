import React, { useEffect, useState } from 'react';
import JobListingCard from './JobListingCard';

const JobDisplay = () => {
    // Find out which is the one that's selected
    // OnClick -> it'll update which one is currently selected

    const [selected, setSelected] = useState()
    const [jobTitle, setJobTitle] = useState("")

    const jobData = [
        {
            link: "https://nodeflair.com/jobs/midas-teknologi-system-analyst-167801?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "https://nodeflair.com/companies/7769.png",
            company: "Midas Teknologi",
            rating: "5.0",
            specialisation: "Syst. Analyst",
            jobTitle: "System Analyst",
            recency: "less than a minute ago",
            country: "Indonesia",
            techStack: ["Apigee", "Swagger", "API", "Google Cloud", "Flow", "UML", "MSSQL"],
            activeClass: selected === 1 ? 'active' : '',
            alt: "Midas Teknologi"
        },
        {
            link: "https://nodeflair.com/jobs/msig-asia-data-engineer-167800?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "https://nodeflair.com/companies/1145.png",
            company: "MSIG Asia",
            rating: "3.1",
            specialisation: "Data Eng",
            jobTitle: "Data Engineer",
            recency: "4 minutes ago",
            country: "Indonesia",
            techStack: ["ETL", "SSIS"],
            activeClass: selected === 2 ? 'active' : '',
            alt: "MSIG Asia"
        },
        {
            link: "https://nodeflair.com/jobs/halodoc-product-manager-167799?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "https://nodeflair.com/companies/11019.png",
            company: "Halodoc",
            rating: "5.0",
            specialisation: "PM",
            jobTitle: "Product Manager",
            recency: "5 minutes ago",
            country: "Indonesia",
            techStack: ["Strategy"],
            activeClass: selected === 3 ? 'active' : '',
            alt: "Halodoc"
        },
        {
            link: "https://nodeflair.com/jobs/solve-education-foundation-middle-level-data-engineer-167794?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "https://nodeflair.com/companies/18258.png",
            company: "Solve Education! Foundation",
            rating: "5.0",
            specialisation: "Data Eng",
            jobTitle: "Middle-Level Data Engineer",
            recency: "5 minutes ago",
            country: "Indonesia",
            techStack: ["ETL", "SVN", "AWS", "Analytics", "Google Cloud", "BigQuery", "Apache", "Git", "Java", "Airflow", "NoSQL", "SQL"],
            activeClass: selected === 4 ? 'active' : '',
            alt: "Solve Education! Foundation"
        },
        {
            link: "https://nodeflair.com/jobs/julo-sr-data-scientist-167798?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "https://nodeflair.com/companies/8941.png",
            company: "JULO",
            rating: "5.0",
            specialisation: "Data Sci",
            jobTitle: "Sr Data Scientist",
            recency: "6 minutes ago",
            country: "Indonesia",
            techStack: ["SQL", "Python"],
            activeClass: selected === 5 ? 'active' : '',
            alt: "JULO"
        },
        {
            link: "https://nodeflair.com/jobs/accenture-devsecops-engineer-167797?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "https://nodeflair.com/companies/1029.png",
            company: "Accenture",
            rating: "4.1",
            specialisation: "DevOps",
            jobTitle: "DevSecOps Engineer",
            recency: "7 minutes ago",
            country: "Indonesia",
            techStack: ["Flux", "GitLab", "Terraform", "Jenkins", "Debian", "RHEL", "Ubuntu", "Chef", "Bamboo", "Azure"],
            activeClass: selected === 6 ? 'active' : '',
            alt: "Accenture"
        },
        {
            link: "https://nodeflair.com/jobs/dyson-senior-android-engineer-167997?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "https://nodeflair.com/companies/378.png",
            company: "Dyson",
            rating: "3",
            specialisation: "Android",
            jobTitle: "Senior Android Engineer",
            recency: "9 minutes ago",
            country: "Singapore",
            techStack: ["TDD", "CI", "Android"],
            activeClass: selected === 7 ? 'active' : '',
            alt: "Dyson"
        },
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

                <JobListingCard
                    data={jobData[6]}
                    onClick={() => {setSelected(7); setJobTitle(jobData[6].jobTitle)}}
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