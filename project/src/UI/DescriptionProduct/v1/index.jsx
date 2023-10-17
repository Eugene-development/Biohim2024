export default function index({ post }) {
  const text = { __html: post };
  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4">
          <div
            className="prose max-w-4xl mx-auto"
            dangerouslySetInnerHTML={text}
          />
        </div>
      </main>
    </>
  );
}
