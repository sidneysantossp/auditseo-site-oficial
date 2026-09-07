import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.content;

export const Route = createFileRoute("/solucoes/conteudo-por-intencao")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPage data={data} />,
});
