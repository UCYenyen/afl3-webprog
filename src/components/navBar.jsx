function navBar() {

  return (
    <nav class="h-[12vh] md:h-[16vh] xl:h-[20vh] w-screen px-16 xl:px-30 flex justify-between items-center text-[#E9D7D7] relative overflow-x-hidden">
          <a href="home.html" class="text-2xl md:text-3xl xl:text-4xl font-bold">BRYAN</a>
          {/* <!-- HAMBURGER NAVBAR --> */}
          <button id="hamburger-btn" class="hamburger relative w-10 h-10 flex xl:hidden items-center justify-center z-20 cursor-pointer">
              <span class="bar absolute left-0 top-2 w-10 h-1 bg-[#B28ED4] rounded transition-all duration-300"></span>
              <span class="bar absolute left-0 top-5 w-10 h-1 bg-[#B28ED4] rounded transition-all duration-300"></span>
              <span class="bar absolute left-0 top-8 w-10 h-1 bg-[#B28ED4] rounded transition-all duration-300"></span>
          </button>
          {/* <!-- NON HAMBURGER NAVBAR --> */}
          <ul class="hidden xl:flex gap-4 md:gap-8 xl:gap-10 font-semibold text-lg md:text-xl xl:text-2xl">
              <li><a href="projects.html" class="hover:text-[#B28ED4]">PROJECTS</a></li>
              <li><a href="certificates.html" class="hover:text-[#B28ED4]">CERTIFICATES</a></li>
              <li><a href="#experiences" class="hover:text-[#B28ED4]">EXPERIENCES</a></li>
          </ul>
          <a href="" class="hidden font-semibold xl:flex text-lg md:text-xl xl:text-2xl border-2 border-[#B28ED4] text-[#B28ED4] px-3 md:px-4 xl:px-5 py-1 md:py-2 hover:bg-[#B28ED4] hover:text-[#090016] transition duration-300 ease-in-out">CONTACT</a>
          {/* <!-- MOBILE NAV --> */}
          <ul id="mobile-nav" class="fixed top-0 left-0 w-full h-full bg-[#090016] bg-opacity-95 flex-col items-center justify-center gap-8 font-semibold text-2xl z-10 hidden xl:hidden transition-all duration-300">
              <li><a href="projects.html" class="block py-4 hover:text-[#B28ED4]" onclick="closeMobileNav()">PROJECTS</a></li>
              <li><a href="certificates.html" class="block py-4 hover:text-[#B28ED4]" onclick="closeMobileNav()">CERTIFICATES</a></li>
              <li><a href="#experiences" class="block py-4 hover:text-[#B28ED4]" onclick="closeMobileNav()">EXPERIENCES</a></li>
              <li><a href="" class="block border-2 border-[#B28ED4] text-[#B28ED4] px-5 py-2 hover:bg-[#B28ED4] hover:text-[#090016] transition">CONTACT</a></li>
          </ul>
      </nav>
  )
}

export default navBar
