export default function MovieCard(props: {
  id: number;
  image: string;
  name: string;
  name_eng: string;
  year: string;
}) {
  return (
    <div className="flex flex-col rounded-md bg-card-bg h-[280px] min-w-[320px] max-w-[370px] p-2 flex-1">
      <div className="h-[150px] w-full bg-card-bg-hover rounded-md overflow-hidden">
        <img src={props.image} className="h-full w-full object-cover" />
      </div>
      <p className=" text-head2 mt-1 text-nowrap overflow-hidden text-ellipsis w-full">
        {props.name}
      </p>
      <p className=" text-desc text-nowrap overflow-hidden text-ellipsis w-full">
        {props.name_eng}
      </p>
      <p className=" text-desc text-nowrap overflow-hidden text-ellipsis w-full">
        {props.year}
      </p>
      <div className="flex gap-2 items-center mt-auto justify-end">
        <button className="s_button p-0 h-[40px] aspect-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--color-main)"
              d="M15.748 2.947a2 2 0 0 1 2.828 0l2.475 2.475a2 2 0 0 1 0 2.829L9.158 20.144l-6.38 1.076l1.077-6.38L15.748 2.947Zm-.229 3.057l2.475 2.475l1.643-1.643l-2.475-2.474l-1.643 1.642Zm1.06 3.89l-2.474-2.475l-8.384 8.384l-.503 2.977l2.977-.502l8.385-8.385Z"
            />
          </svg>
        </button>
        <button className="p-0 h-[40px] aspect-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="black"
                d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07A1.01 1.01 0 0 1 4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2h4.558Zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929L17.997 7ZM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm.28-6H9.72l-.333 1h5.226l-.334-1Z"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
