import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

const navigation =[
  {name:''}
]
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
        <NavbarLink href="/page" active>
          HOME
        </NavbarLink>
        <NavbarLink>
          <Link href="/aboutUsPage/page">ABOUT</Link>
        </NavbarLink>
        <NavbarLink href="/coursePage/page">COURSE</NavbarLink>
        <NavbarLink href="/enrollPage/page">ENROLL</NavbarLink>
        <NavbarLink href="/iTNewPage/page">ITNEW</NavbarLink>
        <NavbarLink href="/jobOpportunity/page">JOBOPPORTUNITY</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
