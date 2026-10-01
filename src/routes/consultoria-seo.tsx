import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPageV2 from "@/components/ServiceLandingPageV2";
import { servicePages } from "@/content/services";
import { createServiceHead } from "@/lib/serviceSeo";

const data = servicePages.consultoriaSeo;

export const Route = createFileRoute("/consultoria-seo")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPageV2 data={data} />,
});
