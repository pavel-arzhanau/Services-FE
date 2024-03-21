"use client";

import { useState } from "react";
import MainLayout from "./components/MainLayout/MainLayout";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <MainLayout isChecked={isChecked} setIsChecked={setIsChecked}>
      <main>Main content</main>
    </MainLayout>
  );
}
