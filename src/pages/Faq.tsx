import ScrollToTop from '@/components/ui/ToTop';

const Faq = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="main-container mt-6 lg:mt-10 pb-6 lg:pb-10 grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-12 md:col-span-7">
          <h3 className="text-custom-black text-3xl font-semibold mb-10">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="col-span-12 md:col-span-5">
          <p>test 2</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
