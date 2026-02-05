"use client";

import { technicalSkillsBack } from "@/data/client";

const TechnicalSkillsBack = () => {
    return (
        <div className="technical-skills">
            <ul className="skills-list list-none p-0">
                {technicalSkillsBack.map((skill, index) => (
                    <li
                        key={index}
                        className="skill-item flex items-center gap-4 mb-5"
                    >
                        <div className="icon text-xl">{skill.icon}</div>
                        <h3 className="name m-0 text-xl">{skill.title}</h3>
                        <div className="stars flex text-lg">
                            {Array.from({ length: skill.number }).map((_, starIndex) => (
                                <span key={starIndex} className="star">⭐</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechnicalSkillsBack;

