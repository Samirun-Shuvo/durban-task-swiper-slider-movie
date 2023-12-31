import { useEffect, useState } from "react"
import "./App.css"
import ImdbSvgIcon from "./components/icons/icons"
import { FaPlay } from "react-icons/fa"


function App() {
  const [activeMovie, setActiveMovie] = useState(null)
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Fall",
      desc: "Anthony Doerr’s Pulitzer Prize-winning novel unfolds onscreen in this anticipated adaptation, detailing a rich World War II tale told from two unique perspectives. Readers are counting on director Shawn Levy ('Stranger Things,' 'The Adam Project') to maintain the book's emotional touchpoints and to bring dramatic effect to the war-torn story, played out by Aria Mia Loberti in her first acting role as young, blind Parisian girl Marie-Laure, alongside impressive co-stars like Mark Ruffalo, Hugh Laurie, and Louis Hofmann (“Dark”).",
      releaseYear: "2022",
      duration: "2h 5m",
      category: "Movie",
      rating: "8.5",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDQ2NDY5YzgtZmE1MC00YjMxLThjZTMtY2Y5YjZlMTNjOWFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX280_CR0,14,280,414_.jpg",
    },
    {
      id: 2,
      title: "The Killer",
      desc: "Prize-winning novel unfolds onscreen in this anticipated adaptation, detailing a rich World War II tale told from two unique perspectives. Readers are counting on director Shawn Levy ('Stranger Things,' 'The Adam Project') to maintain the book's emotional touchpoints and to bring dramatic effect to the war-torn story, played out by Aria Mia Loberti in her first acting role as young, blind Parisian girl Marie-Laure, alongside impressive co-stars like Mark Ruffalo, Hugh Laurie, and Louis Hofmann (“Dark”).",
      releaseYear: "2023",
      duration: "1h 58m",
      category: "Movie",
      rating: "7.4",
      image:
        "https://m.media-amazon.com/images/M/MV5BZGJkMDUwZWQtYTMzMS00NTg5LWE1ZTYtOTVhMDI4NGI1YjMyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY209_CR0,0,140,209_AL_.jpg",
    },
    {
      id: 3,
      title: "Lawmen: Bass Reeves",
      desc: "This anticipated adaptation detailing a rich World War II tale told from t, detailing a rich World War II tale told from two unique perspectives. Readers are counting on director Shawn Levy ('Stranger Things,' 'The Adam Project') to maintain the book's emotional touchpoints and to bring dramatic effect to the war-torn story, played out by Aria Mia Loberti in her first acting role as young, blind Parisian girl Marie-Laure, alongside impressive co-stars like Mark Ruffalo, Hugh Laurie, and Louis Hofmann (“Dark”).",
      releaseYear: "2023",
      duration: "4h 5m",
      category: "Drama",
      rating: "8.2",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDk3YWJhZDktN2RmNy00NGI3LWI3ZTgtYWM4NzdkNWFhMzdiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX140_CR0,0,140,209_AL_.jpg",
    },
    {
      id: 4,
      title: "Priscilla",
      desc: "So, we have seen Sofia Coppola's conventionally made biopic and processed the frustrations we had with it, since it’s challenging to watch Priscilla Presley's early life with Elvis Presley gradually confining her to a jumpsuit straitjacket. Jacob Elordi dominates the first two acts — and jeez, is he good. Meanwhile, Cailee Spaeny is coltish, terrified, and barely audible at times. We almost forget SHE left him, and when that moment comes, Coppola's filmmaking dovetails with Spaeny's performance and we are reminded who the movie is named after. This is a quiet study of a confined life moving toward freedom, without the bombast of a pop soundtrack.",
      releaseYear: "2023",
      duration: "1h 55m",
      category: "Movie",
      rating: "6.9",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTQyZTBiMjAtZTNjZi00ZjU0LWFkMTQtMDE3Nzc1MjVmMTM4XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_UY209_CR1,0,140,209_AL_.jpg",
    },
    {
      id: 5,
      title: "Invincible",
      desc: "Season 1 of Prime Video’s hit series “Invincible” ended with high school superhero Mark Grayson (Steven Yeun) battling his not-so-heroic father, Omni-Man (J.K. Simmons). Now, the Robert Kirkman comic book adaptation is returning for a second season with more than 20 notable new voices, including Tatiana Maslany, Calista Flockhart, and Sterling K. Brown as multiverse scientist Angstrom Levy. Can Mark take on the new baddies threatening his city without becoming like his fascistic father? With Season 2’s looming multidimensional danger and Kirkman’s classic subversive style, it’s clear that in this eight-episode season anything’s possible.",
      releaseYear: "2021",
      duration: "0h 55m",
      category: "Movie",
      rating: "8.7",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2Q1NWExNzEtM2M1Ny00ZDJhLWIwN2MtZGI5ZGI4MzBlYTQyXkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_UY209_CR13,0,140,209_AL_.jpg",
    },
  ])

  const [showImages, setShowImages] = useState([])

  useEffect(() => {
    let stateImages = []

    const interval = setInterval(() => {
      if (
        stateImages[stateImages.length - 1]?.id ===
        movies[movies.length - 1]?.id
      ) {
        let newImages = [...stateImages.slice(1, 3), movies[0]]
        stateImages = newImages
        setShowImages([...newImages])
      } else {
        if (stateImages.length == 0) {
          stateImages = [...movies.slice(0, 3)]
          setShowImages([...movies.slice(0, 3)])
        } else {
          const index = stateImages[stateImages.length - 1]?.id
          let newImages = [...stateImages.slice(1, 3), movies[index]]
          stateImages = newImages
          setShowImages([...newImages])
        }
      }
      if (stateImages.length === 1) {
        setActiveMovie({ ...stateImages[0], showFullDesc: false })
      } else if (stateImages.length === 2) {
        setActiveMovie({ ...stateImages[1], showFullDesc: false })
      } else if (stateImages.length === 3) {
        setActiveMovie({ ...stateImages[1], showFullDesc: false })
      }
    }, 3500)

    return () => {
      clearInterval(interval)
    }
  }, [movies])

  return (
    <section className="bg-black bg-opacity-90 min-h-screen flex justify-center items-center p-8">
      <div className="grid md:grid-cols-2 h-fit py-14">
        {/* image slider */}
        <div
          className="flex items-center justify-center w-full overflow-hidden"
          id="slider_container"
        >
          {showImages.map((movie, index) => {
            return (
              <img
                key={index}
                src={movie.image}
                className={`card rounded-[10px] overflow-hidden ${
                  index === 0 || index === 2
                    ? "h-[330px] w-[250px] relative z-30"
                    : "w-[350px] h-[450px] z-50"
                } ${index === 0 ? "relative right-[-30px]" : ""} ${
                  index === 2 ? "relative right-[30px]" : ""
                }`}
              />
            )
          })}
        </div>
        {/* content */}
        <div>
          {activeMovie?.id && (
            <div className="text-white grid gap-14">
              <div>
                <h2 className="text-xl font-bold ">COMING SOON</h2>
                <h2 className="text-3xl font-bold mt-2 uppercase">
                  {activeMovie?.title}
                </h2>
              </div>
              <div>
                <div className="py-8 border-y border-slate-600 flex gap-4 justify-between items-center">
                  <p className="text-lg font-semibold">
                    {activeMovie?.releaseYear} - {activeMovie?.category} -{" "}
                    {activeMovie?.duration}
                  </p>
                  <div className="flex gap-4 items-center">
                    <ImdbSvgIcon />{" "}
                    <span className="text-lg font-medium">
                      {activeMovie?.rating}
                    </span>
                  </div>
                </div>
              </div>
              {/* description */}
              <div>
                {activeMovie?.desc.length > 300 ? (
                  <>
                    <p>
                      {!activeMovie.showFullDesc ? (
                        <>
                          <span className="descTag">
                            {activeMovie?.desc.slice(0, 300)}...
                          </span>
                          <button
                            className="text-[#F5C518] font-semibold text-lg"
                            onClick={() => {
                              setActiveMovie({
                                ...activeMovie,
                                showFullDesc: true,
                              })
                            }}
                          >
                            Read More
                          </button>
                        </>
                      ) : (
                        <p>{activeMovie?.desc}</p>
                      )}
                    </p>
                  </>
                ) : (
                  <p>{activeMovie?.desc}</p>
                )}
              </div>
              {/* button */}
              <div>
                <button className="bg-[#E2B616] text-lg font-medium py-3 px-7 rounded-[10px] flex items-center gap-2">
                  <FaPlay className="text-3xl rounded-[10px]" /> Watch Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default App
