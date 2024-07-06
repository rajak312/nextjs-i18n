import initTranslations from "app/i18n";
import TranslationsProvider from "app/providers/translations";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { dir } from "i18next";
import { i18nConfig } from "i18nConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const namespaces = ["home", "common"];
  const { t, resources } = await initTranslations(locale, namespaces);
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <TranslationsProvider
          locale={locale}
          namespaces={namespaces}
          resources={resources}
        >
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}