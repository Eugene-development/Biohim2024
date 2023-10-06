import Link from "next/link";

export default () => {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <img
          src="https://mos-522755.oml.ru/d/himiya.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className=" max-w-4xl px-3 sm:px-10 cm:px-12 py-32 sm:py-24 lg:pt-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-left">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              <span>Хотите узнать больше о нашей продукции? </span>
              <Link href="/information" className="font-semibold text-lime-500">
                <span className=" inset-0 ml-2 " aria-hidden="true" />
                Подробнее{" "}
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
          <div className="p-3 text-left bg-gray-950/30">
            <h1 className="text-3xl font-bold font-display tracking-tight text-white sm:text-6xl">
              Компания &#171;БИОХИМ&#187;
            </h1>
            <p className="max-w-2xl mt-6 text-base sm:text-lg leading-8 text-gray-50">
              Техническая и медицинская перекись водорода в канистрах 10л, 30л и
              в кубовых ёмкостях по оптовым ценам от заводов производителей с
              доставкой или самовывозом.
            </p>
            {/* <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="#"
                className="rounded-md bg-lime-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
              >
                Запросить цену
              </a>
            </div> */}
            								<div className=" py-12">
									<form
										
										className="sm:mx-auto sm:max-w-xl lg:mx-0"
									>
										<div className="my-3">
											<div className="relative mt-1">
												<button
													
													
													type="button"
													className="relative w-full cursor-default rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 sm:text-base text-gray-800"
													aria-haspopup="listbox"
													aria-expanded="true"
													aria-labelledby="listbox-label"
												>
													<span className="block truncate">Выберите марку перекиси</span>
													<span
														className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
													>
														
														<svg
															className="h-5 w-5 text-gray-800"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
																clip-rule="evenodd"
															/>
														</svg>
													</span>
												</button>

										
													<div  >
														<ul
															className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-2 border-cyan-500"
															
															role="listbox"
															aria-labelledby="listbox-label"
															aria-activedescendant="listbox-option-3"
														>
														
																
																<li
																	className="text-gray-900 hover:text-white hover:bg-cyan-600 relative cursor-default select-none py-2 pl-3 pr-9"
																	id="listbox-option-0"
																	role="option"
																>
																	<button
																		className="w-full text-left"
																		
																	>
																		<span className="font-normal block truncate">Желаемый объём</span>
																		<span
																			className="text-white absolute inset-y-0 right-0 flex items-center pr-4"
																		>
																		
																			<svg
																				className="h-5 w-5"
																				xmlns="http://www.w3.org/2000/svg"
																				viewBox="0 0 20 20"
																				fill="currentColor"
																				aria-hidden="true"
																			>
																				<path
																					fill-rule="evenodd"
																					d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																					clip-rule="evenodd"
																				/>
																			</svg>
																		</span>
																	</button>
																</li>
															
														</ul>
													</div>
												
											</div>
										</div>

										<div className="my-3">
											<label  className="sr-only">Желаемый объём</label>
											<input
												
												
												className="block w-full rounded-md border-0 px-4 py-2 text-base text-gray-900 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
												id="volume"
												placeholder="Желаемый объём"
												type="text"
											/>
										</div>

										<div className="my-3">
											<div className="relative mt-1">
												<button
													
													
													type="button"
													className="relative w-full cursor-default rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 sm:text-base text-gray-800"
													aria-haspopup="listbox"
													aria-expanded="true"
													aria-labelledby="listbox-label"
												>
													<span className="block truncate">Выберите тару</span>
													<span
														className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
													>
														
														<svg
															className="h-5 w-5 text-gray-800"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
																clip-rule="evenodd"
															/>
														</svg>
													</span>
												</button>

												
													<div >
														<ul
															className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-2 border-cyan-500"
															
															role="listbox"
															aria-labelledby="listbox-label"
															aria-activedescendant="listbox-option-3"
														>
															
																
																<li
																	className="text-gray-900 hover:text-white hover:bg-cyan-600 relative cursor-default select-none py-2 pl-3 pr-9"
																	id="listbox-option-0"
																	role="option"
																>
																	<button
																		className="w-full text-left"
																		
																	>
																		<span className="font-normal block truncate">Телефон</span>
																		<span
																			className="text-white absolute inset-y-0 right-0 flex items-center pr-4"
																		>
																			
																			<svg
																				className="h-5 w-5"
																				xmlns="http://www.w3.org/2000/svg"
																				viewBox="0 0 20 20"
																				fill="currentColor"
																				aria-hidden="true"
																			>
																				<path
																					fill-rule="evenodd"
																					d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																					clip-rule="evenodd"
																				/>
																			</svg>
																		</span>
																	</button>
																</li>
															
														</ul>
													</div>
												
											</div>
										</div>

										<div className="my-3">
											<label htmlFor="phone" className="sr-only">Телефон</label>
											<input
												
												
												className="block w-full rounded-md border-0 px-4 py-2 text-base text-gray-900 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
												id="phone"
												placeholder="Телефон (не обязательно)"
												type="text"
											/>
										</div>

										<div className="sm:flex">
											
												<div className="min-w-0 flex-1">
													<label htmlFor="email" className="sr-only">Почта</label>
													<input
														
														
														className="block w-full rounded-md border-0 px-4 py-2 text-base text-gray-900 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
														id="email"
														placeholder="Почта"
														type="email"
													/>
												</div>

												<div className="mt-3 sm:mt-0 sm:ml-3">
													<button
														className="block w-full rounded-md bg-gradient-to-br from-blue-500 to-green-600 py-2 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
														type="submit"
													>
														Отправить запрос на цену
													</button>
												</div>
										</div>
										<p className="mt-3 text-sm text-gray-300 sm:mt-4">
											Отправьте ваш запрос и получите актуальную цену на перекись водорода.
										</p>
									</form>
								</div>

          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
