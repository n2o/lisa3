import { Navbar } from "flowbite-react";
import Image from "next/image";
import { ThemeSwitch } from "./ThemeSwitch";

export default function Navbarrr() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <Image
          className="block h-8 w-auto pr-2"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          width={30}
          height={30}
          alt="Your Company"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Freund
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Start
        </Navbar.Link>
        <Navbar.Link href="/einzelberatung">Einzelberatung</Navbar.Link>
        <Navbar.Link href="/paarberatung">Paarberatung</Navbar.Link>
        <Navbar.Link href="/familienberatung">Familienberatung</Navbar.Link>
        <Navbar.Link href="/teamberatung">Teamberatung</Navbar.Link>
        <Navbar.Link href="/tiergestuetzte-arbeit">
          Tiergestützte Arbeit
        </Navbar.Link>
        <Navbar.Link href="/ueber-mich">Über mich</Navbar.Link>
        <Navbar.Link href="/leitbild">Leitbild</Navbar.Link>
        <Navbar.Link>
          <ThemeSwitch />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
