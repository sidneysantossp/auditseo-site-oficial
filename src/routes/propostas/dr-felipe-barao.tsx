import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";
import { createSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/propostas/dr-felipe-barao")({
  head: () =>
    createSeoHead({
      path: "/propostas/dr-felipe-barao",
      title: "Proposta de Crescimento Orgânico para Dr. Felipe Barão | AUDITSEO",
      description:
        "Proposta confidencial da AUDITSEO para crescimento orgânico, autoridade digital e Search Intelligence do Dr. Felipe Barão.",
      robots: "noindex,nofollow",
    }),
  component: App,
});
