import { Search } from "lucide-react";
function Servicos() {
  return (
    <>
      <section
        id="servicos-section"
        className="relative min-h-screen overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden text-center">
          <h1 className="text-3xl font-bold">Confira nossos serviços!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-50">
            <div className="pb-20 shadow-xl bg-[#f0f0f096] rounded-xl  text-2xl font-bold">
              <Search className="mt-5 ml-5" />
              <p>Fazemos isso</p>
            </div>
            <div className="pb-20 shadow-xl bg-[#f0f0f096] rounded-xl text-2xl font-bold">
              <Search className="mt-5 ml-5" />
              <p>E aquilo</p>
            </div>
            <div className="pb-20 shadow-xl bg-[#f0f0f096] rounded-xl text-2xl font-bold">
              <Search className="mt-5 ml-5" />
              <p>E também aquilo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicos;
