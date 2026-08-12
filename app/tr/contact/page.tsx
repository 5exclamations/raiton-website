import { ContactPage } from "@/components/localized-pages";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("tr", "contact");

export default function Page() {
  return <ContactPage locale="tr" />;
}
