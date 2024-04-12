import React from 'react'
import type { Metadata } from "next";
import { auth } from '@clerk/nextjs';
import prisma from '@/lib/db/prisma';

export const metadata: Metadata = {
  title: "Custom AI ChatBot - Notes",
};

type Props = {}

const Notes = async (props: Props) => {
  const { userId } = auth();
  if (!userId) throw Error("userId undefined");
  const allNotes = await prisma.note.findMany({ where: { userId }});
  return (
    <div>{JSON.stringify(allNotes)}</div>
  )
}

export default Notes