import Image from "next/image";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="inline-flex ">
          <SlMenu size={28} />
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-12">
        <Link href="/how-it-works">How it Works</Link>
        <Link href="/about-us">About us</Link>
      </nav>

      {/* Logo */}
      <div>
        <Image src="/logo.png" width={70} height={70} alt="logo" />
      </div>

      {/* Contact Button */}
      <div>
        <button className="rounded-md px-2 outline-none ring-zinc-900 ring-offset-2 ring-2">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;

