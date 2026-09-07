import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.authority;

export const Route = createFileRoute("/solucoes/autoridade-de-entidade")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPage data={data} />,
});
