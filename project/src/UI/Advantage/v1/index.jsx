import React from "react";

export default function index() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-full lg:py-16 lg:px-20">
        <div className=" mb-8 lg:mb-16">
          <h2 className="mb-4 text-center text-3xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Наши преимущества
          </h2>
          <p className="font-light text-center text-gray-500 text-sm sm:text-xl dark:text-gray-400">
            Мы предлагаем перекись водорода, цена которой выгодно отличается от конкурентов.
          </p>
        </div>

        <img
          className="z-30 -mb-16 rounded-2xl h-96 w-full object-cover"
          src="https://mos-522755.oml.ru/d/55291990_2.jpg"
          alt="продукция"
        />

        <div className="px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative max-w-xl mx-auto z-40 p-8 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="mx-auto bg-lime-300 p-3 h-24 w-24 rounded-full flex items-center">
              
              <svg className="mx-auto h-12 w-12 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

              
            </div>
            <p className="my-2 p-2 text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Цены ниже по сравнению с нашими конкурентами
            </p>
          </div>
          <div className="relative max-w-xl mx-auto z-40 p-8 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="mx-auto bg-lime-300 p-3 h-24 w-24 rounded-full flex items-center">
              
              <svg className="mx-auto h-12 w-12 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

            </div>
            <p className="my-2 p-2 text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Доставка до объекта заказчика спецтранспортом
            </p>
          </div>
          <div className="relative max-w-xl mx-auto z-40 p-8 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="mx-auto bg-lime-300 p-3 h-24 w-24 rounded-full flex items-center">
             
              <svg className="mx-auto h-12 w-12 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>

            </div>
            <p className="my-2 p-2 text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Проверенная концентрация отпускаемой продукции
            </p>
          </div>
          <div className="relative max-w-xl mx-auto z-40 p-8 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="mx-auto bg-lime-300 p-3 h-24 w-24 rounded-full flex items-center">
              
              <svg className="mx-auto h-12 w-12 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

            </div>
            <p  className="my-2 p-2 text-center text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Периодические скидки и акции постоянным клиентам
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
