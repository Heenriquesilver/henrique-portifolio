"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/assets/file/curriculo-current.pdf"; // Substitua pelo caminho real do seu PDF
    link.download = "curriculo-current.pdf"; // Nome do arquivo que será salvo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Desenvolvedor de Sistemas</span>
            <h1 className="h1 mb-6">
              Olá Eu Sou <br />{" "}
              <span className="text-accent-hover">Henrique Oliveira</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Engenheiro de sistemas elegantes, intuitivos e adaptavéis.
              Responsável por tranformar ideias inovadoras e sonhos em realidade
              através da tecnologia.
            </p>

            {/* button e social midia */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={downloadFile}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
