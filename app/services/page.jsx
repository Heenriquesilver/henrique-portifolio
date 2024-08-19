"use client";

import { GoArrowDownRight } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Front-End",
    description:
      "Desenvolvimento de sistemas para internet, 100% responsivos e escalaveis, foco em Design de interface e boa experiência do úsuario.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Criação de sistemas com grande fluidez e escalabilidade, garantindo uma boa experiência de navegação atendendo as necessidades dos úsuarios para cada tipo de sistema ",
    href: "",
  },
  {
    num: "03",
    title: "Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicativos android/ios utilizando as tecnologias mais atuais e aderidas pelas grandes empresas.",
    href: "",
  },
  {
    num: "04",
    title: "Full-Stack",
    description:
      "Desenvolvimento de sistema completo para sites e aplicativos que precisam de consumo de dados externos e/ou cadastrar informações dinamicas.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <GoArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
