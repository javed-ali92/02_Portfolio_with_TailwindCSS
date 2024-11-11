import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-[90vh] p-5 bg-gradient-to-br from-[#F7F7F7] to-[#2D2D2D]">
      <div className="bg-gradient-to-br from-[#F7F7F7] to-[#2D2D2D] [box-shadow:0px_0px_20px_black] border border-black rounded-lg shadow-lg p-8 max-w-md w-full animate-fadeInUp">
        <h2 className="font-serif bg-[#676868] text-blaack p-2 rounded-md text-center mb-5 text-2xl">
          Get in Touch
        </h2>
        <form className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border border-gray-300 rounded-md resize-y"
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-serif bg-[#676868] text-black px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#363636]"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-around mt-5">
          <a
            href="https://github.com/javed-ali92"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <Image src="/github.png" alt="GitHub-pic" width={50} height={50} />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <Image src="/linkdin.png" alt="LinkedIn pic" width={50} height={50} />
          </a>
          <a
            href="mailto:javed.ali.1121974@gmail.com"
            className="link-item"
          >
            <Image src="/gmail.png" alt="Gmail image" width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
}