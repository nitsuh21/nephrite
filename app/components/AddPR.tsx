"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";


const AddPR = () => {
  return (
    <div>
    <button
      onClick={() => {}}
      className='btn btn-primary w-full'
    >
        Add new Purchase Request
    <AiOutlinePlus className='ml-2' size={18} />
    </button>
  </div>
  )
}

export default AddPR