import Image from "next/image";

export default function Project() {
  return (
    <div className="bg-gradient-to-br from-[#F7F7F7] to-[#2D2D2D] p-5">
      <h1 className="text-center text-3xl font-serif mb-8 text-gray-800">My Projects</h1>
      <div className="flex justify-center flex-wrap">
        <div className="bg-[#3d3c3c] animate-fadeInUp [box-shadow:0px_0px_20px_black] border-2 border-gray-900 rounded-lg shadow-lg overflow-hidden p-5 mx-3 mb-5 transition-transform duration-300 transform hover:-translate-y-1 animate-fadeIn w-80 flex flex-col items-center">
          <Image
            src="/cv.PNG"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="rounded-lg mb-4 shadow-md"
          />
          <h3 className="font-serif text-xl text-black mb-2">Static Resume</h3>
          <p className="text-white text-sm leading-relaxed mb-4">
            An interactive resume built with TypeScript, HTML, and CSS, enabling users to dynamically showcase their skills.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300 hover:bg-blue-700">
            <a href="https://static-interactive-resume-builder-gamma.vercel.app//" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}