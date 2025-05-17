function homeHeroSection() {

    return (
        <>
            {/* <!-- DEKSTOP HERO SECTION --> */}
            <div class="squares-bg bg-[url('/elements/squares.svg')] bg-repeat-x absolute bg-center -z-10 h-[100vh] w-screen"></div>
            <div class="hero-section mt-6 md:mt-10 flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 xl:gap-50 px-4 md:px-16 xl:px-30 justify-between items-center">
                {/* <!-- LEFT SIDE --> */}
                <div class="space-y-2 w-full">
                    {/* <!-- Title --> */}
                    <div class="space-y-2 texts-left">
                        <h1 class="text-[#B28ED4] text-4xl md:text-6xl xl:text-7xl font-bold text-center lg:text-start">
                            CREATE GAMES 
                        </h1>
                        <h1 class="text-[#E9D7D7] text-4xl md:text-6xl xl:text-7xl font-bold text-center lg:text-start">
                            BRING YOUR
                        </h1>
                        <h1 class="text-[#B28ED4] text-4xl md:text-6xl xl:text-7xl font-bold text-center lg:text-start">
                            IDEAS TO LIFE
                        </h1>
                    </div>
                    <br />
                    {/* <!-- SUB TITLE --> */}
                    <div class="space-y-2 texts-left">
                        <h1 class="text-[#E9D7D7] text-xl md:text-3xl xl:text-4xl font-bold text-center lg:text-start">
                            Hi, my name is Bryan Fernando
                        </h1>
                        <h1 class="text-[#E9D7D7] text-xl md:text-3xl xl:text-4xl font-bold text-center lg:text-start">
                            I am a Ciputra University Student
                        </h1>
                        <h1 class="text-[#E9D7D7] text-xl md:text-3xl xl:text-4xl font-bold text-center lg:text-start">
                            I am also a Game Developer With
                        </h1>
                        <h1 class="text-[#E9D7D7] text-xl md:text-3xl xl:text-4xl font-bold text-center lg:text-start">
                            2.5 Years worth of Experience
                        </h1>
                    </div>
                    <br />
                    {/* <!-- SKILLSET --> */}
                    <div class="skillset flex justify-center gap-3 md:gap-5 lg:justify-start">
                        <img src="/elements/code.svg" class="w-16 md:w-20 xl:w-24" alt=""/>
                        <img src="/elements/unity.svg" class="w-16 md:w-20 xl:w-24" alt=""/>
                        <img src="/elements/java.svg" class="w-16 md:w-20 xl:w-24" alt=""/>
                        <img src="/elements/blender.svg" class="w-16 md:w-20 xl:w-24" alt=""/>
                    </div>
                </div>
                {/* <!-- RIGHT SIDE --> */}
                <div class="w-full flex justify-center items-center mt-8 lg:mt-0">
                    {/* <!-- card background --> */}
                    <div class="card relative hidden lg:flex z-0 h-[20rem] md:h-[26rem] xl:h-[30rem] w-[16rem] md:w-[20rem] xl:w-[25rem]">
                        <div class="absolute h-full w-full bg-[#7F60E5] rounded-3xl md:rounded-4xl rotate-[15deg]"></div>
                        <div class="overflow-hidden absolute rotate-0 h-full w-full bg-[#B28ED4] rounded-3xl md:rounded-4xl">
                            <img class="absolute left-2 md:left-5 -bottom-2 md:-bottom-5 w-[90%]" src="/bryan.svg" alt=""/>
                        </div>
                    </div>
                    <div class="relative -z-10 w-[20rem] md:w-[30rem] flex lg:hidden">
                        <img class="mb-[-9.5rem] md:mb-[-12.5rem]" src="/bryan_removedback6.png" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default homeHeroSection;