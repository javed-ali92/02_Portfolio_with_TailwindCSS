export default function Header() {
    return (
      <div className="flex justify-between items-center bg-[#464545] text-white p-5">
        <div className="text-3xl font-serif">Portfolio</div>
        <ul className="flex space-x-5">
          <li>
            <a href="/" className="font-serif hover:text-[#292928] transition duration-300">
            Home
            </a>
          </li>
          <li>
            <a href="/about" className="font-serif hover:text-[#292928] transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="/project" className="font-serif hover:text-[#292928] transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="font-serif hover:text-[#292928] transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }