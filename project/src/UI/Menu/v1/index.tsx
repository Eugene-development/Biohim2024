"use client";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Продукция", href: "/production" },
  { name: "Акции", href: "/actions" },
  { name: "Информация", href: "/information" },
  { name: "Контакты", href: "/contacts" },
];
export default function index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" absolute inset-x-0 z-50">
      <div
        className=" flex items-center justify-between p-6 lg:px-16 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Компания Биохим</span>
            <img
              className="h-6 sm:h-20 w-auto"
              src="https://storage.yandexcloud.net/brand-logo/biohim/logo/logo.svg"
              alt="логотип"
            />
          </Link>
            <div className="flex ml-4  sm:mt-4 font-display font-bold text-gray-50 text-lg sm:text-5xl">
              {" "}
              <p className="hidden xl:block">Компания&nbsp;</p> &#171;БИОХИМ&#187;
            </div>
            {/* <p className="px-1 py-1 text-gray-50 text-xs sm:text-sm">Перекись водорода</p> */}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          
          <div>
            <p className="ml-3 my-2 bp-1 text-lg text-lime-300">
              biohim.org@yandex.ru
            </p>
            <a
              href="tel:+79302765650"
              className="ml-3 mt-1 text-3xl font-semibold leading-6 text-white"
            >
              +7 (930) 276-56-50
            </a>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Открыть мобильное меню</span>
            <div className="flex">
              <span>Меню</span>
              <Bars3Icon className="ml-2 h-6 w-6" aria-hidden="true" />
            </div>
          </button>
        </div>
      </div>
      {/* --- */}

      <nav
        className="flex px-16 items-center justify-between py-2 lg:py-4 "
        // className="flex px-16 items-center justify-between py-2 lg:py-4 border-b border-indigo-300"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base  font-display leading-6 text-white transition ease-in-out hover:scale-125"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Компания Биохим</span>
              <img
                className="h-8 w-auto"
                src="https://storage.yandexcloud.net/brand-logo/biohim/logo/logo.svg"
                alt="логотип"
              />
            </Link>
            {/* <p className="ml-4 mt-4 font-display font-bold text-gray-50 text-5xl">
              {" "}
              Компания &#171;БИОХИМ&#187;
            </p> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="tel:+79302765650"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  +7 (930) 276-56-50
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
