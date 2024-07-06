"use client";
import { withDefaultLayout } from "app/layout/Default";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t("header")}</h1>
      <button>hello</button>
      <button>hey</button>
    </main>
  );
}

export default withDefaultLayout(Home);
