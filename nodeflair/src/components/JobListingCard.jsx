import React from 'react';
import CountrySVG from '../assets/CountrySVG.jsx'
import JobListingTechStack from './JobListingTechStack.jsx';

const JobListingCard = (props) => {

    const rowTechStack = () => {
        return props.techStack.map(
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
        <div className="job-listing-container" onClick={props.onClick}> 
            <div className={"job-listing card " + props.activeClass} id={props.selected ? 'selected' : ''}>
                <div className="job-listing-top-portion">
                    <div className="job-listing-top d-flex">
                        <div className="job-listing-img-container">
                            <img className="logo" src={props.logo} alt="Trust Wallet logo" />
                        </div>

                        <div className="job-listing-desc-container">
                            <p className="job-listing-para paragraph">
                                <span>{props.company}</span>
                                <span>{props.rating}&nbsp;★</span>
                            </p>

                            <h2 className="job-listing-title heading">
                                {props.jobTitle}
                            </h2>
                        </div>

                        <div className="job-listing-specialisation-container">
                            <div className="job-listing-specialisation-tag">
                                <span> {props.specialisation} </span>
                            </div>
                        </div>
                    </div>

                    <div className="job-listing-middle d-flex">
                        <div className="job-listing-recency-container">
                            <span>
                                about 3 hours ago
                            </span>
                        </div>

                        <div className="job-listing-country">
                            <CountrySVG />
                            <span> Singapore </span>
                        </div>
                    </div>
                </div>

                <div className="job-listing-bottom-portion">

                    <div className="job-listing-bottom d-flex">
                        {rowTechStack()}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default JobListingCard;