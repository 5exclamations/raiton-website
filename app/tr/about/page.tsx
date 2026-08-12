import { AboutPage } from "@/components/localized-pages";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("tr", "about");

export default function Page() {
  return <AboutPage locale="tr" />;
}
