import { MarketingShell } from "@/app/components/MarketingShell";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <MarketingShell>{children}</MarketingShell>;
}
