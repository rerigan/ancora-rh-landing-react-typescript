import "./Hero.css";

function Hero() {
  return (
    <>
      <section
        id="hero-section"
        className="section relative min-h-screen flex pt-16 overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-40 overflow-hidden">
          <div className="flex justify-around items-center overflow-hidden flex-wrap md:flex-nowrap">
            <div className="block p-6 md:p-20">
              <h1 className="text-5xl font-bold pb-6">
                Conectamos <span className="text-blue-600">empresas</span> com
                talentos
              </h1>
              <p>
                Encontre o talento perfeito para o seu time. Nosso time de
                recrutamento especializado torna a experiência simples, rápida e
                efetiva.
              </p>
              <button className="font-bold text-lg p-2 mt-4 bg-blue-600 text-white rounded px-6">
                Saiba Mais
              </button>
            </div>
            <img
              src="./hero-img.jpg"
              className="block md:flex md:w-[50%]  object-cover rounded-lg max-w-[95%]"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
