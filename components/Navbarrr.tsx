import { Navbar } from "flowbite-react";
import Image from "next/image";
import { ThemeSwitch } from "./ThemeSwitch";

export default function Navbarrr() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
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
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
        <Navbar.Link>
          <ThemeSwitch />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
