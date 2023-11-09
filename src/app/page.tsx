"use client";

import { useState } from "react";
import Link from "next/link";
import Menu from "./components/Menu";
import Header from "./components/Header";

export default function Home() {
  const [exibirDiv, setExibirDiv] = useState(false);
  return (
    <main>
      <div className="flex min-h-screen">
        {exibirDiv  && (

          <Menu />
        )}
        <Header exibirMenu={exibirDiv} setExibirMenu={(value) => setExibirDiv(value)}/>
      </div>

      <div className="flex flex-row">
        <Link href={"/sobre_mim"}>
          <p>Sobre</p>
        </Link>
      </div>
    </main>
  );
}
