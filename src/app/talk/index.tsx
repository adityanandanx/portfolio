"use client";
import Button from "@/components/ui/Button";
import Field from "@/components/ui/Field";
import Socials from "@/components/ui/Socials";
import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import LetterAnim from "../../components/animations/LetterAnim";

interface TalkProps {}

const Talk: FC<TalkProps> = ({}) => {
  return (
    <section id="contact" className="relative w-full p-0">
      <div className="w-full h-full p-10 py-16 md:p-24 bg-stone-800 dark:bg-stone-700 text-stone-50 rounded-t-xl flex flex-col items-start justify-between">
        <div className="h-full">
          <h2 className="text-2xl font-Syne font-medium">
            <LetterAnim text="Have a project for Me?" />
          </h2>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-Syne font-bold">
            <LetterAnim text="Let's Talk" />
            {/* Let&rsquo;s Talk */}
          </h1>
          <form
            action="mailto:dev2005adi@gmail.com"
            method="get"
            encType="text/plain"
            className="max-w-md flex flex-col gap-3 flex-1 my-20"
          >
            <Field required id="subject" labelText="Subject" />
            <Field required id="email" labelText="Your Email" />
            <Field
              required
              id="body"
              labelText="Message"
              placeholder="Your Message"
              type="textarea"
            />
            <Button className="text-base leading-none py-4 bg-stone-50 text-stone-900 self-start">
              Get in touch
              <MdChevronRight className="transform scale-150" />
            </Button>
          </form>
        </div>
        <footer className="w-full flex flex-col md:flex-row md:items-center justify-between">
          <span className="text-2xl font-Syne font-medium">
            <LetterAnim text="Aditya Nandan" />
            {/* Aditya Nandan */}
          </span>
          <Socials
            className="text-stone-50"
            socials={[
              {
                name: "Linkedin",
                href: "https://www.linkedin.com/in/aditya-nandan-thats-it/",
                icon: <FaLinkedin />,
              },
              {
                name: "Twitter",
                href: "https://twitter.com/iMADi69235681",
                icon: <FaTwitter />,
              },
              {
                name: "Github",
                href: "https://github.com/iMADi-ARCH/cryptracker",
                icon: <FaGithub />,
              },
            ]}
          />
        </footer>
      </div>
    </section>
  );
};

export default Talk;
