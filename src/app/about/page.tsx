import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#F7F7F7] to-[#2D2D2D] p-5 text-center animate-fadeIn">
      <div className="border border-black [box-shadow:0px_0px_20px_black] animate-fadeInUp bg-black bg-opacity-25 rounded-lg text-black p-10 shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl mb-4 font-serif">About</h1>
        <p className="text-lg leading-relaxed text-white">
        Bachelor in Islamic Studies (Jamia tul Madina, 2004): A comprehensive degree program that provides in-depth knowledge of Islamic theology, history, and cultural practices, completed at Jamia tul Madina in 2004. It prepares graduates to engage with and contribute to discussions on Islamic principles and their application in contemporary society.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-white">
        Currently, I&apos;m expanding my knowledge in the fields of Artificial Intelligence, Web 3.0, and the Metaverse through ongoing studies at the Governor House in Karachi. My passion for technology and data drives me to continuously seek new learning opportunities, equipping me with the skills necessary to tackle complex challenges in the evolving digital landscape.
        </p>
      </div>
    </div>
  );
}