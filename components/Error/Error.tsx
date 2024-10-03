import React from 'react';

const ErrorPage = ({ msg } : { msg?: string; }) =>
{
  return (
    <main className="main">
      <div className="w-[100%] sm:w-[90vw] mx-auto text-center align-middle h-[40vh]">
        <div className="error__title">
          <h2 className="heading-secondary heading-secondary--error text-3xl md:text-4xl">
            Uh oh! Something went wrong!
          </h2>
          <h2 className="error__emoji md:text-[2.75rem] text-[1.5rem]">😢 🤯</h2>
        </div>
        <div className="error__msg text-lg md:text-2xl text-[purple] dark:text-purple">{msg}</div>
      </div>
    </main>
  );
};

export default ErrorPage;
