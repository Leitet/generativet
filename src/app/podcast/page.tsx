
import * as React from "react"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Moon, Sun, AudioLines } from "lucide-react"
import { useTheme } from "next-themes"
import { Spotify } from "react-spotify-embed";
import Link from 'next/link';
import TopLogo from "@/components/ui/top-logo";
import BottonNav from "@/components/ui/bottom-nav";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

 
export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ListenButton() {
  return (
    <Button>
      <AudioLines className="mr-2 h-4 w-4" /> Lyssna på Generativet!
    </Button>
  )
}




export default function Podcast() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <TopLogo></TopLogo>
      

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Generativet Podcast
      </h1>

      <Image
          className="relative dark:drop-shadow-[0_0_0.5rem_#ffffff70]"
          src="/generativet-podcast.gif"
          alt="Generativet podcast"
          width={360}
          height={74}
          priority
          style={{float: "left"}}
        />

      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Välkommen till "Generativet", podcasten där Anders, Fredrik och Johan med en icke specificerad regelbundenhet dyker ner i världen av generativ AI. I varje avsnitt spekulerar och diskuterar vi de senaste trenderna, teorierna och applikationerna av artificiell intelligens som kan generera allt från text och bilder till musik och mer. Vi utforskar de etiska dilemman, de tekniska underverken och de oväntade effekterna AI har på vårt samhälle. Oavsett om du är en AI-expert eller bara nyfiken på vad framtidens teknologi har att erbjuda, har "Generativet" något för dig. Lyssna på oss där poddar finns!
      </p>

     

      <Drawer>
          <DrawerTrigger><AudioLines className="mr-2 h-4 w-4" /> Lyssna på Generativet!</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Lyssna på senaste avsnittet av Generativet</DrawerTitle>
              <DrawerDescription>Du kan givetvis lyssna på Generativet i din favoritpodspelare.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
            <iframe src="https://open.spotify.com/embed/show/2Z8MqCcQnZbmZ3hnhUjNHj?utm_source=generator&theme=0" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowtransparency = "true"></iframe>

              <DrawerClose>
                <Button variant="outline">Stäng webbspelaren</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <BottonNav></BottonNav>
    </main>
  );
}