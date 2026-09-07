import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPageV2 from "@/components/ServiceLandingPageV2";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.foundation;

export const Route = createFileRoute("/solucoes/projetos-comecando-do-zero")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPageV2 data={data} />,
});
