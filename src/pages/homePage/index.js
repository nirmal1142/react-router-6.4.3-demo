import React from "react";

function HomePage() {
  return (
    <>
      <div className="container w-full">
        <div className="grid grid-flow-row-dense grid-cols-10 grid-rows-3 gap-4">
          {[...Array(15)].map(() => (
            <div className="h-32 w-32 p-4 border-2 rounded-lg">
              <span>Name</span>
              <p>My Name</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
        </div>
        <div>
          <div class="text-xl font-medium text-black ">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div> */}
    </>
  );
}

export default HomePage;
