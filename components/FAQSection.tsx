import FAQ from "./FAQ";

const FAQSection = () => {
  return (
    <section className="bg-purple-800 h-screen" id="faq">
      <h1 className="text-center">FAQ</h1>
      <div className="grid grid-cols-2">
        <FAQ question="A">rrjen</FAQ>
        <FAQ question="B"> </FAQ>
        <FAQ question="C"> </FAQ>
        <FAQ question="D"> </FAQ>
        <FAQ question="E"> </FAQ>
        <FAQ question="F"> </FAQ>
        <FAQ question="G"> </FAQ>
        <FAQ question="H"> </FAQ>
        <FAQ question="I"> </FAQ>
        <FAQ question="J"> </FAQ>

      </div>
    </section>
  );
};

export default FAQSection;
