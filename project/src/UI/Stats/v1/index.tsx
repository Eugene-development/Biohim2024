import Link from "next/link";

const stats = [
  { id: 1, name: "Партнёров в России и в странах СНГ", value: "40+" },
  { id: 2, name: "Лет на оптовом рынке химического сырья", value: "12+" },
  { id: 3, name: "Гарантии качества отпускаемой продукции", value: "100%" },
];

export default () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="z-50 px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-16 xl:col-span-6">
          <div className="mx-auto px-4 max-w-3xl lg:mx-0">
            <h1 className="mt-4  sm:mt-20 font-bold font-display  text-indigo-950 text-2xl sm:text-4xl lg:text-5xl ">
              {/* компания <span className="lg:text-7xl">&#171;БИОХИМ&#187;</span>  */}
              <p className="p-1  mt-2 font-display font-bold text-gray-800 text-xl sm:text-4xl">
                {" "}
                Компания{" "}<br/>
                <span className="text-4xl sm:text-7xl font-extrabold">
                  &#171;БИОХИМ&#187;
                </span>{" "}
              </p>{" "}
            </h1>
            <p className="mt-6 sm:mt-12 text-base leading-6 sm:leading-8 text-gray-600">
              На протяжении многих лет наша компания "БИОХИМ" занимается оптовой
              торговлей химической продукцией, и наш опыт в этой сфере является
              нашей гордостью. Мы поставляем все сорта перекиси водорода
              высочайшего качества, и наша продукция отвечает всем необходимым
              стандартам безопасности и качества. Мы понимаем важность
              надежности в бизнесе, и всегда гарантируем, что наши клиенты
              получат свои заказы вовремя и в надлежащем состоянии. Наша команда
              профессионалов всегда готова предоставить вам необходимую
              информацию и консультации о наших продуктах, а связаться с нами Вы можете любым удобным способом.
            </p>
            {/* <p className="mt-2 text-base leading-8 text-gray-600">
              Наша команда профессионалов всегда готова предоставить вам
              необходимую информацию и консультации о наших продуктах. Мы
              стремимся к тому, чтобы сотрудничество с нами было максимально
              удобным и выгодным для наших клиентов. Мы ценим каждого клиента и
              готовы рассмотреть индивидуальные условия сотрудничества, чтобы
              удовлетворить их уникальные потребности.
            </p> */}
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              На протяжении многих лет наша компания "БИОХИМ" занимается оптовой
              торговлей химической продукцией, и наш опыт в этой сфере является
              нашей гордостью. Мы поставляем медицинскую и техническую перекись
              водорода высочайшего качества, и наша продукция отвечает всем
              необходимым стандартам безопасности и качества. Мы понимаем
              важность надежности в бизнесе, и всегда гарантируем, что наши
              клиенты получат свои заказы вовремя и в надлежащем состоянии.
            </p> */}
            <div className="mt-24 flex items-center gap-x-6">
              <Link
                href="/contacts"
                className="rounded-full bg-lime-500 px-10 py-3 font-semibold text-white shadow-sm hover:bg-indigo-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Наши контакты
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <dl className=" mt-12 lg:-mr-32 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-1 lg:grid-cols-3 shadow-2xl">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className=" flex flex-col bg-indigo-950 px-8 py-6"
                >
                  <dd className=" order-first text-4xl font-semibold tracking-tight text-lime-200">
                    {stat.value}
                  </dd>

                  <dt className="mt-4 text-base font-semibold leading-6 text-gray-100">
                    {stat.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="hidden lg:block z-40 relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            src="https://mos-522755.oml.ru/thumb/2/qCRqK04zbRqzb5JumjWnOA/1920r1080/d/55291941_2.jpg"
            alt=""
            className="mt-8 h-[24rem] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-16 lg:max-w-3xl xl:row-span-2 xl:row-end-2 xl:mt-24"
          />
          <img
            src="https://mos-522755.oml.ru/thumb/2/tN3tnp0BE1RhibfOSUDzJA/1920r1080/d/55291937_2.jpg"
            alt=""
            className="mt-8 h-[24rem] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-16 lg:max-w-3xl xl:row-span-2 xl:row-end-2 xl:mt-24"
          />
        </div>
      </div>
    </div>
  );
};
