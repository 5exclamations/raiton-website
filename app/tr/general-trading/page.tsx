import { GeneralTradingPage } from "@/components/localized-pages";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("tr", "generalTrading");

export default function Page() {
  return <GeneralTradingPage locale="tr" />;
}
