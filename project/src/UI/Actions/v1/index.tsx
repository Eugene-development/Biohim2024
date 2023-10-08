import React from "react";

export default () => {
  return (
    <section className="bg-[url('https://mos-522755.oml.ru/d/fon_2.png')]  py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 border-b border-gray-400 dark:border-gray-700">
          <h2 className="mb-4 text-4xl sm:text-6xl tracking-tight font-display font-extrabold text-gray-900 dark:text-white">
            Наши акции
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            Наши специальные акции, скидки и прочие выгодные предложения для
            взаимовыгодного сотрудничества
          </p>
        </div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl  dark:text-white">
              Каждая пятая канистра в подарок
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Приобретая 4 канистры 10л медицинской перекиси водорода пятую мы
              предоставляем в подарок
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Заказать по акции
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Узнать цену
            </a> */}
          </div>
          <div className="hidden lg:mt-0 ml-12 lg:col-span-5 lg:flex">
            <img
              src="https://chopveteran.ru/upload/iblock/11c/11c39cfc6f0c9f5d653efdc56ef5c8bf.png"
              alt="mockup"
            />
          </div>
        </div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl  dark:text-white">
              Доставка по московской области бесплатно
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              При условии приобретения 2 тонн продукции единовременно со 100 процентной предоплатой 
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Заказать по акции
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Узнать цену
            </a> */}
          </div>
          <div className="hidden lg:mt-0 ml-12 lg:col-span-5 lg:flex">
            <img
              src="https://chopveteran.ru/upload/iblock/11c/11c39cfc6f0c9f5d653efdc56ef5c8bf.png"
              alt="mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
