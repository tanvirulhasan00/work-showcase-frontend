import React from "react";

const Feature = () => {
  return (
    <div id="feature" className="p-2">
      <h1
        className="text-center text-white text-5xl bg-indigo-600"
        style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
      >
        Features
      </h1>
      <div className="flex gap-5 mt-10">
        <div className="flex flex-col items-center justify-center w-[70rem]">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-200  sm:text-7xl">
              Checkout Page
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400  sm:text-xl/8">
              user intarection page. Order will be placed from here.
            </p>
          </div>
        </div>
        <div className="w-[70rem] rounded-lg">
          <img src="/checkout.png" className="w-full rounded-lg" />
        </div>
      </div>
      <div className="flex flex-row-reverse gap-5 ">
        <div className="flex flex-col items-center justify-center w-[70rem]">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-200  sm:text-7xl">
              Login
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400  sm:text-xl/8">
              This is the admin panel login page.
            </p>
          </div>
        </div>
        <div className="w-[70rem] rounded-lg">
          <img src="/login.png" className="w-full rounded-lg" />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col items-center justify-center w-[70rem]">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-200  sm:text-7xl">
              Add Products
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400  sm:text-xl/8">
              You can add, update, and delete on your own without any hassle.
            </p>
          </div>
        </div>
        <div className="w-[70rem] rounded-lg">
          <img src="/add.png" className="w-full rounded-lg" />
        </div>
      </div>
      <div className="flex flex-row-reverse gap-5 ">
        <div className="flex flex-col items-center justify-center w-[70rem]">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-200  sm:text-7xl">
              Manage Orders
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400  sm:text-xl/8">
              This is where you can start your online business. You can manage
              on your own with the clean admin panel.
            </p>
          </div>
        </div>
        <div className="w-[70rem] rounded-lg">
          <img src="/order.png" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
