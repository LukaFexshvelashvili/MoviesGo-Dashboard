import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ServerContext } from "../App";

export default function Users() {
  const [users, setUsers] = useState<TsetUsers>({ rows: null, users: [] });
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const ServerData = useContext(ServerContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          ServerData.server_starter + "users/get.php"
        );
        if (response.data.status == 100) {
          let movies_data = response.data;
          setUsers({ rows: movies_data.nums_rows, users: movies_data.data });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, []);

  const filteredUsers = users.users.filter(
    (user) =>
      user.nickname.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toString().includes(search.toLowerCase())
  );
  return (
    <main className="  flex-1 overflow-hidden">
      <p className="text-head tracking-wider text-[18px] mb-1">
        <span className="text-main">ანგარიშების</span> მართვა
      </p>
      <p className="text-desc mb-4 tracking-wider">
        სულ ({users.rows == null ? "..." : users.rows})
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
      <div className="flex flex-col gap-2 mt-5 w-full">
        {isPending
          ? "იტვირთება..."
          : filteredUsers
              .slice(0, showAll ? filteredUsers.length : 10)
              .map((user: Tuser) => (
                <UserCard
                  id={user.id}
                  nickname={user.nickname}
                  email={user.email}
                  create_date={user.create_date}
                />
              ))}
      </div>
    </main>
  );
}
function UserCard(props: {
  id: number;
  nickname: string;
  email: string;
  create_date: string;
}) {
  return (
    <div className="flex items-center justify-between bg-card-bg w-full px-5 py-2 h-[50px] rounded-md max-screen800:flex-col max-screen800:h-auto max-screen800:py-4 max-screen800:gap-2">
      <span className="text-main">#{props.id}</span>
      <span className="text-desc">{props.nickname}</span>
      <span className="text-desc">{props.email}</span>
      <span className="text-desc">{props.create_date}</span>
      <div className="flex gap-3 items-center">
        <button className="s_button">დაბლოკვა</button>
        <button>წაშლა</button>
      </div>
    </div>
  );
}
type TsetUsers = {
  rows: null | number;
  users: Tuser[];
};
type Tuser = {
  id: number;
  nickname: string;
  email: string;
  create_date: string;
  coins: string;
};
