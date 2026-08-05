import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOTEC Service | Tecnología que impulsa tu día",
  description: "Soluciones tecnológicas, equipos y soporte profesional.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
