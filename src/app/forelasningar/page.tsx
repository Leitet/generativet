import * as React from "react"
import TopLogo from "@/components/ui/top-logo";
import BottonNav from "@/components/ui/bottom-nav";
import { Header1, Header2, Header3 } from "@/components/ui/headers";
import { ExternalLink } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";


export default function Forelasningar() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <TopLogo></TopLogo>
      
      <Header1>
        Föreläsningar och Workshops
      </Header1>

      <div className="mb-3 mt-6 grid font-thin items-center text-center justify-center text-2xl lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <p>
          Välkommen till Generativet! Vi är en grupp passionerade föreläsare som ständigt är på jakt efter nya utmaningar. Oavsett om du behöver en inspirerande föreläsning eller en interaktiv workshop, har vi något för dig.
        </p>
        <p>
          Normalt sett föreläser vi individuellt, men vi är flexibla och öppna för olika typer av uppdrag. Behöver du en föreläsning på en timme eller en hel dags workshop för en mindre grupp? Inga problem, vi fixar det!
        </p>

        <Image           
          className="dark:drop-shadow-[0_0_0.5rem_#ffffff70] mt-10 mb-5"
          src="/team.png"
          alt="Tecknad representation av Fredrik, Johan och Anders"
          width={1000}
          height={400}
          priority
        ></Image>

        <Header3>Anders Bjarby</Header3>
        <p>Få kan mäta sig med Anders när det gäller att överraska, skrämma och fascinera inom AI! Han är känd som AI-promptens värsta fiende och har blivit kallad <Link href="https://medium.com/@levi.a.sweeney/im-not-the-first-ai-audio-dramatist-this-guy-is-52725c513971">&quot;Den första AI-ljuddramaturgen&quot;</Link>. Med sin klurighet och en räv bakom örat kommer Anders garanterat att hålla dig på tårna. Redan innan presentationen börjar kan du räkna med att bli överraskad.</p>

        <Header3>Fredrik Ahlgren</Header3>
        <p>Fredriks engagemang är smittsamt. Han brinner för AI och vill inget hellre än att du också ska göra det. Medan andra kopplar av med en öl framför fotbollen, gräver Fredrik ner sig i en ny lokal AI-modell. Han är en eftertraktad föreläsare inte bara inom AI, utan också inom IoT och energisektorn. Fredrik kommer att få dig att se på teknik på ett helt nytt sätt.</p>

        <Header3>Johan Leitet</Header3>
        <p>Med över 20 års erfarenhet av föreläsningar har Johan en unik förmåga att anpassa sig till sin publik. Hans hjärta ligger inom mjukvaruutveckling, och han har undervisat webbprogrammerare sedan IT-krashen. Att föreläsa för utvecklare är därför något han finner extra roligt. Johan har en förmåga att göra även de mest komplicerade ämnen intressanta och engagerande.</p>

        <Header2>Referenser</Header2>
        
        <p>Vi har haft äran att föreläsa för en mängd olika organisationer och institutioner. Våra föreläsningar har hållits på stora spelstudios, universitet, folkhögskolor, IT-konsultfirmor, mäklarbyråer, revisorskonsulter, kommuner och regioner. Dessutom har vi medverkat i flera poddar.</p>

        <blockquote className="pl-5 italic mt-3">
           &quot;WOW vilken föreläsning! Du gjorde ett kanonjobb som föreläsare, mycket intressant som skapade en hel del tankar och diskussioner efteråt. Sällan jag blir så tagen av en föreläsning.
          En stor eloge till att lyckas fånga en grupp där många inte har ett stort teknikintresse men att på ett tydligt och bra sätt förmedla att detta är framtiden, vare sig vi vill eller inte. Det märks verkligen att du brinner för ämnet och jag är övertygad om att du gör STOR skillnad. Bra jobbat! Jag kommer att följa både podden och erat fortsatta arbete, stort!&quot;
          <p className="text-right">/Maria</p>
        </blockquote>

        <Header2>Bokningar</Header2>
        <p>
          Intresserad av att boka oss? Alla bokningar hanteras av <Link href="https://stormblad.se"> <ExternalLink className="inline"></ExternalLink> Stormblad</Link>. Kontakta Hanna eller Kristina så hjälper de er att hitta ett upplägg som passar just er. Vi ser fram emot att samarbeta med er!
        </p>
      </div>

      <BottonNav></BottonNav>
    </main>
  );
}
