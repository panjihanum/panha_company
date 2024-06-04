import { ICONS } from "@/assets/icons";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ImagePreview = ({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string | StaticImageData;
  alt: string;
  className: string;
  width: number;
  height: number;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setZoomed(false);
  };

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <>
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          className={`${className} cursor-pointer`}
          width={width}
          height={height}
          onClick={openModal}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Preview Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div
            className={`${
              zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            } fixed top-0 left-0 w-full h-full bg-[#0006] flex items-center justify-center`}
            onClick={toggleZoom}
          >
            <div className="flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                width={
                  window.innerWidth <= 1024
                    ? window.innerWidth / 1.2
                    : window.innerWidth / 2
                }
                height={
                  window.innerWidth <= 1024
                    ? window.innerWidth / 1.2
                    : window.innerWidth / 2
                }
                objectFit={zoomed ? "contain" : "cover"}
              />
            </div>

            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
              onClick={closeModal}
            >
              <Image
                priority
                src={ICONS.CLOSE}
                alt="close"
                width={24}
                height={24}
              />
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};
