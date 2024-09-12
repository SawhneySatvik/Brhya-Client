'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import {
  TruckIcon,
  ClipboardDocumentIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  // PlayCircleIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Transporting Services',
    description: 'Efficient logistics for air, sea, road, and project cargo.',
    href: 'Services',
    icon: TruckIcon,
  },
  {
    name: 'Clearance Services',
    description: 'Seamless customs, compliance, and port management.',
    href: 'Services',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Supply Chain Services',
    description: 'Streamlined procurement and optimized supply chains.',
    href: 'Services',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Consulting Services',
    description: 'Expert advisory for logistics and sustainability.',
    href: 'Services',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Specialized Services',
    description: 'Turnkey, hazardous, and heavy equipment logistics.',
    href: 'Services',
    icon: GlobeAltIcon,
  },
];

// const callsToAction = [
//   {
//     name: 'Explore All The Services',
//     href: '#',
//     icon: PlayCircleIcon,
//   },
// ];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-white to-yellow-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex items-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
            <Image
              alt="Bryha Logistics Logo"
              src="/assets/clean_bryha_logo.png"
              width={24}
              height={24}
            />
            <span className="text-lg font-semibold text-gray-800">Bryha Logistics</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/OurTeam" className="text-sm font-semibold text-gray-800">
            Our Team
          </Link>
          <Link href="/Company" className="text-sm font-semibold text-gray-800">
            Company
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-800">
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-800" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-400 group-hover:text-yellow-400" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-800">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/Contact" className="text-sm font-semibold text-gray-800">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <Image
                alt="Bryha Logistics Logo"
                src="/assets/clean_bryha_logo.png"
                width={24}
                height={24}
              />
              <span className="text-lg font-semibold text-gray-800">Bryha Logistics</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-800"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-800 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/OurTeam"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  href="/Company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company
                </Link>
                <Link
                  href="/Contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-800 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
