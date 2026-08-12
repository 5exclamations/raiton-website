import { LogisticsPage } from "@/components/localized-pages";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("tr", "logistics");

export default function Page() {
  return <LogisticsPage locale="tr" />;
}
