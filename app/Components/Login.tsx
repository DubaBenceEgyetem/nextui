import React from "react";
import { Input, Spacer, Button } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";
function Login() {
  const [Swap, setSwap] = useState(true);

  const SwapLabel = () => {
    setSwap(!Swap);
  };

  return (
    <>
      {Swap ? (
        <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }} 
          className="flex flex-col items-center justify-center min-h-screen text-white text-center"
        >
          <div className="bg-transparent rounded-lg border-2 p-6">
            <div className="flex flex-col md:flex-nowrap gap-5 m-8">
              <div className="flex justify-between items-center">
                <label className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  Sign In
                </label>
                <Button onClick={SwapLabel}>hi</Button>
              </div>
              <Input
                type="email"
                variant="flat"
                label="Email"
                size="sm"
                labelPlacement="outside"
                className="md:w-64 lg:w-80 xl:w-96"
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
            </div>
          </div>
        </motion.div>
        </div>
      ) : (
        
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }} 
        className="flex flex-col items-center justify-center min-h-screen text-white text-center"
      >
          <div className="bg-transparent rounded-lg border-2 p-6">
            <div className="flex flex-col md:flex-nowrap gap-5 m-8">
            <div className="flex justify-between items-center">
                <label className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  Registration
                </label>
                <Button onClick={SwapLabel}>hi</Button>
              </div>
              <Input
                type="email"
                variant="flat"
                label="Email"
                size="sm"
                labelPlacement="outside"
                className="md:w-64 lg:w-80 xl:w-96"
              />
              <Input
                type="password"
                variant="flat"
                label="Password"
                size="sm"
                labelPlacement="outside"
                className="md:w-64 lg:w-80 xl:w-96"
              />
              <Input
                type="password"
                variant="flat"
                label="Password Confirm"
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
            </div>
          </div>
        </motion.div>

      )}
    </>
  );
}

export default Login;
