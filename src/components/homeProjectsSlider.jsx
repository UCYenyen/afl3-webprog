import { useEffect, useRef, useState } from 'react';

function HomeProjectsSlider() {
    const sliderRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollAmount = useRef(0);
    const animationRef = useRef(null);

    useEffect(() => {
        const container = sliderRef.current;
        if (!container) return;
        
        // Duplicate children for seamless infinite scroll
        const children = Array.from(container.children);
        children.forEach(child => {
            container.appendChild(child.cloneNode(true));
        });

        // Start the animation
        const loopScroll = () => {
            if (!isPaused) {
                scrollAmount.current += 0.25;
                if (scrollAmount.current >= container.scrollWidth / 2) {
                    scrollAmount.current = 0;
                }
                container.scrollLeft = scrollAmount.current;
            }
            animationRef.current = requestAnimationFrame(loopScroll);
        };
        
        animationRef.current = requestAnimationFrame(loopScroll);
        
        // Cleanup animation on unmount
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isPaused]);
    
    return (
        <>
            {/* <!-- PROJECTS --> */}
            <div id="projects" className="text-[#E9D7D7] text-4xl md:text-6xl xl:text-7xl font-bold text-start mt-20 lg:mt-40 px-4 md:px-16 xl:px-30 overflow-hidden">
                <h1 className="mb-8 text-center lg:text-start">PROJECTS</h1>
                <div className="relative">
                    {/* <!-- Fade left --> */}
                    <div className="pointer-events-none absolute -left-10 top-0 h-full w-24 md:w-34 z-10"
                        style={{background: "linear-gradient(to right, #090016 10%, transparent)"}}></div>
                    {/* <!-- Fade right --> */}
                    <div className="pointer-events-none absolute -right-10 top-0 h-full w-24 md:w-34 z-10"
                        style={{background: "linear-gradient(to left, #090016 10%, transparent)"}}></div>
                    {/* <!-- Cards: horizontally scrolling, infinite --> */}
                    <div 
                        ref={sliderRef}
                        className="infinite-scroll no-smooth-scroll relative flex overflow-x-auto no-scrollbar gap-6 md:gap-10 h-[16rem] md:h-[20rem]">
                        <div 
                            className="project-card relative"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}>
                            <img className="rounded-2xl object-cover min-w-[20rem] md:min-w-[28rem] h-full" src="/projects/Iseko/Screenshot (110).png" alt=""/>
                            <div className="project-overlay absolute inset-0 rounded-2xl flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black/60">
                                <a href="iseko.html" className="text-white text-xl font-bold underline">Read More</a>
                            </div>
                        </div>
                        
                        <div 
                            className="project-card relative"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}>
                            <img className="rounded-2xl object-cover min-w-[20rem] md:min-w-[28rem] h-full" src="/projects/DarkEvo/gameexample_1.png" alt=""/>
                            <div className="project-overlay absolute inset-0 rounded-2xl flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black/60">
                                <a href="beetleRun.html" className="text-white text-xl font-bold underline">Read More</a>
                            </div>
                        </div>
                        
                        <div 
                            className="project-card relative"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}>
                            <img className="rounded-2xl object-cover min-w-[20rem] md:min-w-[28rem] h-full" src="/projects/RPG Game/gameexample_3.png" alt=""/>
                            <div className="project-overlay absolute inset-0 rounded-2xl flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black/60">
                                <a href="#" className="text-white text-xl font-bold underline">Read More</a>
                            </div>
                        </div>
                        
                        <div 
                            className="project-card relative"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}>
                            <img className="rounded-2xl object-cover min-w-[20rem] md:min-w-[28rem] h-full" src="/projects/RhymeWithIt.png" alt=""/>
                            <div className="project-overlay absolute inset-0 rounded-2xl flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black/60">
                                <a href="#" className="text-white text-xl font-bold underline">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeProjectsSlider;