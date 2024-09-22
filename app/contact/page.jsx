"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@radix-ui/react-select";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(+55) 81 98748-2058",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "henriquewebdev95@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Localizado em",
    description: "Recife-PE, Brasil",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action="https://formsubmit.co/henriquewebdev95@gmail.com"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent-hover">Fale Comigo</h3>
              <p className="text-white/60"></p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                  type="firstname"
                  name="name"
                  placeholder="Primeiro Nome"
                  required
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                  type="lastname"
                  name="lastname"
                  placeholder="Sobrenome"
                  required
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                  type="email"
                  name="email"
                  placeholder="Endereço de email"
                  required
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent-hover font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                  type="phone"
                  name="telefone"
                  placeholder="Telefone"
                  required
                />
              </div>
              {/* select */}
              <Select name="serviço">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione um serviço</SelectLabel>
                    <SelectItem value="desenvolvimentWeb">
                      Desenvolvimento Front-End
                    </SelectItem>
                    <SelectItem value="desenvolvimentoMobile">
                      Desenvolvimento Mobile
                    </SelectItem>
                    <SelectItem value="desenvolvimentoFullStack">
                      Desenvolvimento Full Stack
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <textarea
                className=" h-[200px] flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-hover focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Digite sua mensagem aqui."
                name="mensagem"
                required
              />
              <button
                size="md"
                className="h-[44px] px-6 bg-accent-hover text-primary hover:bg-accent-hover max-w-40 inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors  hover:text-white/60"
                type="submit"
              >
                Enviar Mensagem
              </button>
              <input type="hidden" name="_subject" value="Novo Contato" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Obrigado por mandar sua mensagem, irei te responder o quanto antes!"
              ></input>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-hover rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 text-xl>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
