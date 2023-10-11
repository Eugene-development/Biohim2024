"use client";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { send } from "@/serverActions/sendFormConsultation";

export default () => {
  const { push } = useRouter();
  const { currentVisibleFormConsultation, closeVisibleFormConsultation } =
    visibleFormConsultation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [container, setContainer] = useState('');
  const [brand, setBrand] = useState('');

  const handleSendFormConsultation = (e) => {
    e.preventDefault();

    const data = { name, phone,  email, comment, container, brand };
    console.log(data);
    // send(data);

    setName("");
    setPhone("");
    setEmail("");
    setComment("");
    setContainer("");
    setBrand("");

    push("/spasibo");
  };
  return (
    <Transition.Root show={currentVisibleFormConsultation} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={closeVisibleFormConsultation}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-full opacity-0"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                  <form
                    onSubmit={handleSendFormConsultation}
                    className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-gray-800 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            Заявка на получение актуальной цены
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-gray-800 text-cyan-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => closeVisibleFormConsultation()}
                            >
                              <span className="sr-only">Закрыть панель</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-cyan-100">
                            Цена будет актуальна на день получения запроса в соответствии с текущим курсом.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-4 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Имя
                                <sup className="text-red-700 w-4 h-4">
                                  &#x2736;
                                </sup>
                              </label>
                              <div className="mt-2">
                                <input
                                  required
                                  onChange={(e) => setName(e.target.value)}
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Почта{" "}
                                <sup className="text-red-700 w-4 h-4">
                                  &#x2736;
                                </sup>
                              </label>
                              <div className="mt-2">
                                <input
                                  required
                                  onChange={(e) => setEmail(e.target.value)}
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Телефон{" "} (необязательно)
                                
                              </label>
                              <div className="mt-2">
                                <input
                                  
                                  onChange={(e) => setPhone(e.target.value)}
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Выберите марку
                              </label>
                              <div className="mt-2">
                                <select
                                  value={brand}
                                  onChange={(e) => setBrand(e.target.value)}
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >                                
                                  <option value="" disabled>-</option>
                                  <option value="Медицинская - 37%">Медицинская - 37%</option>
                                  <option value="Марка А - 37%">Марка А - 37%</option>
                                  <option value="Марка Б - 37%">Марка Б - 37%</option>
                                  <option value="Марка Б - 51%">Марка Б - 51%</option>
                                  <option value="Марка В - 60%">Марка В - 60%</option>
                                </select>
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Выберите тару
                              </label>
                              <div className="mt-2">
                                <select
                                  value={container}
                                  onChange={(e) => setContainer(e.target.value)}
                                  id="country"
                                  name="country"
                                  autoComplete="country-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                  <option value="" disabled>-</option>
                                  <option value="Канистра 10л">Канистра 10л</option>
                                  <option value="Канистра 30л">Канистра 30л</option>
                                  <option value="Еврокуб">Еврокуб</option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Ваш комментарий
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={(e) => setComment(e.target.value)}
                                  id="description"
                                  name="description"
                                  rows={4}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            {/* <fieldset>
                              <legend className="text-sm font-medium leading-6 text-gray-900">
                                У вас есть готовый проект?{" "}
                                <sup className="text-red-700 w-4 h-4">
                                  &#x2736;
                                </sup>
                              </legend>
                              <div className="mt-2 space-y-4">
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-6 items-center">
                                    <input
                                      onChange={(e) =>
                                        setProject(e.target.value)
                                      }
                                      id="privacy-public"
                                      name="project"
                                      value="да"
                                      checked={project === "да"}
                                      aria-describedby="privacy-public-description"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                                    />
                                  </div>
                                  <div className="pl-7 text-sm leading-6">
                                    <label
                                      htmlFor="privacy-public"
                                      className="font-medium text-gray-900"
                                    >
                                      Да
                                    </label>
                                  </div>
                                </div>

                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-6 items-center">
                                      <input
                                        onChange={(e) =>
                                          setProject(e.target.value)
                                        }
                                        id="privacy-private-to-project"
                                        name="project"
                                        value="нет"
                                        checked={project === "нет"}
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-600"
                                      />
                                    </div>
                                    <div className="pl-7 text-sm leading-6">
                                      <label
                                        htmlFor="privacy-private-to-project"
                                        className="font-medium text-gray-900"
                                      >
                                        Нет
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset> */}
                          </div>
                          <div className="pb-6 pt-4">
                            <div className="mt-4 flex text-sm">
                              <p className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                {/* <QuestionMarkCircleIcon
                                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                /> */}
                                <span className="ml-2">
                                  После отправки формы с Вами свяжется наш специалист.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-start px-4 py-4">
                      <button
                        onClick={() => closeVisibleFormConsultation()}
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Закрыть
                      </button>
                      {name && email && (
                        <button
                          onClick={() => closeVisibleFormConsultation()}
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                        >
                          Отправить
                        </button>
                      )}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
