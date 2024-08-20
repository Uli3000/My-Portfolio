interface SkillProps {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    borderColor: string;
    hoverColor: string;
}

export const Skill: React.FC<SkillProps> = ({ name, Icon, borderColor, hoverColor }) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.style.backgroundColor = hoverColor
        e.currentTarget.classList.add('animation-custom')
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.036)'
        e.currentTarget.classList.remove('animation-custom')
    }

    return (
        <li
            className="relative flex flex-col items-center justify-center transition-all select-none w-28 h-28 rounded-xl backdrop-blur-lg gap-y-2"
            style={{ border: `2px solid ${borderColor}`, backgroundColor: 'rgba(255, 255, 255, 0.036)', transition: 'background-color 0.3s' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon width={"40%"} height={"40%"} />
            <p className="font-semibold text-white">{name}</p>
        </li>
    );
};