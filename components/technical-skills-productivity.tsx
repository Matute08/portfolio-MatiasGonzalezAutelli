"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { technicalSkillsProductivity } from "@/data";

const TechnicalSkillsProductivity = () => {
    return (
    <div className="technical-skills">
        <ul className="skills-list list-none p-0">
            {technicalSkillsProductivity.map((skill, index) => (
                <li 
                    key={index} 
                    className="skill-item flex items-center gap-4 mb-5"
                >
                    <div className="icon text-xl">{skill.icon}</div> {/* Tailwind class for icon size */}
                    <h3 className="name m-0 text-xl">{skill.title}</h3> {/* Tailwind class for text size */}
                    <div className="stars flex text-lg"> {/* Tailwind class for star size */}
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

export default TechnicalSkillsProductivity;
