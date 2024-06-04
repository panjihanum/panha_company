import { IMAGES } from "@/assets/images";
import Image from "next/image";

export const LandingPagePartial = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center">
    <header className="w-full max-w-6xl text-center py-8 animate__animated animate__zoomIn">
      <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mt-6 md:mt-0">
        Selamat Datang di Panha Store
      </h1>
      <p className="mt-4 text-md lg:text-xl text-gray-600 dark:text-gray-400">
        Kami menyediakan berbagai produk dan layanan terbaik untuk kebutuhan
        keseharian Anda.
      </p>
    </header>

    <section className="w-full max-w-6xl flex-reverse lg:flex flex-col lg:flex-row items-center justify-between py-2 lg:py-8">
      <div className="lg:w-1/2 p-4 text-center lg:text-left animate__animated animate__zoomIn animate__delay-05s">
        <h2 className="lg:text-xl font-semibold text-black dark:text-white">
          Tentang Kami
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm lg:text-md">
          Perusahaan kami telah berada di garis depan industri, menyediakan
          layanan dan produk berkualitas tinggi yang memenuhi kebutuhan
          keseharian.
        </p>
      </div>
      <div className="lg:w-1/2 p-4 flex items-end justify-end animate__animated animate__zoomIn animate__delay-1s">
        <Image
          src={IMAGES.HOME_PAGE}
          alt="Foto Perusahaan"
          width={500}
          height={300}
        />
      </div>
    </section>
  </div>
);
