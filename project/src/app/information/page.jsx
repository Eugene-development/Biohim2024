import { FadeIn } from "@/func/motion/FadeIn";
import { Information } from "@/UI";

const posts = [
  {
    id: 1,
    title: "Медицинская перекись водорода.",
    href: "/information/1",
    description: "Медицинская перекись водорода - это уникальное химическое соединение, которое нашло широкое применение в медицинской практике благодаря своим многочисленным полезным свойств",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Применение", href: "#" },
    author: {
      name: "Биохим",
      role: "Перекись водорода",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Техническая перекись водорода",
    href: "/information/2",
    description:
      "Техническая перекись водорода (H2O2) представляет собой химическое соединение, широко применяемое в различных секторах промышленности, включая химическую, текстильную, целлюлозно-бумажную, деревообрабатывающую и другие отрасли. Её раз",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Применение", href: "#" },
    author: {
      name: "Биохим",
      role: "Перекись водорода",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Асептическая перекись водорода",
    href: "/information/3",
    description:
      "Пуроксид Асептик, также известный как асептическая перекись водорода, представляет собой химическое соединение, специально разработанное для асептической обработки упаковочных материалов в пищевой промышленности. Этот продукт имее",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Применение", href: "#" },
    author: {
      name: "Биохим",
      role: "Перекись водорода",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Особо чистая перекись (ОСЧ)",
    href: "/information/4",
    description:
      "Особо Чистая Перекись, также известная как ультракачественная перекись водорода, представляет собой химическое соединение, специально разработанное для технических целей в радиоэлектронно",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Применение", href: "#" },
    author: {
      name: "Биохим",
      role: "Перекись водорода",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

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
        <div className=" bg-white mt-24 sm:mt-48">
          <FadeIn>
            <Information posts={posts}/>
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
