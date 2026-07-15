import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "115學年度｜新生定錨探索課程",
  description: "健康產業科技管理學系 115 學年度新生定錨探索課程完整日程。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
