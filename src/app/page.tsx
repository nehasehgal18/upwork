import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between">
        <h1 className="text-4xl font-bold text-center mb-8">
          Business Plan Consulting
        </h1>
        <p className="text-center mb-8">
          Your Path to Business Success Starts Here
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        <Link href="/landing" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Business Plan Template{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get our comprehensive business plan template and financial model.
          </p>
        </Link>
        <Link href="/perfume" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Perfume Business{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore our specialized resources for starting a perfume business.
          </p>
        </Link>
        <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Our Services{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore our range of business consulting services.
          </p>
        </div>
        <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            About Us{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about our experience and expertise in business planning.
          </p>
        </div>
        <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">
            Contact Us{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get in touch for a consultation or to learn more about our services.
          </p>
        </div>
      </div>
    </main>
  );
}