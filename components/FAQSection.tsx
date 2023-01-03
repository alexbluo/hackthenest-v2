import FAQ from "./FAQ";

const FAQSection = () => {
  return (
    <section className="h-screen bg-orange text-6xl" id="faq">
      <h2 className="text-center">FAQs</h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-4 w-full">
          <FAQ question="A">A contents</FAQ>
          <FAQ question="B">B contents</FAQ>
          <FAQ question="C">C contents</FAQ>
          <FAQ question="D">D contents</FAQ>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <FAQ question="E">E contents</FAQ>
          <FAQ question="F">F contents</FAQ>
          <FAQ question="G">G contents</FAQ>
          <FAQ question="H">H contents</FAQ>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
