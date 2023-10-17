export default () => {
  return (
    <>
      <div className="hidden md:block mx-auto mt-12 p-8 bg-gray-50 overflow-hidden sm:rounded-lg">
        <iframe
          className="mx-auto py-8"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6e15d86e4660e490f8f94b2dfdaf3c7ea1a8831d7627de0d43803097c4cd34b&amp;source=constructor"
          width="1124"
          height="700"
          title="Map"
        />
      </div>
      <div className="md:hidden mx-auto p-8 bg-gray-50 overflow-hidden sm:rounded-lg">
        <iframe
          className="mx-auto py-8"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6e15d86e4660e490f8f94b2dfdaf3c7ea1a8831d7627de0d43803097c4cd34b&amp;source=constructor"
          width="420"
          height="700"
          title="Map"
        />
      </div>
    </>
  );
};
