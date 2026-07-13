import { PortalSection } from "@/app/components/PortalShell";

export default async function TeacherSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return <PortalSection portal="teacher" section={section} />;
}
