"use client";

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 -translate-y-20 focus:translate-y-0 z-[60] rounded bg-black text-white px-4 py-2 text-sm transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;