import React from 'react';
import CountrySVG from '../assets/CountrySVG.jsx'
import JobListingTechStack from './JobListingTechStack.jsx';

const JobListingCard = () => {
    return (
        <div className="job-listing-container">
            <div className="job-listing card">
                <div className="job-listing-top-portion">
                    <div className="job-listing-top d-flex">
                        <div className="job-listing-img-container">
                            <img className="logo" src="https://nodeflair.com/companies/14357.png" alt="Trust Wallet logo" />
                        </div>

                        <div className="job-listing-desc-container">
                            <p className="job-listing-para paragraph">
                                <span>Trust Wallet</span>
                                <span>2.3&nbsp;★</span>
                            </p>

                            <h2 className="job-listing-title heading">
                                Blockchain Engineer (C++ or GO or RUST)
                            </h2>
                        </div>

                        <div className="job-listing-specialisation-container">
                            <div className="job-listing-specialisation-tag">
                                <span> Blockchain </span>
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
                        <JobListingTechStack tech="C++"/>
                        <JobListingTechStack tech="Go"/>
                        <JobListingTechStack tech="Rust"/>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default JobListingCard;