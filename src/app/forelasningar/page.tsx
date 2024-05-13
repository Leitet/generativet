
import * as React from "react"
import TopLogo from "@/components/ui/top-logo";
import BottonNav from "@/components/ui/bottom-nav";
import { Header1, Header2 } from "@/components/ui/headers";


export default function Forelasningar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <TopLogo></TopLogo>
      
      <Header1>
        Föreläsningar och Workshops
      </Header1>

      <div className="mb-32 grid font-thin items-center text-center justify-center text-2xl lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <p>
        Vi i Generativet är flitigt anlitade föreläsare och är öppna för uppdrag! 
        </p>

        <p>
        Tillsammans har vi 
        </p>

        <Header2>Anders Bjarby</Header2>
        <p>Få kan mäta sig med Anders när det kommer till överraska, skrämma och fascinera när det komner till AI.</p>

        <Header2>Fredrik Ahlgren</Header2>
        <p>Fredriks engagemang går oingen oberörd förbi. Fredrik brinner för ämnet och </p>

        <Header2>Johan Leitet</Header2>
        <p>Med över 20 års föreläsningserfarenhet har Johan en förmåga att anpassa sina föreläsningar till målgruppen.</p>

      </div>

        <BottonNav></BottonNav>
    </main>
  );
}
