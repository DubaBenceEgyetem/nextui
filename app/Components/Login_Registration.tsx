import React from "react";
import { Input, Spacer, Button } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login_Registration()  {
  const [Swap, setSwap] = useState(true);
  const [data, setData] = useState({
    email: '',
    password: '',
    passwordSecond:''
  })
  const [valid, setValid] = useState(false)


  const SwapLabel = () => {
    setSwap(!Swap);
    setData({
      ...data,
      email: '',
      password: '',
      passwordSecond:''
    })
    setValid(false)
  };

  const handleSubmit = (event:  React.FormEvent<HTMLFormElement> ) =>{
    const {email, password, passwordSecond} = data;
    event.preventDefault()

    console.log(data)
    if(!email || !password || !passwordSecond)
    {
      toast.error("Fill the inputs")
      setValid(true)
    }
    else if(password !== passwordSecond)
    {
      toast.error("The passwords are not matching")
      setValid(true)
    }
    else
      toast.success("The registration was successfull")
    
  }

  return (
    <>
      {Swap ? (
        <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 2, scale: 1 }} 
          className="flex flex-col items-center justify-center min-h-screen  text-center"
        >
          <div className="bg-[#f1f1f1] dark:bg-[#080707] rounded-lg  p-6 shadow-light dark:shadow-dark">
            <div className="flex flex-col md:flex-nowrap gap-5 m-8">
              <div className="flex justify-center">
                <label className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  Sign In
                </label>
              </div>
              <Input
                type="email"
                variant="flat"
                label="Email"
                size="sm"
                labelPlacement="outside"
                className="md:w-64 lg:w-80 xl:w-96 placeholder:text-xl"
              />
              <Input
                type="email"
                variant="flat"
                label="Password"
                size="sm"
                labelPlacement="outside"
                className="md:w-64 lg:w-80 xl:w-96"
              />
              <Button
                radius="lg"
                variant="solid"
                className="bg-gradient-to-tr from-purple-500 to-purple-700 text-white font-bold w-full "
              >
                Submit
              </Button>
              You don't have account? <motion.a whileHover={{ scale: 1.2 }} className="cursor-pointer font-bold" onClick={SwapLabel}>Make account here</motion.a>
            </div>
          </div>
        </motion.div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }} 
        className="flex flex-col items-center justify-center min-h-screen  text-center"
      >
          <div className="bg-[#f1f1f1] dark:bg-[#080707] rounded-lg  p-6 shadow-light dark:shadow-dark">
            <div className="flex flex-col md:flex-nowrap gap-5 m-8">
            <div className="flex justify-center">
                <label className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  Registration
                </label>
              </div>
              <Input
                type="email"
                variant="flat"
                label="Email"
                size="sm"
                value={data.email}
                
                onChange={(e) => setData({...data, email: e.target.value})}
                isInvalid={valid}
                labelPlacement="outside"
                className="md:w-64 lg:w-80 xl:w-96"
              />
              <Input
                type="password"
                variant="flat"
                label="Password"
                size="sm"
                value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})}
                isInvalid={valid}
                labelPlacement="outside"
                className="md:w-64 lg:w-80 xl:w-96"
              />
              <Input
                type="password"
                variant="flat"
                value={data.passwordSecond}
                onChange={(e) => setData({...data, passwordSecond: e.target.value})}
                label="Password Confirm"
                size="sm"
                isInvalid={valid}
                labelPlacement="outside"
                className="md:w-64 lg:w-80 xl:w-96"
              />
              <Button
              type="submit"
               radius="lg"
                variant="solid"
                className="bg-gradient-to-tr from-purple-500 to-purple-700 text-white font-bold w-full mt-5"
              >
                Submit
              </Button>
              <motion.a whileHover={{ scale: 1.2 }}  className="cursor-pointer font-bold" onClick={SwapLabel}>Login here</motion.a>
            </div>
          </div>
        </motion.div>
        </form>
      )}
     
    </>
  );
}

export default Login_Registration;
