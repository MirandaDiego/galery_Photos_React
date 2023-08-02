"use client"

import { useState } from "react";
import { PhotoItem } from "./components/PhotoItem";
import { photoList } from "./data/photoList";
import { Modak } from "next/font/google";
import { Modal } from "./components/Modal";

const Page = () => {

  const [showModal, setShowModal] = useState(false);
  const [imageofModal, setImageModal] = useState('')

  const openModal =(id:number) =>{
    const photo = photoList.find(item => item.id === id);
    if(photo){
      setImageModal(photo.url);
      setShowModal(true)
    }
  }
  const closeModal = () =>{
    setShowModal(false);
  }
  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Intergalácteas</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols- lg:grid-cols-3 gap-8">
    {photoList.map(item => (
      <PhotoItem
      key={item.id}
      photo={item}
      onClick={() => openModal(item.id)}
      />
    ))}
      </section>
      {showModal && 
      <Modal image={imageofModal} closeModal={closeModal}/>}
    </div>

  )
}
export default Page;
