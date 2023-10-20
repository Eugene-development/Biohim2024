import { DescriptionProduct } from "@/UI";
import { FadeIn } from "@/func/motion/FadeIn";

export const metadata = {
  title: "Компания Биохим | Техническая перекись водорода",
  description:
    "Информация о технической перекиси водорода",
};

const post = `
      <article className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert prose">
        <header className="mb-4 lg:mb-6 not-format">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            Техническая перекись водорода. Цена и применение.
          </h1>
        </header>

        <p>
          Техническая перекись водорода (H2O2) представляет собой химическое
          соединение, широко применяемое в различных секторах промышленности,
          включая химическую, текстильную, целлюлозно-бумажную,
          деревообрабатывающую и другие отрасли. Её разносторонние свойства и
          высокая эффективность делают её востребованным компонентом в
          производственных процессах.
        </p>

        <h2>Применение технической перекиси водорода в промышленности</h2>

        <ol>
          <li>
            <strong>Химическая промышленность.</strong>
            Техническая перекись водорода используется в химической
            промышленности для синтеза органических и неорганических соединений.
            Она служит важным компонентом в различных химических реакциях,
            процессах окисления и полимеризации.
          </li>
          <li>
            <strong>Текстильная промышленность.</strong>
            Перекись водорода используется в производстве целлюлозы и бумаги.
            Она обеспечивает отбеливание целлюлозы и улучшает ее характеристики,
            что важно для производства бумажных изделий высокого качества.
          </li>
          <li>
            <strong>Деревообрабатывающая промышленность.</strong>В данной
            отрасли техническая перекись водорода применяется для обработки и
            отбеливания древесины. Это способствует улучшению внешнего вида и
            свойств древесины, а также является важным этапом в производстве
            деревянных изделий.
          </li>
          <li>
            <strong>Прочие промышленные сферы.</strong>В дополнение к
            вышеперечисленным отраслям, техническая перекись водорода также
            используется в различных промышленных процессах, таких как
            производство пищевых продуктов, сточные воды, металлургия,
            фармацевтика и другие. Её применение связано с обеспечением
            эффективных процессов очистки, дезинфекции и окисления в
            промышленности.
          </li>
        </ol>

        <h2>Где купить техническую перекись водорода</h2>
        <p>
          Для приобретения технической перекиси водорода высокого качества
          рекомендуется обратиться к надежным поставщикам. Этот продукт доступен
          через специализированные химические поставщики, промышленные агентства
          и компании, занимающиеся поставками химических веществ.
        </p>
        <h2>Цена на техническую перекись водорода</h2>
        <p>
          Цена на техническую перекись водорода может изменяться в зависимости
          от концентрации и объема продукта. Обычно цены на техническую перекись
          водорода варьируются в пределах, доступных для промышленных
          предприятий и компаний. Рекомендуется запросить ценовые предложения у
          различных поставщиков, чтобы выбрать оптимальное предложение.
        </p>
        <p>
          Техническая перекись водорода является незаменимым компонентом в
          промышленных процессах, обеспечивая эффективные решения для различных
          отраслей. Важно приобретать этот продукт у надежных поставщиков и
          соблюдать необходимые меры предостережения при его использовании.
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
