"use client";

import Template from "@/components/layout/template";
import TextGradient from "@/components/textGradient";
import projetos from "@/constants/projetos";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowLeft,
  IconBrandFigma,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { useParams } from "next/navigation";

export default function Project() {
  const { id } = useParams();
  const project = projetos.find((proj) => proj.id === Number(id));

  if (!project) {
    return (
      <Template className="min-h-screen px-4 py-16">
        <div className="w-full max-w-3xl rounded-2xl border border-violet-400/60 dark:border-violet-500/40 bg-white/80 dark:bg-zinc-900/70 p-8 text-center backdrop-blur">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-200">
            Projeto não encontrado
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            O projeto que voce tentou acessar nao existe ou foi removido.
          </p>
          <Link
            href="/#projetos"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-violet-500 px-4 py-2 text-violet-700 dark:text-violet-300 transition hover:bg-violet-500/15 dark:hover:bg-violet-500/20"
          >
            <IconArrowLeft size={18} />
            Voltar para projetos
          </Link>
        </div>
      </Template>
    );
  }

  const projectLinks = [
    {
      label: "Figma",
      href: project.linkProjects[0],
      icon: IconBrandFigma,
    },
    {
      label: "GitHub",
      href: project.linkProjects[1],
      icon: IconBrandGithub,
    },
    {
      label: "Acessar",
      href: project.linkProjects[2],
      icon: IconExternalLink,
    },
  ].filter((item) => item.href && item.href.trim().length > 0);

  return (
    <Template className="min-h-screen px-4 py-10 md:py-14">
      <section className="w-full max-w-screen-xl flex flex-col items-center lg:mt-12 gap-10 md:gap-12">
        <div className="w-full flex items-start justify-start">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-400/70 dark:border-violet-500/50 px-4 py-2 text-sm md:text-base text-violet-700 dark:text-violet-300 transition hover:bg-violet-500/15 dark:hover:bg-violet-500/20"
          >
            <IconArrowLeft size={18} />
            Voltar para projetos
          </Link>
        </div>

        <header className="w-full flex flex-col items-center gap-4 text-center">
          <TextGradient className="text-3xl md:text-5xl font-bold leading-tight">
            {project.name}
          </TextGradient>
          <p className="max-w-4xl text-zinc-700 dark:text-zinc-300 text-base md:text-lg">
            {project.desc}
          </p>
        </header>

        <article className="w-full rounded-3xl border border-violet-400/60 dark:border-violet-500/40 bg-white/70 dark:bg-zinc-900/70 p-4 md:p-6 lg:p-8 backdrop-blur-sm">
          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-violet-400/40 dark:border-violet-500/30 shadow-[0_0_60px_-30px_rgba(102,32,255,0.9)]">
            <div className="relative w-full aspect-[16/9] bg-zinc-100 dark:bg-zinc-950">
              <Image
                src={project.image}
                alt={`Imagem do projeto ${project.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3 justify-center">
              {project.stacks.map((stack) => (
                <span
                  key={`${project.id}-${stack}`}
                  className="rounded-lg border border-violet-400 dark:border-violet-500 bg-white/80 dark:bg-transparent px-3 py-1 text-sm font-medium text-violet-700 dark:text-violet-300"
                >
                  {stack}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/85 dark:bg-zinc-900/70 p-5 md:p-6">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Meu papel
                </h2>
                <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.myRole}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  {project.software && (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-700 dark:text-fuchsia-200">
                      <Image
                        src="/images/software.svg"
                        alt="Projeto de software"
                        width={16}
                        height={16}
                      />
                      Software
                    </span>
                  )}
                  {project.design && (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-700 dark:text-fuchsia-200">
                      <Image
                        src="/images/design.svg"
                        alt="Projeto de design"
                        width={16}
                        height={16}
                      />
                      Design
                    </span>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/85 dark:bg-zinc-900/70 p-5 md:p-6">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Links do projeto
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {projectLinks.length > 0 ? (
                    projectLinks.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-violet-500/60 px-4 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition hover:bg-violet-500/15 dark:hover:bg-violet-500/20"
                        >
                          <Icon size={18} />
                          {item.label}
                        </Link>
                      );
                    })
                  ) : (
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Links nao disponiveis para este projeto.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/85 dark:bg-zinc-900/70 p-5 md:p-6">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Minhas contribuições
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-zinc-700 dark:text-zinc-300">
                {project.myContributions.map((contribution, index) => (
                  <li
                    key={`${project.id}-contribution-${index}`}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-violet-500 dark:bg-violet-400" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </Template>
  );
}
