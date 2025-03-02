export default function Users() {
  return (
    <main className="  flex-1 overflow-hidden">
      <p className="text-head tracking-wider text-[18px] mb-1">
        <span className="text-main">ანგარიშების</span> მართვა
      </p>
      <p className="text-desc mb-4 tracking-wider">სულ (251)</p>

      <div className="flex items-center justify-start mt-10">
        <input className=" w-[300px]" type="text" placeholder="ძებნა" />
      </div>
      <div className="flex flex-col gap-2 mt-5 w-full">
        <UserCard
          id={41}
          nickname={"ლუკიტო"}
          email={"luka1172@mail.ru"}
          create_date={"2021-11-12"}
        />
        <UserCard
          id={43}
          nickname={"ლომი"}
          email={"farav@mail.ru"}
          create_date={"2021-11-12"}
        />
        <UserCard
          id={46}
          nickname={"გიუშა"}
          email={"giola@mail.ru"}
          create_date={"2021-11-12"}
        />
        <UserCard
          id={417}
          nickname={"ნიკიტა"}
          email={"niko@mail.ru"}
          create_date={"2021-11-12"}
        />
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
