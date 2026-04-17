import React from "react";
import JavaScript from "./icons/JavaScript";
import { Skill } from "./Skill";
import ReactIcon from "./icons/React"; 
import TypeScript from "./icons/TypeScript";
import TailwindCSS from "./icons/TailwindCSS";
import Vitejs from "./icons/Vite";
import Nodejs from "./icons/Node.js";
import Expressjs from "./icons/Express.js.js";
import Zustand from "./icons/Zustand.js";
import Bootstrap from "./icons/Bootstrap.js";
import PHP from "./icons/PHP.js";
import Java from "./icons/Java.js";
import Android from "./icons/AndroidStudio.js";
import MySQL from "./icons/MySQL.js";
import CSS from "./icons/CSS.js";
import Git from "./icons/Git.js";
import Github from "./icons/GitHub.js";
import MongoDB from "./icons/Mongo.js";
import C from "./icons/C.js";
import Nextjs from "./icons/NextJS.js";
import { Figma } from "./icons/Figma.js";

const Skills: React.FC = () => {
    return (
        <section className="z-40 max-w-[1320px] mb-6 mt-9 text-center mx-auto">
            <h2 className="mt-4 font-[Onest] text-4xl font-semibold text-gray-100 mb-8">
                Habilidades
            </h2>
            <ul className="flex flex-wrap justify-center gap-4 p-2 mb-2 list-none">
                <Skill
                    name="JavaScript"
                    Icon={JavaScript}
                    borderColor="rgba(206, 218, 92, 0.453)" 
                    hoverColor="rgba(206, 218, 92, 0.136)"
                />
                <Skill
                    name="React"
                    Icon={ReactIcon} 
                    borderColor="rgba(73, 146, 166, 0.453)" 
                    hoverColor="rgba(73, 146, 166, 0.136)"
                />
                <Skill
                    name="TypeScript"
                    Icon={TypeScript} 
                    borderColor="rgba(16, 86, 164, 0.453)" 
                    hoverColor="rgba(16, 86, 164, 0.136)"
                />
                <Skill
                    name="Vite"
                    Icon={Vitejs} 
                    borderColor="rgba(237, 213, 86, 0.453)" 
                    hoverColor="rgba(237, 213, 86, 0.136)"
                />
                <Skill
                    name="Tailwind CSS"
                    Icon={TailwindCSS} 
                    borderColor="rgba(0, 120, 215, 0.453)" 
                    hoverColor="rgba(0, 120, 215, 0.136)"
                />
                <Skill
                    name="Node.js"
                    Icon={Nodejs} 
                    borderColor="rgba(60, 135, 58, 0.453)" 
                    hoverColor="rgba(60, 135, 58, 0.136)"
                />
                <Skill
                    name="Express.js"
                    Icon={Expressjs} 
                    borderColor="rgba(51, 51, 51, 0.453)" 
                    hoverColor="rgba(51, 51, 51, 0.136)"
                />
                <Skill
                    name="Next"
                    Icon={Nextjs} 
                    borderColor="rgba(222, 222, 227, 0.453)" 
                    hoverColor="rgba(222, 222, 2271, 0.136)"
                />
                <Skill
                    name="Zustand"
                    Icon={Zustand} 
                    borderColor="rgba(87, 44, 61, 0.453)" 
                    hoverColor="rgba(87, 44, 61, 0.136)"
                />
                <Skill
                    name="Java"
                    Icon={Java} 
                    borderColor="rgba(250, 152, 32, 0.453)" 
                    hoverColor="rgba(250, 152, 32, 0.136)"
                />
                <Skill
                    name="CSS"
                    Icon={CSS} 
                    borderColor="rgba(38, 77, 228, 0.453)" 
                    hoverColor="rgba(38, 77, 228, 0.136)"
                />
                <Skill
                    name="Bootsrap"
                    Icon={Bootstrap} 
                    borderColor="rgba(86, 61, 124, 0.453)" 
                    hoverColor="rgba(86, 61, 124, 0.136)"
                />
                <Skill
                    name="PHP"
                    Icon={PHP} 
                    borderColor="rgba(86, 96, 139, 0.453)" 
                    hoverColor="rgba(86, 96, 139, 0.136)"
                />
                <Skill
                    name="MySQL"
                    Icon={MySQL} 
                    borderColor="rgba(0, 117, 143, 0.453)" 
                    hoverColor="rgba(0, 117, 143, 0.136)"
                />
                <Skill
                    name="C#"
                    Icon={C} 
                    borderColor="rgba(145, 121, 228, 0.453)" 
                    hoverColor="rgba(145, 121, 228, 0.136)"
                />
                <Skill
                    name="MongoDB"
                    Icon={MongoDB} 
                    borderColor="rgba(77, 179, 61, 0.453)" 
                    hoverColor="rgba(77, 179, 61, 0.136)"
                />
                <Skill
                    name="Git"
                    Icon={Git} 
                    borderColor="rgba(214, 79, 47, 0.453)" 
                    hoverColor="rgba(214, 79, 47, 0.136)"
                />
                <Skill
                    name="GitHub"
                    Icon={Github} 
                    borderColor="rgba(188, 188, 188, 0.453)" 
                    hoverColor="rgba(188, 188, 188, 0.136)"
                />
                <Skill
                    name="Figma"
                    Icon={Figma} 
                    borderColor="rgba(255, 114, 98, 0.453)" 
                    hoverColor="rgba(242, 78, 30, 0.136)"
                />
                <Skill
                    name="Android"
                    Icon={Android} 
                    borderColor="rgba(164, 198, 57, 0.453)" 
                    hoverColor="rgba(164, 198, 57, 0.136)"
                />
                
            </ul>
        </section>
    );
};

export default Skills;
