import MovieCard from "../components/MovieCard";

export default function Movies() {
  return (
    <main className="  flex-1 overflow-hidden">
      <p className="text-head tracking-wider text-[18px] mb-1">
        <span className="text-main">ფილმების</span> მართვა
      </p>
      <p className="text-desc mb-4 tracking-wider">სულ (251)</p>

      <div className="flex items-center justify-start mt-10">
        <input className=" w-[300px]" type="text" placeholder="ძებნა" />
      </div>
      <div className="flex gap-4 mt-5 w-full flex-wrap">
        <MovieCard
          image="https://image.tmdb.org/t/p/original/n3u3kgNttY1F5Ixi5bMY9BwZImQ.jpg"
          id={3}
          name="გაბოროტებული"
          name_eng="Breaking Bad"
          year="2021"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/original/n3u3kgNttY1F5Ixi5bMY9BwZImQ.jpg"
          id={3}
          name="გაბოროტებული"
          name_eng="Breaking Bad"
          year="2021"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/original/n3u3kgNttY1F5Ixi5bMY9BwZImQ.jpg"
          id={3}
          name="გაბოროტებული"
          name_eng="Breaking Bad"
          year="2021"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/original/n3u3kgNttY1F5Ixi5bMY9BwZImQ.jpg"
          id={3}
          name="გაბოროტებული"
          name_eng="Breaking Bad"
          year="2021"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/original/n3u3kgNttY1F5Ixi5bMY9BwZImQ.jpg"
          id={3}
          name="გაბოროტებული"
          name_eng="Breaking Bad"
          year="2021"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/original/n3u3kgNttY1F5Ixi5bMY9BwZImQ.jpg"
          id={3}
          name="გაბოროტებული"
          name_eng="Breaking Bad"
          year="2021"
        />
      </div>
    </main>
  );
}
