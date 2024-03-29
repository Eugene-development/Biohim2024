"use client";
import { useFormsStore } from "@/store/forms";
const { visibleFormConsultation } = useFormsStore;

import { useQualityStore } from "@/store/quality";
const { visibleQualityModal } = useQualityStore;

import QualityModal from "./QualityModal";

// norm: "х10 ⁻¹  ⁻²  ⁻³  ⁻⁴  ⁻⁵  ⁻⁶  ⁻⁷  ⁻⁸  ⁻⁹",

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
    qualityList: [
      {
        number: 1,
        title: "Внешний вид",
        norm: "Бесцветная прозрачная жидкость",
        result: "Соответствует",
      },
      {
        number: 2,
        title: "Массовая доля перекиси водорода, %",
        norm: "30,0-40,0",
        result: "37,0",
      },
      {
        number: 3,
        title: "Массовая концентрация серной кислоты, г/дм³, не более",
        norm: "0,30",
        result: "0,13",
      },
      {
        number: 4,
        title: "Массовая концентрация нелетучего остатка, г/дм³, не более",
        norm: "0,6",
        result: "0,6",
      },
      {
        number: 5,
        title: "Содержание мышьяка",
        norm: "Должна выдерживать испытания по п.3.6",
        result: "Выдерживает испытания",
      },
      
    ],
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
    qualityList: [
      {
        number: 1,
        title: "Внешний вид",
        norm: "Бесцветная прозрачная жидкость",
        result: "Соответствует",
      },
      {
        number: 2,
        title: "Массовая доля перекиси водорода, %",
        norm: "25,0-40,0",
        result: "37,0",
      },
      {
        number: 3,
        title: "Массовая концентрация свободных кислот (в пересчёте на серную кислоту), г/дм³, не более",
        norm: "0,25",
        result: "0,23",
      },
      {
        number: 4,
        title: "Массовая концентрация нелетучего остатка, г/дм³, не более",
        norm: "0,6",
        result: "0,5",
      },
    ]
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
    qualityList: [
      {
        number: 1,
        title: "Внешний вид",
        norm: "Бесцветная прозрачная жидкость",
        result: "Соответствует",
      },
      {
        number: 2,
        title: "Массовая доля перекиси водорода, %",
        norm: "50,0-52,0",
        result: "51,5",
      },
      {
        number: 3,
        title: "Массовая концентрация свободных кислот (в пересчёте на серную кислоту), г/дм.куб, не более",
        norm: "0,25",
        result: "0,20",
      },
      {
        number: 4,
        title: "Степень разложения (за 16 часов при 96 градусах), % мас., не более",
        norm: "5",
        result: "2,1",
      },
      {
        number: 5,
        title: "Массовая концентрация нелетучего остатка, г/дм, не более",
        norm: "0,6",
        result: "0,6",
      },
    ]
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
    qualityList: [
      {
        number: 1,
        title: "Внешний вид",
        norm: "Бесцветная прозрачная жидкость",
        result: "Соответствует",
      },
      {
        number: 2,
        title: "Массовая доля перекиси водорода, %",
        norm: "58,0-60,0",
        result: "60,0",
      },
      {
        number: 3,
        title: "Массовая концентрация свободных кислот (в пересчёте на серную кислоту), г/дм³, не более",
        norm: "0,25",
        result: "0,25",
      },
      {
        number: 4,
        title: "Степень разложения (за 16 часов при 96 градусах), % мас., не более",
        norm: "5",
        result: "2,2",
      },
      {
        number: 5,
        title: "Массовая концентрация нелетучего остатка, г/дм³, не более",
        norm: "0,6",
        result: "0,6",
      },
    ]
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
    qualityList: [
      {
        number: 1,
        title: "Внешний вид",
        norm: "Бесцветная прозрачная жидкость",
        result: "Соответствует",
      },
      {
        number: 2,
        title: "Массовая доля перекиси водорода, %",
        norm: "35,0-36,0",
        result: "35,5",
      },
      {
        number: 3,
        title: "Степень разложения (за 16 часов при 96 градусах), % мас., не более",
        norm: "2",
        result: "0,6",
      },
      {
        number: 4,
        title: "Массовая концентрация нелетучего остатка, г/дм, не более",
        norm: "0,150",
        result: "0,031",
      },
      {
        number: 5,
        title: "pH",
        norm: "2,0-4,0",
        result: "3,7",
      },
      {
        number: 6,
        title: "Массовая концентрация железа, мкг/дм.куб, не более",
        norm: "50",
        result: "< 10",
      },
      {
        number: 7,
        title: "Массовая концентрация нитратов, мкг/дм.куб, не более",
        norm: "30",
        result: "16",
      },
      {
        number: 8,
        title: "Массовая концентрация фосфатов, мкг/дм.куб, не более",
        norm: "60",
        result: "13",
      },
      {
        number: 9,
        title: "Массовая концентрация хлоридов, мкг/дм.куб, не более",
        norm: "0,5",
        result: "0,1",
      },
    ]
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
    qualityList: [
      {
        number: 1,
        title: "Внешний вид",
        norm: "Бесцветная прозрачная жидкость",
        result: "Соответствует",
      },
      {
        number: 2,
        title: "Массовая доля перекиси водорода, %",
        norm: "35,0-36,0",
        result: "35,5",
      },
      {
        number: 3,
        title: "Степень разложения (за 16 часов при 96 градусах), % мас., не более",
        norm: "5",
        result: "0,5",
      },
      {
        number: 4,
        title: "Массовая концентрация нелетучего остатка, г/дм³, не более",
        norm: "0,050",
        result: "0,010",
      },
      {
        number: 5,
        title: "pH",
        norm: "2,0-4,0",
        result: "3,1",
      },
      {
        number: 6,
        title: "Массовая концентрация железа, мкг/дм³, не более",
        norm: "50",
        result: "< 10",
      },
      {
        number: 7,
        title: "Массовая концентрация нитратов, мкг/дм³, не более",
        norm: "30",
        result: "5",
      },
      {
        number: 8,
        title: "Массовая концентрация фосфатов, мкг/дм³, не более",
        norm: "15",
        result: "3",
      },
      {
        number: 9,
        title: "Массовая концентрация хлоридов, мкг/дм³, не более",
        norm: "0,5",
        result: "0,1",
      },
    ]
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
    qualityList: [
      {
        number: 1,
        title: "Внешний вид",
        norm: "Бесцветная прозрачная жидкость",
        result: "Соответствует",
      },
      {
        number: 2,
        title: "Массовая доля перекиси водорода, %",
        norm: "30-35",
        result: "31,9",
      },
      {
        number: 3,
        title: "Массовая концентрация нелетучего остатка, г/дм, не более",
        norm: "0,050",
        result: "0,010",
      },
      {
        number: 4,
        title: "Массовая доля свободных кислот (в пересчёте на серную кислоту), %, не более",
// norm: "х10 ⁻¹  ⁻²  ⁻³  ⁻⁴  ⁻⁵  ⁻⁶  ⁻⁷  ⁻⁸  ⁻⁹",
        norm: "1х10⁻³",
        result: "4х10⁻⁴",
      },
      {
        number: 5,
        title: "Массовая доля сульфатов, %, не более",
        norm: "1х10⁻⁴",
        result: "<1х10⁻⁵",
      },
      {
        number: 6,
        title: "Массовая доля хлоридов, %, не более",
        norm: "5х10⁻⁵",
        result: "<2х10⁻⁵",
      },
      {
        number: 7,
        title: "Массовая доля общего азота, %, не более",
        norm: "3х10⁻⁵",
        result: "<1х10⁻⁵",
      },
      {
        number: 8,
        title: "Массовая доля алюминия, %, не более",
        norm: "2х10⁻⁵",
        result: "<1х10⁻⁶",
      },
      {
        number: 9,
        title: "Массовая доля бора, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 10,
        title: "Массовая доля железа, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 11,
        title: "Массовая доля марганца, %, не более",
        norm: "5х10⁻⁷",
        result: "<1х10⁻⁷",
      },
      {
        number: 12,
        title: "Массовая доля меди, %, не более",
        norm: "5х10⁻⁷",
        result: "<1х10⁻⁷",
      },
      {
        number: 13,
        title: "Массовая доля никеля, %, не более",
        norm: "5х10⁻⁷",
        result: "<1х10⁻⁷",
      },
      {
        number: 14,
        title: "Массовая доля свинца, %, не более",
        norm: "2х10⁻⁶",
        result: "<2х10⁻⁶",
      },
      {
        number: 15,
        title: "Массовая доля бария, %, не более",
        norm: "2х10⁻⁵",
        result: "<1х10⁻⁶",
      },
      {
        number: 16,
        title: "Массовая доля висмута, %, не более",
        norm: "5х10⁻⁷",
        result: "<5х10⁻⁷",
      },
      {
        number: 17,
        title: "Массовая доля галия, %, не более",
        norm: "5х10⁻⁷",
        result: "<5х10⁻⁷",
      },
      {
        number: 18,
        title: "Массовая доля золота, %, не более",
        norm: "5х10⁻⁷",
        result: "<5х10⁻⁷",
      },
      {
        number: 19,
        title: "Массовая доля кадмия, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 20,
        title: "Массовая доля калия, %, не более",
        norm: "5х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 21,
        title: "Массовая доля кальция, %, не более",
        norm: "2х10⁻⁵",
        result: "<2х10⁻⁶",
      },
      {
        number: 22,
        title: "Массовая доля кобальта, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 23,
        title: "Массовая доля фосфора, %, не более",
        norm: "5х10⁻⁵",
        result: "<2х10⁻⁶",
      },
      {
        number: 24,
        title: "Массовая доля кремния, %, не более",
        norm: "1х10⁻⁵",
        result: "<5х10⁻⁶",
      },
      {
        number: 25,
        title: "Массовая доля лития, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 26,
        title: "Массовая доля магния, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 27,
        title: "Массовая доля молибдена, %, не более",
        norm: "5х10⁻⁷",
        result: "<5х10⁻⁷",
      },
      {
        number: 28,
        title: "Массовая доля мышьяка, %, не более",
        norm: "5х10⁻⁶",
        result: "<5х10⁻⁶",
      },
      {
        number: 29,
        title: "Массовая доля натрия, %, не более",
        norm: "1х10⁻⁵",
        result: "<5х10⁻⁶",
      },
      {
        number: 30,
        title: "Массовая доля олова, %, не более",
        norm: "2х10⁻⁶",
        result: "<2х10⁻⁶",
      },
      {
        number: 31,
        title: "Массовая доля серебра, %, не более",
        norm: "5х10⁻⁷",
        result: "<2х10⁻⁷",
      },
      {
        number: 32,
        title: "Массовая доля стронция, %, не более",
        norm: "5х10⁻⁷",
        result: "<2х10⁻⁷",
      },
      {
        number: 33,
        title: "Массовая доля сурьмы, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 34,
        title: "Массовая доля титана, %, не более",
        norm: "5х10⁻⁶",
        result: "<2х10⁻⁶",
      },
      {
        number: 35,
        title: "Массовая доля хрома, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 36,
        title: "Массовая доля циркония, %, не более",
        norm: "5х10⁻⁷",
        result: "<5х10⁻⁷",
      },
      {
        number: 37,
        title: "Массовая доля цинка, %, не более",
        norm: "2х10⁻⁷",
        result: "<2х10⁻⁷",
      },
    ]

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
        qualityList: [
      {
        number: 1,
        title: "Внешний вид",
        norm: "Бесцветная прозрачная жидкость",
        result: "Соответствует",
      },
      {
        number: 2,
        title: "Массовая доля перекиси водорода, %, в пределах",
        norm: "30-35",
        result: "31,7",
      },
      {
        number: 3,
        title: "Массовая концентрация нелетучего остатка, %, не более",
        norm: "1х10⁻³",
        result: "<3х10⁻³",
      },
      {
        number: 4,
        title: "Массовая доля свободных кислот (в пересчёте на серную кислоту), %, не более",
        norm: "1х10⁻³",
        result: "4х10⁻⁴",
      },
      {
        number: 6,
        title: "Массовая доля хлоридов, %, не более",
        norm: "5х10⁻⁵",
        result: "<1х10⁻⁵",
      },
      {
        number: 9,
        title: "Массовая доля бора, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 8,
        title: "Массовая доля алюминия, %, не более",
        norm: "2х10⁻⁵",
        result: "<1х10⁻⁶",
      },
      {
        number: 10,
        title: "Массовая доля железа, %, не более",
        norm: "1х10⁻⁵",
        result: "<1х10⁻⁶",
      },
      {
        number: 11,
        title: "Массовая доля марганца, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 12,
        title: "Массовая доля меди, %, не более",
        norm: "1х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 13,
        title: "Массовая доля никеля, %, не более",
        norm: "2х10⁻⁶",
        result: "<1х10⁻⁶",
      },
      {
        number: 14,
        title: "Массовая доля свинца, %, не более",
        norm: "2х10⁻⁶",
        result: "<2х10⁻⁶",
      },
    ]

  },
];

export default () => {
  const { openVisibleFormConsultation } = visibleFormConsultation();
  const { openVisibleQualityModal } = visibleQualityModal();

  return (
    <>
      <QualityModal />

      <section className="bg-[url('https://mos-522755.oml.ru/d/fon_2.png')] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 border-b border-gray-400 dark:border-gray-700">
            <h2 className="mb-4 text-4xl sm:text-6xl tracking-tight font-display font-extrabold text-gray-900 dark:text-white">
              Продукция
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Все партии отпускаемой продукции проходят лабораторные
              исследования на соответствие заявленному качеству
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
                    <p className="mb-8 font-light lg:text-lg">
                      {item.description}
                    </p>
                    <ul
                      role="list"
                      className=" my-7 space-y-5 dark:border-gray-700"
                    >
                      {item.characteristics.map((character, index) => (
                        <li key={`item_${index}`} className="flex space-x-3 ">
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-lime-600 dark:text-primary-500"
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
                    onClick={() => openVisibleQualityModal(item.qualityList)}
                    className="inline-flex items-center justify-center px-5 py-2.5 mr-3 mb-4 text-base font-medium text-center text-gray-900 hover:text-gray-50 rounded-lg border-lime-500 border-2 bg-gray-50 hover:bg-lime-600 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
                  >
                    Показатели качества
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
                  <button
                    onClick={openVisibleFormConsultation}
                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
    </>
  );
};
