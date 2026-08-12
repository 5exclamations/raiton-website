import { OffshorePage } from "@/components/localized-pages";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("tr", "offshore");

export default function Page() {
  return <OffshorePage locale="tr" />;
}
