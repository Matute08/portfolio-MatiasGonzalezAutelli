"use client";

import { technicalSkillsTools } from "@/data";

const TechnicalSkillsTools = () => {
    return (
        <div className="flex flex-wrap justify-center gap-1 md:gap-5">
            {technicalSkillsTools.map((skill, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center p-4"
                >
                    <div className="mb-2">{skill.icon}</div>
                    <p className="text-sm font-medium">{skill.title}</p>
                    <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={`w-2 h-2 rounded-full ${i < skill.number
                                        ? "bg-[var(--secondary)]"
                                        : "bg-gray-600"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechnicalSkillsTools;
