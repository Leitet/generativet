import * as React from "react"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Moon, Sun, AudioLines, ChevronsDownUp } from "lucide-react"
import { useTheme } from "next-themes"
import Link from 'next/link';
import TopLogo from "@/components/ui/top-logo";
import BottonNav from "@/components/ui/bottom-nav";
import { Header1 } from "@/components/ui/headers";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function Podcast() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <TopLogo></TopLogo>
      

      <Header1>
        Generativet Podcast
      </Header1>


      <div className="mb-32 grid font-thin items-center text-center justify-center text-2xl lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
      <Image
          className="relative dark:drop-shadow-[0_0_0.5rem_#ffffff70]"
          src="/generativet-podcast.gif"
          alt="Generativet podcast"
          width={360}
          height={74}
          priority
        />
      
        <p className="leading-9 [&:not(:first-child)]:mt-6">
        Välkommen till Generativet, podcasten där Anders, Fredrik och Johan med en icke specificerad regelbundenhet dyker ner i världen av generativ AI. I varje avsnitt spekulerar och diskuterar vi de senaste trenderna, teorierna och applikationerna av artificiell intelligens som kan generera allt från text och bilder till musik och mer. Vi utforskar de etiska dilemman, de tekniska underverken och de oväntade effekterna AI har på vårt samhälle. Oavsett om du är en AI-expert eller bara nyfiken på vad framtidens teknologi har att erbjuda, har Generativet något för dig. Lyssna på oss där poddar finns!
        </p>
      </div>

     
      {/*  Lyssna på Generativet! */}
      
      <Drawer>
          <DrawerTrigger asChild>
            <div><Button><AudioLines className="mr-2 h-4 w-4" /> Lyssna på senaste avsnittet av Generativet</Button></div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Lyssna på senaste avsnittet av Generativet</DrawerTitle>
              <DrawerDescription>Du kan givetvis lyssna på Generativet i din favoritpodspelare.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
            <iframe src="https://open.spotify.com/embed/show/2Z8MqCcQnZbmZ3hnhUjNHj?utm_source=generator&theme=0" width="100%" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

              <DrawerClose>
                <Button><ChevronsDownUp className="mr-2 h-4 w-4" />Stäng webbspelaren</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <BottonNav></BottonNav>
    </main>
  );
}
