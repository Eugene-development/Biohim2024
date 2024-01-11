import Link from "next/link";

export default ({ posts, headData }) => {
  return (
    <div className="bg-[url('https://mos-522755.oml.ru/d/fon_2.png')] py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 border-b border-gray-400 dark:border-gray-700">
          <h2 className="mb-4 text-4xl sm:text-6xl tracking-tight font-display font-extrabold text-gray-900 dark:text-white">
            {headData.headTitle}
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            {headData.headDescription}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-12 sm:gap-y-20   sm:mt-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                {/* <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time> */}
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-800 hover:bg-gray-100">
                  {post.category.title}
                </span>
              </div>
              <Link href={post.href}>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>

                <div
                  data-drawer-target="drawer-read-product-advanced"
                  data-drawer-show="drawer-read-product-advanced"
                  aria-controls="drawer-read-product-advanced"
                  className="w-48 mt-4 py-2 px-8 flex text-base font-medium text-center text-gray-900 focus:outline-none rounded-lg border border-gray-200  hover:bg-gray-50 hover:text-lime-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <div className="mx-auto flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2 text-lime-600"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      />
                    </svg>
                    Подробнее
                  </div>
                </div>
              </Link>
              {/* <div className="relative mt-2 flex items-center gap-x-4">
                <img
                  src="https://storage.yandexcloud.net/brand-logo/biohim/logo/logo.svg"
                  alt="логотип"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </Link>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
