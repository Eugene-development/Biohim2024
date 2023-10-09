import Link from "next/link";
const productions = [
  {
    name: "Перекись водорода медицинская",
    description: "ГОСТ 177-88 с изм. №1",
    characteristics: [
      "Концентрация 30-40%",
      "Фасовка кубы 1000л, канистры 30л и канистры 10л",
      "В наличии",
    ],
    resume: "По вопросам приобретения обращайтесь к нашим менеджерам",
  },
  {
    name: "Перекись водорода марка А",
    description: "ТУ 2123-002-25665344-2008 с изм. № 1,2,3",
    characteristics: [
      "Концентрация 25-40%",
      "Фасовка кубы 1000л, канистры 30л и канистры 10л",
      "В наличии",
    ],
    resume: "По вопросам приобретения обращайтесь к нашим менеджерам",
  },
  {
    name: "Перекись водорода марка Б",
    description: "ТУ 2123-002-25665344-2008 с изм. № 1,2,3",
    characteristics: [
      "Концентрация 50-52%",
      "Фасовка кубы 1000л, канистры 30л и канистры 10л",
      "Наличие уточняйте",
    ],
    resume: "По вопросам приобретения обращайтесь к нашим менеджерам",
  },
  {
    name: "Перекись водорода марка В",
    description: "ТУ 2123-002-25665344-2008 с изм. № 1,2,3",
    characteristics: [
      "Концентрация 58-60%",
      "Фасовка кубы 1000л, канистры 30л и канистры 10л",
      "В наличии",
    ],
    resume: "По вопросам приобретения обращайтесь к нашим менеджерам",
  },
  {
    name: "Пероксид водорода асептический марка Пуроксид Асептик",
    description: "ТУ 2123-004-25665344-2009 с изм. № 1,2,3,4",
    characteristics: [
      "Концентрация 35-36%",
      "Фасовка в канистры 30л",
      "В наличии",
    ],
    resume: "По вопросам приобретения обращайтесь к нашим менеджерам",
  },
  {
    name: "Пероксид водорода асептический марка Пуроксид Асептик С",
    description: "ТУ 2123-004-25665344-2009 с изм. № 1,2,3,4",
    characteristics: [
      "Концентрация 35-36%",
      "Фасовка в канистры 30л",
      "В наличии",
    ],
    resume: "По вопросам приобретения обращайтесь к нашим менеджерам",
  },
  {
    name: "Пероксид водорода особой чистоты марка ОСЧ 33-4",
    description: "ТУ 2611-003-25665344-2008 с изм. № 1,2,3",
    characteristics: [
      "Концентрация 30-35%",
      "Фасовка в канистры 30л",
      "В наличии",
    ],
    resume: "По вопросам приобретения обращайтесь к нашим менеджерам",
  },
  {
    name: "Пероксид водорода особой чистоты марка ОСЧ 8-4",
    description: "ТУ 2611-003-25665344-2008 с изм. № 1,2,3",
    characteristics: [
      "Концентрация 30-35%",
      "Фасовка в канистры 30л",
      "В наличии",
    ],
    resume: "По вопросам приобретения обращайтесь к нашим менеджерам",
  },
];

export default () => {
  return (
    <section className="bg-[url('https://mos-522755.oml.ru/d/fon_2.png')] py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 border-b border-gray-400 dark:border-gray-700">
          <h2 className="mb-4 text-4xl sm:text-6xl tracking-tight font-display font-extrabold text-gray-900 dark:text-white">
            Продукция
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            Все партии отпускаемой продукции проходят лабораторные исследования
            на соответствие заявленному качеству
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                  {productions.map((item) => (
          <div
            key={item.name}
            className=" py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-12 lg:px-6 border-b "
          >
            <div className="items-center">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  {item.name}
                </h2>
                <p className="mb-8 font-light lg:text-lg">{item.description}</p>
                <ul
                  role="list"
                  className=" my-7 space-y-5 dark:border-gray-700"
                >
                  {item.characteristics.map((character, index) => (
                    <li key={`item_${index}`} className="flex space-x-3 ">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-cyan-700 dark:text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        {character}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mb-8 font-light lg:text-lg">{item.resume}</p>
              </div>

              <button 
                
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-red-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Запросить оптовую цену
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
              </button>
              {/* <Link
                href="#"
                className="mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Применение
              </Link> */}
            </div>
            {/* <div className="hidden lg:block pl-36 not-italic">
            
              <img
                className="ml-24 h-96 w-auto"
                src="https://storage.yandexcloud.net/brand-logo/biohim/logo/logo.svg"
                alt="логотип"
              />
            
          </div> */}
          </div>
          
        ))}


        </div>
      </div>
    </section>
  );
};
