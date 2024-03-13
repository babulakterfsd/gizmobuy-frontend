import Newsletter from '@/components/homepage/Newsletter';
import ScrollToTop from '@/components/ui/ToTop';

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="main-container min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to GizmoBuy</h1>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
