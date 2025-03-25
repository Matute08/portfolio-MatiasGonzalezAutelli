"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { softSkills } from "@/data";

const SoftSkills = () => {
    return (
    <div className="technical-skills flex justify-center">
        <ul className="skills-list text-3xl mb-30">
            {softSkills.map((skill, index) => (
                <li key={index} className="skill-item flex items-center justify-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {skill.title}
                </li>
            ))}
        </ul>
    </div>
    );
};

export default SoftSkills;
