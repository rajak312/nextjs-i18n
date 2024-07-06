import { useTheme } from "app/hooks/theme";
import React, { useState } from "react";
import type { ReactNode } from "react";
import { i18nConfig } from "i18nConfig";
import LanguageChanger from "../LanguageChanger";

export interface DefaultLayoutProps {
  children?: ReactNode;
}

export function withDefaultLayout<T extends object>(
  Component: React.ComponentType<T>
) {
  return function WrappedComponent(props: T) {
    const { theme, switchTheme } = useTheme();
    const [locale, setLocale] = useState<string>();

    function handleSetLocale(locale: string) {
      setLocale(locale);
    }

    return (
      <div className="defaultLayout-container">
        <nav className="navbar">
          <div className="navbar-brand">next-i18n</div>

          <div>
            <button className="navbar-button" onClick={switchTheme}>
              {theme === "light" ? "🌙" : "🌞"}
            </button>
            <LanguageChanger />
          </div>
        </nav>
        <Component {...props} />
      </div>
    );
  };
}
