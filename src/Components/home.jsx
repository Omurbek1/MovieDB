import React, { useState, useEffect, useContext, useMemo } from 'react'
import Preloader from './preloader.jsx'
import Carousel from './Slider/carousel'
// import Upcomming from './Slider/upcomming.jsx'
import { MovieContext } from '../Context/movieContext'

function Home() {

  const [isloading, setIsloading] = useState(true)
  const [movies, setmovies] = useContext(MovieContext);
  const movieList = useMemo(() => movies, [movies, setmovies])

  useEffect(() => {
    if (isloading && movieList !== null) { setIsloading(false) }

  }, [movieList])

  return (<>

    {isloading ?
      <Preloader /> :
      <div>
        <h2 className="ml-3"><i class="fas fa-ticket-alt"></i> Популярные, рекомендуемые фильмы на этой неделе</h2>
        <Carousel movies={movieList} />

      </div>}
  </>
  )
}

export default Home;