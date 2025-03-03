import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { ServerContext } from "../App";

export default function Movies() {
  const [movies, setMovies] = useState<TsetMovie>({ rows: null, movies: [] });
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const ServerData = useContext(ServerContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        let response = await axios.get(
          ServerData.server_starter + "movies/get.php"
        );
        if (response.data.status == 100) {
          let movies_data = response.data;
          setMovies({ rows: movies_data.nums_rows, movies: movies_data.data });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, []);

  const filteredMovies = movies.movies.filter(
    (movie) =>
      movie.name.toLowerCase().includes(search.toLowerCase()) ||
      movie.name_eng.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="  flex-1 overflow-hidden">
      <p className="text-head tracking-wider text-[18px] mb-1">
        <span className="text-main">ფილმების</span> მართვა
      </p>
      <p className="text-desc mb-4 tracking-wider">
        სულ ({movies.rows == null ? "..." : movies.rows})
      </p>

      <div className="flex items-center justify-start mt-10 max-screen500:flex-col-reverse gap-3">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className=" w-[250px]"
          type="text"
          placeholder="ძებნა"
        />{" "}
        <button
          onClick={() => setShowAll((state) => !state)}
          className="s_button"
        >
          {showAll ? "ნაკლების ჩვენება" : "ყველას ჩვენება"}
        </button>
      </div>
      <div className="flex gap-4 mt-5 w-full flex-wrap">
        {isPending
          ? "იტვირთება..."
          : filteredMovies
              .slice(0, showAll ? filteredMovies.length : 10)
              .map((movie: TmovieType) => (
                <MovieCard
                  key={movie.id}
                  image={ServerData.image_starter + movie.thumbnail_url}
                  id={movie.id}
                  name={movie.name}
                  name_eng={movie.name_eng}
                  year={movie.year ? movie.year.substring(0, 4) : "N/A"}
                />
              ))}
      </div>
    </main>
  );
}
type TsetMovie = {
  rows: null | number;
  movies: TmovieType[];
};
type TmovieType = {
  id: 219;
  name_eng: "Transformers: Revenge of the Fallen";
  name: "ტრანსფორმერები 2";
  subtitle: "";
  year: "2009";
  country: "აშშ, იორდანია, გაერთიანებული სამეფო";
  imdb: 6;
  creator: "მაიკლ ბეი";
  actors: "შია ლაბეფი, მეგან ფოქსი, ჯოშ დიუჰამელი";
  description: "დედამიწისათვის ბრძოლა დასრულდა,მაგრამ მსოფლიოსათვის ბრძოლა ახლა დაიწყო...კიბერტონზე დაბრუნების შემდეგ სტარსქრიმი დესეპტიკონებს ჩაუდგება სათავეში და დედამიწაზე დაბრუნებას გადაწყვეთს..სკორპონოკი აშშ–ს ჯარს დამარცხებული მეგრატრონის სხეულს მოსტაცებს და საკუთარი ნაპერწკლით სიცოცხლეს დაუბრუნებს..ახლა მთავარ დესეპტიკონს შურისძიება სწყურია,სტარსქრიმი კი თავის ჯართან ერთად დედამიწისკენ იღებს გეზს..";
  players: '{"1":{"GEO":{"HD":""},"ENG":{"HD":""}},"2":{"GEO":{"HD":"https:\\/\\/mykadri1.xyz\\/embed\\/ocaf7p9f4rrb"},"ENG":{"HD":"https:\\/\\/gralvixfire92.live\\/file1\\/ZuYurAk5tmIIkaMCCFDPWo3ljDLVbDgSMvw0DUT5obxFBCRYL3t8dHVEvrcnyndp2d+9mW0hs1RrezTlLblIzu7QoO6zRzcxqDWQJ2ZZIUIl~3O1582++McCU2R1Ms+YwMt5BdKQZquZS4rOZsAkg4Du1zCXEpGfCxjZU8wGths=\\/MTA4MA==\\/aW5kZXgubTN1OA==.m3u8"}},"3":{"GEO":{"HD":"https:\\/\\/mondostudio.store\\/v\\/hoxqc1t2lnyk"},"ENG":{"HD":"https:\\/\\/vidsrc.icu\\/embed\\/movie\\/tt1055369"}}}';
  trailer: "";
  poster_url: "uploads/219/pZjee5G.webp";
  thumbnail_url: "uploads/219/tS9skRB.webp";
  type: 0;
  addons: "";
  genres: '["\\u10e1\\u10d0\\u10d7\\u10d0\\u10d5\\u10d2\\u10d0\\u10d3\\u10d0\\u10e1\\u10d0\\u10d5\\u10da\\u10dd"]';
  views: 0;
  create_date: "2025-02-24 22:16:51";
};
