import { DescriptionProduct } from "@/UI";
import { FadeIn } from "@/func/motion/FadeIn";

export const metadata = {
  title: "Компания Биохим | Особо Чистая Перекись (ОСЧ)",
  description:
    "Информация об особо чистой перекиси (ОСЧ)",
};

    const post = `
      <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert prose">
        <header className="mb-4 lg:mb-6 not-format">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Особо Чистая Перекись (ОСЧ). Цена и применение.
          </h1>
        </header>

        <p>
          Особо Чистая Перекись, также известная как ультракачественная перекись
          водорода, представляет собой химическое соединение, специально
          разработанное для технических целей в радиоэлектронной аппаратуре. Её
          высокая степень очистки и чистоты делает её неотъемлемым компонентом в
          различных приборах, полупроводниках и космической технике.
        </p>

        <h2>Применение Особо Чистой Перекиси в технических целях</h2>

        <ol>
          <li>
            <strong>Полупроводники.</strong>
            Особо Чистая Перекись играет ключевую роль в производстве
            полупроводников. Она применяется для очистки и обработки кремниевых
            и других полупроводниковых материалов, обеспечивая высокую чистоту и
            качество полупроводников.
          </li>
          <li>
            <strong>Космическая техника.</strong>В космической технике, где
            надежность и безопасность играют важную роль, Особо Чистая Перекись
            используется для различных целей, включая обеспечение безопасности
            астронавтов и оборудования, а также в качестве топлива для ракет.
          </li>
          <li>
            <strong>Приборы и измерительные средства.</strong>В разработке
            приборов и измерительных средств Особо Чистая Перекись может
            использоваться для обеспечения точности и надежности измерений. Она
            служит идеальным реагентом для создания высокочувствительных
            датчиков и датчиков концентрации.
          </li>
          <li>
            <strong>Электроника.</strong>В электронной промышленности Особо
            Чистая Перекись может использоваться для чистки и обработки
            различных компонентов электроники. Это способствует увеличению
            производительности и долговечности электронных устройств.
          </li>
        </ol>

        <h2>Где купить Особо Чистую Перекись</h2>
        <p>
          Для приобретения Особо Чистой Перекиси высокой степени очистки, вам
          следует обратиться к специализированным поставщикам химических
          продуктов и материалов, которые предлагают продукты высочайшего
          качества.
        </p>
        <h2>Цена на Особо Чистую Перекись</h2>
        <p>
          Цена на Особо Чистую Перекись может варьироваться в зависимости от
          чистоты и объема продукта. Обычно цены на этот продукт оправдываются
          его выдающимися характеристиками и важностью для технических процессов
          в радиоэлектронной аппаратуре.
        </p>
        <p>
          Особо Чистая Перекись является неотъемлемым элементом в
          радиоэлектронной аппаратуре, обеспечивая высокую чистоту и надежность
          в различных технических целях. При выборе поставщика следует обращать
          внимание на сертификацию и репутацию, чтобы гарантировать
          использование продукта высокого качества в ваших радиоэлектронных
          приложениях.
        </p>
      </article>
      `;

export default function page() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden ">
        {/* <img
          src="https://mos-522755.oml.ru/d/himiya.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-contain"
        /> */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
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
        <div className=" bg-white  mt-48">
          <FadeIn>
            <DescriptionProduct post={post} />
          </FadeIn>
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
}
