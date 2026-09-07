import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.migration;

export const Route = createFileRoute("/solucoes/migracao-risco-seo")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPage data={data} />,
});
