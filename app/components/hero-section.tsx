export default function Hero() {
  return (
    <div id="home" className="bg-white dark:bg-black p-2">
      <div className="relative isolate ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-screen items-center">
          <div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-200  sm:text-7xl">
                Checkout page for your online business
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400  sm:text-xl/8">
                This is where you can start your online business. You can manage
                on your own with the clean admin panel.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  target="_blank"
                  href="https://travello.agency/checkout/2003"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src="/project-layout.png" className=" rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
