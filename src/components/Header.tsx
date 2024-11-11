import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#464545] text-white p-5">
      <div className="text-3xl font-serif mb-4 sm:mb-0">Portfolio</div>
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5">
        <li>
          <Link href="/" className="font-serif hover:text-[#292928] transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-serif hover:text-[#292928] transition duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/project" className="font-serif hover:text-[#292928] transition duration-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="font-serif hover:text-[#292928] transition duration-300">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
