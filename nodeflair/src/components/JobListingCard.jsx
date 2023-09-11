import React from 'react';
import CountrySVG from '../assets/CountrySVG.jsx'
import JobListingTechStack from './JobListingTechStack.jsx';

const JobListingCard = (props) => {

    const details = props.data

    const rowTechStack = () => {
        return details.techStack.map(
            (tech, index) => {
                return (
                    <>
                        <JobListingTechStack key={index} tech={tech} />
                    </>
                )
            }
        )
    }

    return (
        <>
            <a href={details.link} className="job-listing-link" target="_blank">
            </a>
            <div className="job-listing-container" onClick={props.onClick}>
                <div className={"job-listing card " + details.activeClass}>
                    <div className="job-listing-top-portion">
                        <div className="job-listing-top d-flex">
                            <div className="job-listing-img-container">
                                <img className="logo" src={details.logo} alt={details.alt} />
                            </div>

                            <div className="job-listing-desc-container">
                                <p className="job-listing-para paragraph">
                                    <span>{details.company}</span>
                                    <span>{details.rating}&nbsp;★</span>
                                </p>

                                <h2 className="job-listing-title heading">
                                    {details.jobTitle}
                                </h2>
                            </div>

                            <div className="job-listing-specialisation-container">
                                <div className="job-listing-specialisation-tag">
                                    <span> {details.specialisation} </span>
                                </div>
                            </div>
                        </div>

                        <div className="job-listing-middle d-flex">
                            <div className="job-listing-recency-container">
                                <span>
                                    {details.recency}
                                </span>
                            </div>

                            <div className="job-listing-country">
                                <CountrySVG />
                                <span> {details.country} </span>
                            </div>
                        </div>
                    </div>

                    <div className="job-listing-bottom-portion">

                        <div className="job-listing-bottom">
                            {rowTechStack()}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default JobListingCard;