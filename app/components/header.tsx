import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Button } from "./ui/button";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Features", href: "/#feature" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bounced, setBounced] = useState(false);
  const [hasBounced, setHasBounced] = useState(false); // Flag to track bounce

  useEffect(() => {
    const handleScroll = () => {
      // Trigger bounce only on first scroll down
      if (window.scrollY > 20 && !hasBounced) {
        setScrolled(true);
        setBounced(true);
        setHasBounced(true); // Set flag to true after first bounce

        setTimeout(() => {
          setBounced(false); // Reset bounce after 1 second
        }, 300);
      }

      // Reset state if scrolled back to the top
      if (window.scrollY <= 10) {
        setScrolled(false);
        setHasBounced(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBounced]); // Only run the effect again if `hasBounced` changes

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-transform duration-500",
        scrolled ? "bg-white dark:bg-black shadow-lg" : "bg-transparent",
        bounced ? "-translate-y-[25px]" : "translate-y-[0px]"
      )}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Checkout Page</span>
            <img alt="logo" src="cookie-logo.png" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-white lg:text-gray-900 dark:text-gray-200"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="text-sm/6 font-semibold bg-indigo-600 hover:bg-indigo-700 text-gray-200">
            <a
              href="/contact-us"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold"
            >
              Contact Us <span aria-hidden="true">&rarr;</span>
            </a>
          </Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="h-6 w-6 dark:text-white"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-200/50">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
