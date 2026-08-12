import { HomePage } from "@/components/localized-pages";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("tr", "home");

export default function Page() {
  return <HomePage locale="tr" />;
}
