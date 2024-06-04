import Starfield from "@/components/Starfield";
import { getListImages } from "@/services/image.service";
import { getListProducts } from "@/services/product.service";
import Header from "@/components/Header";
import { LandingPagePartial } from "@/partials/LandingPagePartial";
import { ProductPagePartial } from "@/partials/ProductPagePartial";

const HomePage = async () => {
  const products = await getListProducts();
  const images = await getListImages();

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between px-6 lg:px-8"
      id="root"
    >
      <Starfield />
      <div className="z-1 relative">
        <LandingPagePartial />
        <ProductPagePartial products={products.data} images={images.data} />
        <footer className="w-full max-w-5xl text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2024 Panha Store. Hak cipta dilindungi.
          </p>
        </footer>
        <Header />
      </div>
    </main>
  );
};

export default HomePage;
