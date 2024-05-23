"use client" 
import Image from "next/image";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <section>
        {/* header */}
        <header className="flex items-center justify-between w-full px-6 py-5 bg-black">
          <div className="basis-1/3 hidden md:flex">
            <Image
              src="/logo.svg"
              alt="LaClick"
              width={71}
              height={75}
              layout="fixed"
              />
          </div>
          <div className="basis-1/3 flex md:hidden">
            <Image
              src="/logo.svg"
              alt="LaClick"
              width={41}
              height={45}
              layout="fixed"
              />
          </div>
          <div className="basis-2/3 flex justify-end">
            <nav className=" w-full hidden lg:flex">
              <ul className="flex w-full justify-between space-x-8 mr-20 scroll-smooth">
                <li>
                  <a className="font-roboto text-nav_gray font-semibold hover:text-slate-50" href="#hero">INICIO</a>
                </li>
                <li>
                  <a className="font-roboto text-nav_gray font-semibold hover:text-slate-50" href="#proxfecha">ENTRADAS</a>
                </li>
                <li>
                  <a className="font-roboto text-nav_gray font-semibold hover:text-slate-50 " href="#playlist">NUESTRAS PLAYLIST</a>
                </li>
                <li>
                  <a className="font-roboto text-nav_gray font-semibold hover:text-slate-50" href="#galeria">GALERIA</a>
                </li>
              </ul>
            </nav>
            {/* <div className="lg:hidden">
              <Image
                src="/menu.svg"
                alt="Menu"
                width={34}
                height={34}
                layout="fixed"
                />
              </div> */}
          </div>
        </header>
      </section>
      {/* hero */}
      <section id="hero">
        <div className="flex flex-col items-center justify-center w-full  bg-cover bg-center relative" style={{ backgroundImage: "url('/backgrounds/hero_banner.png')" }}>
          <div className="flex flex-col  items-center justify-center mt-28 md:mt-10 mb-36">
            <div className="text-white text-center">
              <div className=" h-full relative">
                <Image 
                  src="/logo_grande.png"
                  alt="LaClick"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }} // optional
                  />
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <button  className="bg-azul_boton hover:bg-hover_boton text-white font-bold py-4 px-5 rounded-full">
                CONSEGUIR MIS ENTRADAS
              </button>
            </div>
          </div>  
          <div className="w-full absolute bottom-0">
            <Image
              src="/foto_rota_arriba_3.png"
              className="brightness-75"
              alt="Flecha"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '45px' }} // optional
              />
          </div>
        </div>
      </section>
      {/* proxima fecha */}
      <section id="proxfecha">
        <div className="flex flex-col items-center justify-center w-full relative min-h-max  bg-cover bg-center" style={{ backgroundImage: "url('/backgrounds/proxfecha_banner.png')" }}>
          <div className="w-full absolute top-0">
            <Image
              src="/foto_rota_arriba_1.png"
              alt="Flecha"
              className="brightness-75"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '45px' }} // optional
              />
          </div>
            
            <div className="text-white text-center my-32">
              <div>
                <h2 className="text-3xl font-bold font-ropasans mb-6">PROXIMA FECHA</h2>
              </div>
              <div className=" h-full relative">
                <Image 
                  src="/flyer/flyer1.png"
                  alt="LaClick"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }} // optional
                  />
              </div>
            </div>

            <div className="w-full absolute bottom-0">
            <Image
              src="/foto_rota_arriba_3.png"
              className="brightness-75"
              alt="Flecha"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '45px' }} // optional
              />
          </div>
  
        </div>
      </section>
      {/* nuestras playlists */}
      <section id="playlist" className="scroll-smooth">
        <div className="flex flex-col items-center justify-center relative w-full  bg-cover bg-center" style={{ backgroundImage: "url('/backgrounds/playlist_banner.png')" }}>
          <div className="w-full absolute top-0">
            <Image
              src="/foto_rota_arriba_1.png"
              alt="Flecha"
              className="brightness-75"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '45px' }} // optional
              />
          </div>
          <div className="text-white text-center pt-28">
            <h2 className="text-3xl font-bold font-ropasans">NUESTRAS PLAYLISTS</h2>
          </div>
          {/* Container playlists */}
            <div className="flex flex-col w-full mb-40">
              <div className="bg-playlist_bg rounded-3xl mx-10 lg:mx-60 my-5">
                <iframe style={{ borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/5Z3befjtrtKt2eJnK6vfcl?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
              <div className="bg-playlist_bg rounded-3xl mx-10 lg:mx-60 my-5">
                <iframe style={{ borderRadius: '12px'}}  src="https://open.spotify.com/embed/playlist/4Mw7VyJVaEfqtV9os1fJZg?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
            </div>
            <div className="w-full absolute bottom-0">
              <Image
                src="/foto_rota_arriba_3.png"
                className="brightness-75"
                alt="Flecha"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '45px' }} // optional
                />
            </div>
        </div>
      </section>

      {/* galeria */}
      <section id="galeria">
        <div className="flex flex-col items-center justify-center w-full relative min-h-max  bg-cover bg-center" style={{ backgroundImage: "url('/backgrounds/galeria_banner.png')" }}>
          <div className="w-full absolute top-0">
            <Image
              src="/foto_rota_arriba_1.png"
              alt="Flecha"
              className="brightness-75"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '45px' }} // optional
              />
          </div>

          <div className="text-white text-center my-32 w-full flex flex-col items-center ">
            <h2 className="text-3xl font-bold font-ropasans">GALERIA DE FOTOS</h2>
            <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[plugin.current]}
                className="w-full  mt-10 px-10"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className=" rounded h-[500px] 2xl:h-[800px] sm:basis-1/2 md:basis-1/3 2xl:basis-1/4">
                      <div className="p-1 h-full">
                        <Card className="border-none h-full ">
                          <CardContent className="flex h-full border-none p-0   items-center justify-center ">
                              <div className="h-full w-full relative">
                                <Image 
                                  src={`/galeria/galeria_${index + 1}.png`}
                                  alt="LaClick"
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  className="rounded"
                                  style={{ width: '100%', height: '100%', objectFit:'cover' }} // optional
                                  />
                              </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>




          </div>

          <div className="w-full absolute bottom-0">
            <Image
              src="/foto_rota_arriba_3.png"
              className="brightness-75"
              alt="Flecha"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '45px' }} // optional
              />
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="flex items-center justify-center w-full flex-col px-6 py-5 bg-black">
        <div className="flex items-center justify-between w-full mx-20">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="LaClick"
              width={71}
              height={75}
              layout="fixed"
              />
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="text-white text-right w-full">
              <a className="font-roboto text-nav_gray  hover:text-slate-50" href="#hero">Inicio </a>
            </div>
            <div className="text-white text-right w-full">
              <a className="font-roboto text-nav_gray  hover:text-slate-50" href="#proxfecha">Entradas </a>
            </div>
            <div className="text-white text-right w-full">
              <a className="font-roboto text-nav_gray  hover:text-slate-50" href="#playlist">Nuestras Playlist </a>
            </div>
            <div className="text-white text-right w-full">
              <a className="font-roboto text-nav_gray  hover:text-slate-50" href="#galeria">Galeria </a>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="w-full border-t border-[#FFFFFF] mt-5"></div>
        <div className="flex items-center justify-between w-full mx-20 mt-5">
          <div className="text-white  w-full">
            <a className="font-roboto text-nav_gray  hover:text-slate-50">© Fiesta Click - 2024</a>
          </div>
          <div className="text-white  w-full">
                  {/* icons x, instragram, tiktok, spotify */}
            <div className="flex items-center justify-end gap-4 md:gap-9">
              <Image
                src="/logo_twitter.svg"
                alt="LaClick"
                width={0}
                height={0}
                layout="fixed"
                className="cursor-pointer h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                />
                {/* when is mobile change sized of the icon to 16 16 */}
              <Image
                src="/logo_instagram.svg"
                alt="LaClick"
                width={0}
                height={0}
                layout="fixed"
                className="cursor-pointer h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                />
              <Image
                src="/logo_tiktok.svg"
                alt="LaClick"
                width={0}
                height={0}
                layout="fixed"
                className="cursor-pointer h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                />
              <Image
                src="/logo_spotify.svg"
                alt="LaClick"
                width={0}
                height={0}
                layout="fixed"
                className="cursor-pointer h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                />

              </div>
          </div>
        </div>
      </footer>


    </main>
  );
}
