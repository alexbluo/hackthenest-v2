import FAQ from "./FAQ";

const FAQSection = () => {
  return (
    <section id="faq">
      <h2 className="">FAQ</h2>
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-16">
        <div className="flex w-full flex-col gap-4">
          <FAQ question="A">A contents</FAQ>
          <FAQ question="B">B contents</FAQ>
          <FAQ question="C">C contents</FAQ>
          <FAQ question="D">D contents</FAQ>
        </div>
        <div className="flex w-full flex-col gap-4">
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
