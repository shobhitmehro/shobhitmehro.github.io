import React from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import projectsData from '../data/ProjectsData';

function ProjectsPage() {
    return (
        <div className="bg-stone-50 min-h-screen flex justify-center px-6 md:px-20">
            <div className="max-w-3xl w-full">
                <Header />
                <section className="mt-10">
                    <h1 className="text-3xl font-semibold text-gray-800">
                        Projects
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Here are some of my projects.
                    </p>
                </section>

                <section className="mt-12">
                    <div>
                        {projectsData.map((project, index) => (
                            <div className="mt-4">
                                <PostCard title={project.name} description={project.description} paragraph={project.paragraph} github={project.github}/>
                            </div>
                        ))}
                    </div>
                </section>

                
            </div>
        </div>
    );
}

export default ProjectsPage;
