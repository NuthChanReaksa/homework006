import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function HeaderComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand>
        <Link href="/">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://istad.co/resources/img/CSTAD_120.png"
              className="h-12"
              alt="cstad Logo"
            />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
              C S T A D
            </span>
          </a>
        </Link>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          HOME
        </NavbarLink>
        <NavbarLink>
          <Link href="/about">ABOUT</Link>
        </NavbarLink>
        <NavbarLink href="#">COURSE</NavbarLink>
        <NavbarLink href="#">ANNOUNCEMENT</NavbarLink>
        <NavbarLink href="#">ABOUT US</NavbarLink>
        <NavbarLink href="#">CONTACT US</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
