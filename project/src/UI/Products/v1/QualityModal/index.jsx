"use client";
import Image from "next/image";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

// import { useFormsStore } from "@/store/forms";
// const { visibleFormConsultation } = useFormsStore;

import { useQualityStore } from "@/store/quality";
const { visibleQualityModal } = useQualityStore;

// const qualityList = [
//   { number: 1, title: 'Внешний вид', norm: 'Бесцветная прозрачная жидкость', result: 'Соответствует' },
//   { number: 2, title: 'Массовая доля перекиси водорода, %', norm: '30-40', result: '37,0' },
//   { number: 3, title: 'Массовая концентрация серной кислоты, г/дм.куб, не более', norm: '0,30', result: '0,13' },
//   { number: 4, title: 'Массовая концентрация нелетучего остатка, г/дм, не более', norm: '0,6', result: '0,6' },
//   { number: 5, title: 'Содержание мышьяка', norm: 'Должна выдерживать испытания по п.3.6', result: 'Выдерживает испытания' },
// ]

export default () => {
  const cancelButtonRef = useRef(null);
  const {
    currentVisibleQualityModal,
    closeVisibleQualityModal,
    currentQuality,
  } = visibleQualityModal();

  return (
    <Transition.Root show={currentVisibleQualityModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={closeVisibleQualityModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-25"
          enterTo="opacity-75"
          leave="ease-in duration-200"
          leaveFrom="opacity-75"
          leaveTo="opacity-25"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-25 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo=" translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-75 translate-y-0 sm:scale-100"
              leaveTo="opacity-25 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
                {/* <div>
                  <div className="mx-auto flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-4 w-4 sm:h-5 sm:w-5 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  
                </div> */}
                <p className="text-2xl font-semibold leading-7 text-gray-600">
                  Показатели качества
                </p>

                <div className="mt-8 flow-root border-y">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr className="divide-x divide-gray-200">
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-1 text-left text-sm font-semibold text-gray-900 sm:pl-0 whitespace-nowrap"
                            >
                              № п/п
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Наименование показателя
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Норма
                            </th>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                            >
                              Результаты испытаний
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {currentQuality?.map((item) => (
                            <tr
                              key={item.title}
                              className="divide-x divide-gray-200"
                            >
                              <td className="whitespace-nowrap py-4 pl-4 pr-1 text-sm font-medium text-gray-900 sm:pl-0">
                                {item.number}
                              </td>
                              <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                {item.title}
                              </td>
                              <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                {item.norm}
                              </td>
                              <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                                {item.result}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-12">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    onClick={closeVisibleQualityModal}
                    ref={cancelButtonRef}
                  >
                    Закрыть
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
