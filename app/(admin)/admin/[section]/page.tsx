import { PortalSection } from "@/app/components/PortalShell";

export default async function AdminSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return <PortalSection portal="admin" section={section} />;
}
