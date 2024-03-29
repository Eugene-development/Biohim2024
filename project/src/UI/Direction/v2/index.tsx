import Link from "next/link";
import { FadeIn } from "@/func/motion/FadeIn";

export default function index() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-full lg:py-16 lg:px-20">
        <div className=" mb-8 lg:mb-16">
          <h2 className="mb-4 text-center text-3xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Наши направления
          </h2>
          <p className="font-light text-center text-gray-500 text-sm sm:text-xl dark:text-gray-400">
            Мы предлагаем широкий ассортимент перекиси водорода, которую Вы
            можете купить по привлекательным ценам
          </p>
        </div>
        <div className="grid gap-24 grid-cols-1 xl:grid-cols-2">
          <div>
            <img
              className="z-30 -mb-16 rounded-2xl h-72 sm:h-96 w-[40rem]"
              src="https://mos-522755.oml.ru/thumb/2/iisuo84kHfT_O1QvSSNxvg/1920r1080/d/55291969_2.jpg"
              alt="продукция"
            />
            <FadeIn>
              <div className="relative z-40 mx-2 sm:mx-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                  Продукция
                </span>
                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Медицинская перекись водорода
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Применяется в медицинской, фармацевтической, косметической,
                  пищевой и в других видах промышленности.
                </p>
                <Link
                  href="/information/1"
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-lime-300 rounded-lg hover:bg-lime-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Подробнее
                </Link>
              </div>
            </FadeIn>
          </div>
          <div>
            <img
              className="z-30 -mb-16 rounded-2xl h-72 sm:h-96 w-[40rem]"
              src="https://mos-522755.oml.ru/thumb/2/AOtZA8mzrzOBWtHs6A-7iA/1920r1080/d/55291970_2.jpg"
              alt="продукция"
            />
            <FadeIn>
              <div className="relative z-40 mx-2 sm:mx-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                  Продукция
                </span>
                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Техническая перекись водорода
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Применяется в целлюлозно-бумажной, текстильной, химической,
                  деревообрабатывающей и в других видах промышленности.
                </p>
                <Link
                  href="/information/2"
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-lime-300 rounded-lg hover:bg-lime-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Подробнее
                </Link>
              </div>
            </FadeIn>
          </div>
          <div>
            <img
              className="z-30 -mb-16 rounded-2xl h-72 sm:h-96 w-[40rem]"
              src="https://mos-522755.oml.ru/thumb/2/mtxGxsC-SeFbGG7y5ILjCQ/1920r1080/d/55291974_2.jpg"
              alt="продукция"
            />
            <FadeIn>
              <div className="relative z-40 mx-2 sm:mx-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                  Продукция
                </span>
                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Асептическая перекись водорода
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Пероксид водорода асептический применяются в пищевой
                  промышленности для асептической обработки упаковочных
                  материалов.
                </p>
                <Link
                  href="/information/3"
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-lime-300 rounded-lg hover:bg-lime-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Подробнее
                </Link>
              </div>
            </FadeIn>
          </div>
          <div>
            <img
              className="z-30 -mb-16 rounded-2xl h-72 sm:h-96 w-[40rem]"
              src="https://www.funnyart.club/uploads/posts/2022-12/1671492904_www-funnyart-club-p-khimicheskaya-laboratoriya-kartinki-foni-38.jpg"
              alt="продукция"
            />
            <FadeIn>
              <div className="relative z-40 mx-2 sm:mx-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                  Продукция
                </span>
                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Особо чистая перекись (ОСЧ)
                </h2>
                <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                  Применяется в технических целях в радиоэлектронной аппаратуре.
                  Используется в полупроводниках, космической технике и
                  приборах.
                </p>
                <Link
                  href="/information/4"
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-lime-300 rounded-lg hover:bg-lime-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Подробнее
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
