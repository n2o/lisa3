import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { classNames } from "./utils";

const button = {
  base: "px-3 py-2 rounded-md text-sm font-medium transition",
  active: "text-primary dark:text-white",
  inactive:
    "dark:text-gray-300  text-gray-800 hover:underline dark:hover:text-white",
};

const navigation = [
  { name: "Start", href: "/", current: true },
  { name: "Über mich", href: "/ueber-mich", current: false },
  { name: "Leitbild", href: "/leitbild", current: false },
];

function Dropdown() {
  const items = [
    { name: "Einzelberatung", href: "/einzelberatung" },
    { name: "Paarberatung", href: "/paarberatung" },
    { name: "Familienberatung", href: "/familienberatung" },
    { name: "Teamberatung", href: "/teamberatung" },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={classNames(button.base, button.inactive, "inline-flex")}
      >
        Leistungsbeschreibungen
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => {
              return (
                <Menu.Item as="div" key={`dropdown-item-${item.name}`}>
                  <Link
                    href={item.href}
                    className="text-gray-700 block px-4 py-2"
                  >
                    {item.name}
                  </Link>
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Öffne Hauptmenü</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      width={30}
                      height={30}
                      alt="Systemische Beratung Freund"
                    />
                    <Image
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      width={30}
                      height={30}
                      alt="Systemische Beratung Freund"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? button.active : button.inactive,
                            button.base
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                    <Dropdown />
                    <ThemeSwitch className="block px-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? button.active : button.inactive,
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Dropdown />
              <ThemeSwitch className="block ms-3" buttonClass="m-3" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
