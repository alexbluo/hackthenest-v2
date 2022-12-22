import FAQ from "./FAQ";

const FAQSection = () => {
  return (
    <section className="bg-purple-800 h-screen text-6xl" id="faq">
      <h2 className="text-center">FAQ</h2>
      <div className="grid grid-cols-2 gap-4">
        <FAQ question="A">A contents</FAQ>
        <FAQ question="B">B contents</FAQ>
        <FAQ question="C">C contents</FAQ>
        <FAQ question="D">D contents</FAQ>
        <FAQ question="E">E contents</FAQ>
        <FAQ question="F">F contents</FAQ>
        <FAQ question="G">G contents</FAQ>
        <FAQ question="H">H contents</FAQ>
        <FAQ question="I">I contents</FAQ>
        <FAQ question="J">J contents</FAQ>
      </div>
    </section>
  );
};

export default FAQSection;
