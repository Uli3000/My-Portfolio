import React from 'react';

interface Tags {
    name: string;
    class: string;
    icon: React.ComponentType<{ className?: string }>;
}

interface TagsObject {
    [key: string]: Tags;
}

interface ProjectCardProps {
    tags: TagsObject;
    title: string;
    description: string;
    previewLink: string;
    codeLink: string;
    videoName: string;
}

function ProjectCard({ tags, title, description, previewLink, codeLink, videoName }: ProjectCardProps) {
    const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.play()
        e.currentTarget.classList.add('z-40')
    }

    const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.pause()
        e.currentTarget.classList.remove('z-40')
    }

    return (
        <div className='relative h-[28rem] w-72 lg:w-96 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <div className='inline-flex flex-col items-center justify-center w-full h-full px-3 py-1 text-sm font-medium rounded-xl bg-gray-950 text-gray-50 backdrop-blur-3xl'>
                <video
                    muted
                    loop
                    className="object-cover absolute top-0 h-[30%] lg:h-[44%] w-full overflow-hidden cursor-cell hover:scale-105 outline-none duration-300 gradient-transparent"
                    onMouseOver={handleOnMouseOver}
                    onMouseOut={handleOnMouseOut}
                >
                    <source src={`/${videoName}.webm`} type="video/webm" />
                </video>
                <div className="absolute top-0 h-[30%] lg:h-[44%] w-full bg-gradient-to-b from-transparent to-[#1d1c1c] pointer-events-none" />
                <div className="relative px-5 py-3 mt-[48%]">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                    <p className="mb-3 font-[Onest] text-gray-400 text-[14.5px] text-pretty">{description}</p>
                    <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
                        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                        <div className='inline-flex items-center justify-center w-full h-full px-3 py-1 text-xs font-medium rounded-full cursor-pointer bg-gray-950 text-gray-50 backdrop-blur-3xl'>
                            <a target="_blank" href={previewLink}>
                                Preview
                            </a>
                        </div>
                    </span>
                    <span className='relative inline-block overflow-hidden rounded-full p-[1px] ml-3'>
                        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                        <div className='inline-flex items-center justify-center w-full h-full px-3 py-1 text-xs font-medium rounded-full cursor-pointer bg-gray-950 text-gray-50 backdrop-blur-3xl'>
                            <a target="_blank" href={codeLink}>
                                Code
                            </a>
                        </div>
                    </span>
                </div>
                <hr className="w-full h-[1px] mb-2 bg-slate-700 border-none opacity-85" />
                <ul className="flex flex-wrap w-full lg:flex-nowrap gap-x-2 gap-y-2 lg:gap-y-0">
                    {Object.values(tags).map((tag, index) => (
                        <li key={index}>
                            <span
                                className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                            >
                                <tag.icon className="size-4" />
                                {tag.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;
