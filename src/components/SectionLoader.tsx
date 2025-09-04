"use client";

const SectionLoader = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="h-7 w-48 bg-gray-200/70 rounded mb-6" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-40 bg-gray-100 rounded" />
          <div className="h-40 bg-gray-100 rounded" />
          <div className="h-40 bg-gray-100 rounded" />
        </div>
      </div>
    </section>
  );
};

export default SectionLoader;