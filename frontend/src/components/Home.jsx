function home() {
    return (
      <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
          <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-28">
            <div className="space-y-4">
              <h1 className="font-bold text-4xl text-gray-600">Welcome, <span className="text-5xl text-green-600">Farmers!</span></h1>
              <p className="text-base">Our tool helps you manage pests effectively, ensuring a healthier harvest and promoting sustainable farming. Lets protect your crops together.</p>
              <label className="input input-bordered flex items-center gap-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <button className="btn bg-green-400 mt-3 p-4">Submit</button>
            </div>
          </div>
          
          <div className=" order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center">
          
            <img src="farmer2.png" alt="farmer" className="max-w-[80%] h-56 mt-36" />
          </div>
        </div>
      </>
    );
  }
  
  export default home;
  