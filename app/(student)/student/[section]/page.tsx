import { PortalSection } from "@/app/components/PortalShell";

export default async function StudentSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return <PortalSection portal="student" section={section} />;
}
