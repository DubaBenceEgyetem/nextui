import React from "react";
import { Input, Spacer, Button } from "@nextui-org/react";
function Login() {

    

  return (
    <>
      <div className="text-white bg-transparent rounded-lg border-2 w-1/3 flex flex-col text-center items-center m-5">
        <div className="flex w-1/2 flex-col md:flex-nowrap gap-4 m-8">
            <label className="text-3xl font-bold">Sign In</label>
          <Input type="email" variant="underlined" label="Email" color="primary"/>
          <Input type="email" variant="underlined" label="Password" color="primary"/>
          <Button radius="lg" variant="solid" className="bg-gradient-to-tr from-purple-500 to-purple-700 text-white font-bold">Submit</Button>
         don't have account? Create Account
         <label className="font-bold">Forgot Password?</label>
        </div>
      </div>
    </>
  );
}

export default Login;
