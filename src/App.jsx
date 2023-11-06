import { useState } from "react"
import "./App.css"


function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Fall",
      desc: "Anthony Doerr’s Pulitzer Prize-winning novel unfolds onscreen in this anticipated adaptation, detailing a rich World War II tale told from two unique perspectives. Readers are counting on director Shawn Levy ('Stranger Things,' 'The Adam Project') to maintain the book's emotional touchpoints and to bring dramatic effect to the war-torn story, played out by Aria Mia Loberti in her first acting role as young, blind Parisian girl Marie-Laure, alongside impressive co-stars like Mark Ruffalo, Hugh Laurie, and Louis Hofmann (“Dark”).",
      releaseDate: "2022",
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
      releaseDate: "2023",
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
      releaseDate: "2023",
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
      releaseDate: "2023",
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
      releaseDate: "2021",
      duration: "0h 55m",
      category: "Movie",
      rating: "8.7",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2Q1NWExNzEtM2M1Ny00ZDJhLWIwN2MtZGI5ZGI4MzBlYTQyXkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_UY209_CR13,0,140,209_AL_.jpg",
    },
  ])




  return (
    <section className="bg-black bg-opacity-90 min-h-screen flex justify-center items-center p-8">
      <div className="grid md:grid-cols-2 h-fit py-14">
        {/* image slider */}
        <div
          className="flex items-center justify-center w-full overflow-hidden"
          id="slider_container"
        >
          {movies.map((movie, index) => {
            return (
              <img
                key={index}
                src={movie.image}
                className={`card rounded-[10px]`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default App
