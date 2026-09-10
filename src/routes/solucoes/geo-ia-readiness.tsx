import { createFileRoute } from "@tanstack/react-router";
import ServiceLandingPageV2 from "@/components/ServiceLandingPageV2";
import { geoAuditService } from "@/content/serviceGeoAuditV2";
import { createServiceHead } from "@/lib/serviceSeo";

const data = geoAuditService;

export const Route = createFileRoute("/solucoes/geo-ia-readiness")({
  head: () => createServiceHead(data),
  component: () => <ServiceLandingPageV2 data={data} />,
});
