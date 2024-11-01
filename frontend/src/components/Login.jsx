function Register() {
    return (
      <div className="">
        
    <div className="max-w-xs mx-auto mt-5 p-2 border rounded-lg shadow-lg bg-white mt-40 mb-10">
    <h2 className="text-lg  text-center font-bold mb-2">Login</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="input input-bordered w-full" placeholder="Your Name" required />
            </div>
            
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Email or phonenumber</label>
              <input type="email" className="input input-bordered w-full" placeholder="Your Email" required />
            </div>
            
            
           
            <button type="submit" className="btn bg-green-400 w-full p-1">Login</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;
  