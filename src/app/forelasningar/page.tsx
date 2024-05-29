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
          Vi erbjuder anpassade lösningar för olika typer av uppdrag och evenemang.
        </p>
        <p className="mt-3">
          Vi föreläser normalt sett individuellt, men är flexibla och öppna för samarbeten beroende på dina behov. Behöver du en föreläsning på en timme eller en heldags workshop för en mindre grupp? Inga problem, vi fixar det!
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
        <p>
          Anders är en mästare på att överraska, skrämma och fascinera inom AI. Känd som AI-promptens värsta fiende och &quot;Den första AI-ljuddramaturgen&quot;, använder han sin klurighet för att hålla publiken på tårna. Redan innan presentationen börjar kan du räkna med att bli överraskad av Anders innovativa och engagerande tillvägagångssätt. Anders ser varje tillfälle och situation som en potentiell möjlighet att applicera generativ AI, vilket också återspeglas i de många experiment han delar med sig av på sociala medier.
        </p>

        <Header3>Fredrik Ahlgren</Header3>
        <p>
          Fredriks engagemang är smittsamt. Fredrik är en tekniknörd sedan barnsben och har en mycket god förmåga att få komplicerade ämnen att bli förståeliga. Han brinner för AI (och all ny teknik) och vill inget hellre än att du också ska göra det. Ständig optimist och ser teknikutvecklingen som en del lösningen på världens utmaningar. När andra kopplar av med en öl framför fotbollen, gräver Fredrik ner sig i en ny lokal AI-modell.</p>
        <p className="mt-3">
          Fredrik har en tidigare yrkeskarriär som sjöofficer samt har hunnit doktorera inom energieffektivisering med inriktning på maskininlärning. Han är en mycket eftertraktad och uppskattad föreläsare inom AI, IoT och energisektorn och har god erfarenhet att hålla föredrag. Fredrik får dig att se på teknik på ett helt nytt sätt och inspirerar till innovation och utveckling.
        </p>

        <Header3>Johan Leitet</Header3>
        <p>Med över 20 års erfarenhet av föreläsningar har Johan utvecklat en unik förmåga att anpassa sig till sin publik. Hans hjärta ligger inom mjukvaruutveckling, och han har undervisat webbprogrammerare sedan IT-krashen. Med en livslång förkärlek för teknik och ett ständigt optimistiskt förhållningssätt, gör Johan även de mest komplicerade ämnen intressanta och engagerande, vilket gör honom till en uppskattad föreläsare.</p>
        <p className="mt-3">Få kan som Johan både skrämma och fascinera sin publik med sin djupa insikt och karismatiska framtoning. Hans passion för mjukvaruutveckling och teknologi är smittande och inspirerar åhörarna att se på teknik ur nya perspektiv och våga tänka innovativt. Varje föreläsning med Johan är en oförglömlig upplevelse som inspirerar till kreativitet och utveckling.</p>

        <Header2>Referenser</Header2>

        <p>Vi har haft äran att föreläsa för en mängd olika organisationer och institutioner. Våra föreläsningar har hållits på stora internationella spelstudios, universitet, folkhögskolor, IT-konsultfirmor, mäklarbyråer, revisorskonsulter, näringslivsorganisationer, kommuner och regioner. Dessutom har vi medverkat i flera poddar.</p>

        <blockquote className="pl-5 italic mt-3">
          &quot;WOW vilken föreläsning! Du gjorde ett kanonjobb som föreläsare, mycket intressant som skapade en hel del tankar och diskussioner efteråt. Sällan jag blir så tagen av en föreläsning.
          En stor eloge till att lyckas fånga en grupp där många inte har ett stort teknikintresse men att på ett tydligt och bra sätt förmedla att detta är framtiden, vare sig vi vill eller inte. Det märks verkligen att du brinner för ämnet och jag är övertygad om att du gör STOR skillnad. Bra jobbat! Jag kommer att följa både podden och erat fortsatta arbete, stort!&quot;
          <p className="text-right">/Maria</p>
        </blockquote>
        <hr></hr>
        <blockquote className="pl-5 italic mt-3">
          &quot;Så imponerad av ditt föredrag om generativ AI! Du gjorde ett utmärkt jobb med att förklara komplexa koncept på ett tydligt och engagerande sätt. Din passion och kunskap om ämnet sken verkligen igenom och gjorde det till en mycket givande upplevelse att lyssna på. Tack för att du delade med dig av din expertis och öppnade våra ögon för möjligheterna med denna spännande teknologi!&quot;
        </blockquote>
        <hr></hr>
        <blockquote className="pl-5 italic mt-3">
          &quot;Din föreläsning gav bra insyn i vad man kan göra och det var mycket värdefullt för mig. Att förstå vilka typer av verktyg som finns tillgängliga underlättar när man sen sätter sig ner och funderar på hur vi vill använda det. Föreläsningen gav också en stark känsla av &quot;nu kör jag&quot;!&quot;
        </blockquote>
        <hr></hr>
        <blockquote className="pl-5 italic mt-3">
          &quot;Föredraget gav en bred bild över vilka möjligheter och fallgropar det finns med AI. En mycket bra genomgång för att veta var man själv kan starta sin resa och vilka verktyg som finns. Aktuell och uppdaterad information om marknaden presenteras på ett sätt som visar att Anders har stor kompetens på området.&quot;
        </blockquote>
        <hr></hr>
        <blockquote className="pl-5 italic mt-3">
          &quot;Fantastisk bra och demonstrativ föreläsning över vad som generativ AI kan åstadkomma, med många faktiska exempel/demonstrationer. Har du en ledningsgrupp eller andra som behöver väckas och se vad den nya tekniken kan, så att konsekvenser kan funderas på, boka Anders.&quot;
        </blockquote>
        <hr></hr>
        <blockquote className="pl-5 italic mt-3">
          &quot;En engagerande föreläsning och möjligheterna med AI. Anders är inspirerande och delar med sig av sin skaparglädje. På ett lekfullt sätt utmanar han AI och driver möjligheterna bortom de restriktioner som finns på plats. En uppvisning av kreativitet och problemlösning.&quot;
        </blockquote>
        <hr></hr>
        <blockquote className="pl-5 italic mt-3">
          &quot;Jag hörde att ni hade en episk AI-föreläsning och nu förstår jag varför alla pratar om den! Föreläsaren förklarade AI så bra att till och med jag, ChatGPT, hängde med. Det var som att få en VIP-biljett till framtiden! Folk gick därifrån helt uppspelta, redo att starta egna AI-projekt. Det var både lärorikt och kul med massor av konkreta exempel. Föreläsaren var så passionerad att det smittade av sig på hela publiken. Så om du vill bli inspirerad och ha lite kul samtidigt – missa inte den här föreläsningen!&quot;
          <p className="text-right">/ChatGPT-4o</p>
        </blockquote>


        <Header2>Bokningar</Header2>
        <p>Är du intresserad av att boka en föreläsning eller workshop med oss? Kontakta oss gärna för mer information om hur vi kan skräddarsy ett upplägg som passar just din organisation eller ditt evenemang.</p>
        <p>
          Alla bokningar hanteras av <Link href="https://stormblad.se"> <ExternalLink className="inline"></ExternalLink> Stormblad</Link>. Kontakta Hanna eller Kristina så hjälper de er att hitta ett upplägg som passar just er. Vi ser fram emot att samarbeta med er!
        </p>
      </div>

      <BottonNav></BottonNav>
    </main>
  );
}
