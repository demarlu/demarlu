import Image from "next/image";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-3 px-6">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="inline-flex ">
          <SlMenu size={28} />
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-12 font-semibold text-black-600">
        <Link href="/how-it-works">How it Works</Link>
        <Link href="/about-us">About us</Link>
      </nav>

      {/* Logo */}
      <div>
        <Link href="/">
          <Image src="/logo.png" width={70} height={70} alt="logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-12 font-semibold text-black-600">
        <Link href="/touring">Touring</Link>
        <Link href="/services">Services</Link>
      </nav>

      {/* Contact Button */}
      <div>
        
        <button className="  border-2 border-black-950  font-semibold text-black-600 rounded-lg  px-5 py-2 text-center mr-2 mb-2">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
