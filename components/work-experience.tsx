"use client";

import { dataWorkExperience } from "@/data";
import { Briefcase } from "lucide-react";
import MotionTransition from "./transition-component";

const WorkExperience = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-gray-700">
            {dataWorkExperience.map((experience) => (
                <MotionTransition key={experience.id} position="bottom">
                    <div className="grid pb-8 md:grid-cols-4">
                        <div className="flex md:justify-end md:pr-8 mb-4 md:mb-0">
                            <div className="flex items-center gap-2 text-[var(--secondary)]">
                                <Briefcase size={20} />
                                <span className="text-sm font-medium">
                                    {experience.date}
                                </span>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <h3 className="text-xl font-bold mb-1">
                                {experience.title}
                            </h3>
                            <p className="text-[var(--secondary)] font-medium mb-3">
                                {experience.company}
                            </p>
                            <p className="text-gray-300 mb-4">
                                {experience.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium bg-gray-800 rounded-full border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </MotionTransition>
            ))}
        </div>
    );
};

export default WorkExperience;
