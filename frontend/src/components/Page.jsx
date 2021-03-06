const Page = ({ title, children }) => (
  <div className="py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-semibold text-gray-900">
        {title}
      </h1>
    </div>
    <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 md:px-8">
      {children}
    </div>
  </div>
);

export default Page;
