import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.foundation;

export const Route = createFileRoute("/solucoes/projetos-comecando-do-zero")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPage data={data} />,
});
