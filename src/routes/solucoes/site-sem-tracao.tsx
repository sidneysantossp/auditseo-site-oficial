import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.activation;

export const Route = createFileRoute("/solucoes/site-sem-tracao")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPage data={data} />,
});
