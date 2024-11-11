import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#F7F7F7] to-[#2D2D2D] p-5">
      <div className="flex flex-col items-center text-center max-w-md w-full bg-gradient-to-br from-[#F7F7F7] to-[#2D2D2D] border border-black rounded-lg shadow-lg p-5 transition-shadow [box-shadow:0px_0px_20px_black] duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-1 animate-fadeInUp">
        <div className="mb-4 rounded-full overflow-hidden">
          <Image
            className="rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
            src="/01_javed_pic.png"
            alt="Profile-pic"
            width={300}
            height={300}
          />
        </div>

        <div className="font-serif">
          <h1 className="text-2xl text-black">Hi, I&apos;m Javed Ali</h1>
          <h2 className="text-xl text-[#2D2D2D] mb-2">Web Developer</h2>
          <p className="text-white text-base leading-relaxed">
            I&apos;m a passionate web developer and
            <br />
            Here, you can explore my expertise and creative projects.
          </p>
        </div>
      </div>
    </div>
  );
}