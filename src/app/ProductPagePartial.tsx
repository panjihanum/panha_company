"use client";
import { IMAGES } from "@/assets/images";
import { ImagePreview } from "@/components/ImagePreview";
import { ImageProps } from "@/interfaces/images.interface";
import { ProductProps } from "@/interfaces/products.interface";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ProductPagePartial = ({
  products,
  images,
}: {
  products: ProductProps[];
  images: ImageProps[];
}) => {
  const [visibleProducts, setVisibleProducts] = useState<ProductProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(4);
      } else if (window.innerWidth < 1024) {
        setPerPage(6);
      } else {
        setPerPage(8);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const startIndex = page * perPage;
    const endIndex = startIndex + perPage;
    setVisibleProducts(products.slice(startIndex, endIndex));
  }, [products, page, perPage]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <section className="w-full max-w-5xl py-8 text-center min-h-[75vh]">
      <h2 className="text-2xl font-semibold text-black dark:text-white">
        Produk Kami
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} images={images} />
        ))}
      </div>
      <div className="flex justify-end mt-10">
        <button
          className="px-4 py-2 mr-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          onClick={prevPage}
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          onClick={nextPage}
          disabled={(page + 1) * perPage >= products.length}
        >
          Next
        </button>
      </div>
    </section>
  );
};

const ProductCard = ({
  product,
  images,
}: {
  product: ProductProps;
  images: ImageProps[];
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isVisible, setIsVisible] = useState(false);

  const image = images.find((img) => img.id.includes(product.id));
  const imageUrl = image ? image.image : IMAGES.DEFAULT_PRODUCT;

  return (
    <button
      ref={ref}
      className={`flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ${
        inView ? "animate__animated animate__zoomIn" : ""
      }`}
      key={`${product.id}`}
      style={{ visibility: inView || isVisible ? "visible" : "hidden" }}
      onAnimationStart={() => setIsVisible(true)}
    >
      <ImagePreview
        src={imageUrl}
        alt={product.name ?? ""}
        className="w-full h-24 md:h-36 lg:h-48 object-cover rounded-t-lg"
        width={500}
        height={300}
      />
      <ProductDetail label="ID" value={product.id ?? "-"} />
      <ProductDetail label="Nama" value={product.name ?? "-"} />
    </button>
  );
};

const ProductDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-row mt-2">
    <span className="text-black text-left dark:text-white text-sm min-w-[48px]">
      {label}
    </span>
    <span className="text-black text-left dark:text-white text-sm min-w-[2px]">
      :
    </span>
    <span className="text-black text-left text-sm w-full pl-2 break-all">
      {value}
    </span>
  </div>
);
