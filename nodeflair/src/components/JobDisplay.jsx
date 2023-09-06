import React, { useEffect, useState } from 'react';
import JobListingCard from './JobListingCard';

const JobDisplay = () => {
    // Find out which is the one that's selected
    // OnClick -> it'll update which one is currently selected

    const [selected, setSelected] = useState()
    const [jobTitle, setJobTitle] = useState("")
    
    const refreshJobTitle = (index) => {
        switch(index) {
            case 1:
                setJobTitle("Blockchain Engineer (C++ or GO or RUST)")
                break
            case 2:
                setJobTitle("GovTech")
                break
            case 3:
                setJobTitle("Kite")
                break
            case 4:
                setJobTitle("Press")
                break
            case 5:
                setJobTitle("Optiver")
                break
            case 6:
                setJobTitle("Open Government Products")
                break
            default:
                break
        }
    }

    useEffect( () => {
        refreshJobTitle(selected)
    }, [selected])

    return (

        <div className="jobs-display d-flex">
            {/* SetJobTitle together with setSelected using onClick */}
            <div className="jobs-display-left">
                <JobListingCard logo="https://nodeflair.com/companies/14357.png" company="Trust Wallet" rating="2.3" specialisation="Blockchain" jobTitle="Blockchain Engineer (C++ or GO or RUST)" techStack={["C++", "Go", "Rust"]}
                    activeClass={selected === 1 ? 'active' : ''}
                    onClick={() => setSelected(1) } />

                <JobListingCard logo="https://nodeflair.com/companies/14357.png" company="Trust Wallet" rating="2.3" specialisation="Blockchain" jobTitle="Blockchain Engineer (C++ or GO or RUST)" techStack={["C++", "Go", "Rust"]}
                    activeClass={selected === 2 ? 'active' : ''}
                    onClick={() => setSelected(2)}
                />

                <JobListingCard logo="https://nodeflair.com/companies/14357.png" company="Trust Wallet" rating="2.3" specialisation="Blockchain" jobTitle="Blockchain Engineer (C++ or GO or RUST)" techStack={["C++", "Go", "Rust"]}
                    activeClass={selected === 3 ? 'active' : ''}
                    onClick={() => setSelected(3)}
                />

                <JobListingCard logo="https://nodeflair.com/companies/14357.png" company="Trust Wallet" rating="2.3" specialisation="Blockchain" jobTitle="Blockchain Engineer (C++ or GO or RUST)" techStack={["C++", "Go", "Rust"]}
                    activeClass={selected === 4 ? 'active' : ''}
                    onClick={() => setSelected(4)}
                />

                <JobListingCard logo="https://nodeflair.com/companies/14357.png" company="Trust Wallet" rating="2.3" specialisation="Blockchain" jobTitle="Blockchain Engineer (C++ or GO or RUST)" techStack={["C++", "Go", "Rust"]}
                    activeClass={selected === 5 ? 'active' : ''}
                    onClick={() => setSelected(5)} />

                <JobListingCard logo="https://nodeflair.com/companies/14357.png" company="Trust Wallet" rating="2.3" specialisation="Blockchain" jobTitle="Blockchain Engineer (C++ or GO or RUST)" techStack={["C++", "Go", "Rust"]}
                    activeClass={selected === 6 ? 'active' : ''}
                    onClick={() => setSelected(6)}
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