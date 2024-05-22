import Image from 'next/image'

export default function Playlist() {
    return (
        <div className="bg-playlist_bg rounded-3xl mx-10 lg:mx-60 my-5">
        <iframe style={{ borderRadius: '2px'} } src="https://open.spotify.com/embed/playlist/5Z3befjtrtKt2eJnK6vfcl?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        {/* Container playlist */}
        {/* <div className="flex flex-row p-5 items-center">
            <div className='basis-2/3 flex gap-10'>
                <div className='w-[140px]'>
                    <Image 
                        src="/playlists/playlist_1.png"
                        alt="playlist 1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                        />
                </div>
                <div className="text-sm   md:text-2xl xl:text-3xl font-ropasans font-bold text-white text-center">
                    CLICK x @bbasul
                </div>
            </div>
          <div className="basis-1/3">
            <button  className="bg-azul_boton hover:bg-hover_boton text-white font-bold py-4 px-5 rounded-full">
              <div className="flex flex-row ">
                <div className="pr-3 text-sm ">
                  ESCUCHAR EN SPOTIFY
                </div>
                <div>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/></svg>
                </div>
              </div>
            </button>
          </div>
        </div> */}
      </div>
    );
}
