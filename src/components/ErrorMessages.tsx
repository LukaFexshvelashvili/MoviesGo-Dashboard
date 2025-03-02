export default function ErrorMessages() {
  return (
    <main className="  flex-1 overflow-hidden">
      <p className="text-head tracking-wider text-[18px] mb-1">
        <span className="text-main">ხარვეზების </span> შეტყობინებები
      </p>
      <p className="text-desc mb-4 tracking-wider">სულ (251)</p>

      <div className="flex items-center justify-start mt-10">
        <input className=" w-[300px]" type="text" placeholder="ძებნა" />
      </div>
      <div className="flex flex-col gap-2 mt-5 w-full"></div>
    </main>
  );
}
