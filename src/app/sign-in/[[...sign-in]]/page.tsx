import { SignIn } from '@clerk/nextjs'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI ChatBot - Sign In",
};

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  )
}

export default SignInPage