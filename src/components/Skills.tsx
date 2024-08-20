import React from "react";
import JavaScript from "./icons/JavaScript";
import { Skill } from "./Skill";
import ReactIcon from "./icons/React"; 
import TypeScript from "./icons/TypeScript";
import TailwindCSS from "./icons/TailwindCSS";
import Vitejs from "./icons/Vite";
import Nodejs from "./icons/Node.js";
import Expressjs from "./icons/Express.js.js";
import MaterialUI from "./icons/MaterialUI.js";
import Zustand from "./icons/Zustand.js";
import Bootstrap from "./icons/Bootstrap.js";
import PHP from "./icons/PHP.js";
import Java from "./icons/Java.js";
import Android from "./icons/AndroidStudio.js";
import MySQL from "./icons/MySQL.js";
import JWT from "./icons/JWT.js";
import CSS from "./icons/CSS.js";
import Netlify from "./icons/Netlify";
import VisualStudioCode from "./icons/VisualStudioCode";
import Git from "./icons/Git.js";
import Github from "./icons/GitHub.js";

const Skills: React.FC = () => {
    return (
        <section className="z-40 max-w-[1320px] mb-20 mt-20 text-center mx-auto">
            <h2 className="mt-4 font-[Onest] text-4xl font-semibold text-gray-100 mb-8">
                Habilidades
            </h2>
            <ul className="flex flex-wrap justify-center gap-4 p-2 mb-8 list-none">
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
                    borderColor="rgba(0, 49, 89, 0.453)" 
                    hoverColor="rgba(0, 49, 89, 0.136)"
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
                    name="Material UI"
                    Icon={MaterialUI} 
                    borderColor="rgba(63, 81, 181, 0.453)" 
                    hoverColor="rgba(63, 81, 181, 0.136)"
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
                    name="Visual Studio Code"
                    Icon={VisualStudioCode} 
                    borderColor="rgba(0, 120, 215, 0.453)" 
                    hoverColor="rgba(0, 120, 215, 0.136)"
                />
                <Skill
                    name="Netlify"
                    Icon={Netlify} 
                    borderColor="rgba(32, 198, 183, 0.453)" 
                    hoverColor="rgba(32, 198, 183, 0.136)"
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
                    name="JSON Web Token"
                    Icon={JWT} 
                    borderColor="rgba(41, 153, 136, 0.453)" 
                    hoverColor="rgba(41, 153, 136, 0.136)"
                />
                <Skill
                    name="Android Studio"
                    Icon={Android} 
                    borderColor="rgba(164, 198, 57, 0.453)" 
                    hoverColor="rgba(164, 198, 57, 0.136)"
                />
                
            </ul>
        </section>
    );
};

export default Skills;
