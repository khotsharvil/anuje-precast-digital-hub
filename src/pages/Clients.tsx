import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';

const ClientsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPage;