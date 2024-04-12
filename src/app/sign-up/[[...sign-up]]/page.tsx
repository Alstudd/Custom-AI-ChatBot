import { SignUp } from '@clerk/nextjs'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI ChatBot - Sign Up",
};

type Props = {}

const SignUpPage = (props: Props) => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  )
}

export default SignUpPage