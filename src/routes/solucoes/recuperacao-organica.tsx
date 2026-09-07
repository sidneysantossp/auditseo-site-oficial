import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPageV2 from "@/components/ServiceLandingPageV2";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.recovery;

export const Route = createFileRoute("/solucoes/recuperacao-organica")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPageV2 data={data} />,
});
