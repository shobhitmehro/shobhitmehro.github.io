import React from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import Experience from '../components/Experience';
import { FaFileAlt, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
import resume from '../data/resume.pdf'


function HomePage() {

    return (
        <div className="bg-stone-50 min-h-screen flex  justify-center px-6 md:px-20">
            <div className="max-w-3xl w-full">
                <Header />

                <section className="mt-10">
                    <h1 className="text-3xl font-semibold text-gray-800">
                        Shobhit Mehrotra
                    </h1>
                    <p className="mt-4 text-gray-600">
                        I'm a student at the University of Massachusetts Amherst studying computer science.
                    </p>
                    <div className="flex space-x-4 pt-4">
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-transparent text-black px-4 py-2 rounded-md transition duration-200 border border-gray-300"
                        >
                            <FaFileAlt className="w-5 h-5" />
                            <span>Resume</span>
                        </a>
                        <a
                            href="mailto:shobhitmehro@umass.edu"
                            className="flex items-center space-x-2 bg-transparent text-black px-4 py-2 rounded-md transition duration-200 border border-gray-300"
                        >
                            <FaEnvelope className="w-5 h-5" />
                            <span>Contact Me</span>
                        </a>

                    </div>

                </section>

                <section className="mt-12">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
                    </div>
                    <div className="mt-4">
                        <Experience
                            title="Krastanov Lab"
                            role="Research and Software Development Engineer"
                            duration="October 2024 - Current"
                            description="quantum pathfinding in julia"
                        />
                        <div className='pt-4'></div>
                        <Experience
                            title="National Center for Technology and Dispute Resolution"
                            role="Software Engineer"
                            duration="February 2024 - Current"
                            description="mobile disaster relief app"
                        />
                        <div className='pt-4'></div>
                        <Experience
                            title="UMass Theory Group"
                            role="Software Engineer"
                            duration="June 2024 - August 2024"
                            description="complexity theory on linear separability"
                        />
                    </div>
                </section>


            </div>
        </div>
    );
}

export default HomePage;
