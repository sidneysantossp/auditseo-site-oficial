import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.geo;

export const Route = createFileRoute("/solucoes/geo-ia-readiness")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPage data={data} />,
});
