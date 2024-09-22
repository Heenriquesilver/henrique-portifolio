"use client";

import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
// import { FaHtml5, FaCss3,FaJs ,FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiKnexdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "Sobre Mim",
  description:
    "Profissional experiente e em constante evolução, com mais de 5 anos de atuação em grandes projetos, sou especialista em oferecer soluções inovadoras e práticas que impulsionam negócios de todos os portes. Minha trajetória é marcada pela entrega de resultados significativos, sempre alinhando criatividade e eficiência para enfrentar desafios complexos e transformar oportunidades em sucesso. Estou comprometido em gerar valor e impactar positivamente cada projeto em que me envolvo.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Henrique Oliveira",
    },
    {
      fieldName: "Telefone:",
      fieldValue: "(+55) 81 9 8748-2058",
    },
    {
      fieldName: "Experiência",
      fieldValue: "+5 Anos",
    },
    {
      fieldName: "Skype",
      fieldValue: "luizhenriquechaves_2",
    },
    {
      fieldName: "Indiomas",
      fieldValue: "Português, Inglês",
    },
    {
      fieldName: "Email",
      fieldValue: "Henriquewebdev95@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha Experiência",
  description:
    "Desenvolvi diversos tipos de sistemas nas áreas de logística de entrega e operações, análise de percepção, pesquisa e e-commerce.",
  items: [
    {
      company: "Novo Atacarejo",
      position: "Desenvolvedor Full-Stack",
      duration: "06/2022 - 09/2024",
    },
    {
      company: "DeepScore",
      position: "Desenvolvedor Front-End",
      duration: "03/2024 - 07/2024",
    },
    {
      company: "Wisell",
      position: "Desenvolvedor React/React-native",
      duration: "2022 - 2024",
    },

    {
      company: "Opera Labs",
      position: "Desenvolvedor web",
      duration: "2020 - 2021",
    },

    {
      company: "E-commerce Startup",
      position: "Freelancer",
      duration: "2020",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Minha Foramção",
  description:
    "Estou constantemente investindo em minha formação por meio de cursos e capacitações, além de me dedicar a projetos pessoais e à prática intensiva de programação. Essa busca incessante pelo conhecimento me mantém na vanguarda das tendências e inovações no universo da tecnologia, garantindo que eu esteja sempre preparado para enfrentar novos desafios.",
  items: [
    {
      instituition: "UNOPAR",
      degree: "Análise e Desenvolvimento de sistemas",
      duration: "3 anos",
    },
    {
      instituition: "Udemy",
      degree: "Desenvolvimento React com Redux, Hooks, GraphQL",
      duration: "43 horas",
    },

    {
      instituition: "DankiCode",
      degree: "Desenvolvedor Web Full-Stack",
      duration: "6 meses",
    },
    {
      instituition: "Digital Inovation One DIO",
      degree: "Node.js com Banco de dados Relacionais(SQL)",
      duration: "1 mes",
    },
    {
      instituition: "ADA Tech",
      degree: "Front End",
      duration: "19 Horas",
    },
    {
      instituition: "Digital Inovation One DIO",
      degree: "Redux com ReactJs",
      duration: "2022",
    },
    {
      instituition: "Digital Inovation One DIO",
      degree: "Debugging e Error Handling",
      duration: "2022",
    },
    {
      instituition: "Digital Inovation One DIO",
      degree: "Sistemas para internet com Bootstrap",
      duration: "2022",
    },
    {
      instituition: "Digital Inovation One DIO",
      degree: "TypeScript",
      duration: "2022",
    },
    {
      instituition: "",
      degree: "Entre Outros ... 📚",
      duration: "",
    },
  ],
};

const skills = {
  title: "Principais Tecnólogias",
  description:
    "Principais tecnólogias utilizadas ao longo da minha jornada como desenvolvedor, nas quais realizei diversos projetos práticos e eficientes. ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },

    {
      icon: <SiKnexdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre Mim</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-hover">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-hover">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-6 ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                            <p className="text-white/60">{item.instituition}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]  text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232320] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="gap-4 ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
