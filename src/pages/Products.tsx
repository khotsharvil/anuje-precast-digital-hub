import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Products from '@/components/Products';

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;