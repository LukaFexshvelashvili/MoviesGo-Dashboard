import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { PieChart } from "@mui/x-charts/PieChart";
import { useCallback, useContext, useEffect, useState } from "react";
import { ServerContext } from "../App";
import axios from "axios";
export default function Dashboard() {
  const ServerData = useContext(ServerContext);
  const [dashboard, setDashboard] = useState<TsetDashboard | any>({
    dashboard: null,
  });
  const [isPending, setIsPending] = useState(true);
  const checkActives = useCallback(async () => {
    if (dashboard != null) {
      try {
        let response = await axios.get(
          ServerData.server_starter + "get/actives.php"
        );
        if (response.data.status == 100) {
          let response_data = response.data.data;
          setDashboard((state: any) => ({
            ...state,
            active_count: response_data.active_count,
          }));
          console.log(dashboard);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  }, [dashboard]);
  useEffect(() => {
    const checkInterval = setInterval(() => {
      checkActives();
    }, 5000);
    return () => {
      clearInterval(checkInterval);
    };
  }, [checkActives]);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        let response = await axios.get(
          ServerData.server_starter + "get/dashboard.php"
        );
        if (response.data.status == 100) {
          let response_data = response.data;
          setDashboard({
            ...response_data.data,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className=" flex-1 overflow-hidden">
      <p className="text-desc mb-4">ანალიტიკა</p>
      {isPending ? (
        <DashboardSkeleton />
      ) : (
        <>
          <div className="flex gap-5 flex-wrap  font-mbold">
            <DashboardCard
              activeColor
              main_label="LIVE"
              label="მომხმარებლები"
              data={dashboard?.active_count}
            />
            <DashboardCard
              main_label="ანგარიშების"
              label="რაოდენობა"
              data={dashboard?.users_count}
            />
            <DashboardCard
              main_label="კომენტარების"
              label="რაოდენობა"
              data={dashboard?.comments_count}
            />
            <DashboardCard
              main_label="შეფასებების"
              label="რაოდენობა"
              data={dashboard?.movie_likes_count}
            />
          </div>
          <div className="flex gap-5 flex-wrap mt-5 font-mbold max-screen1200:flex-col">
            <div className="h-auto gap-5 w-[300px] max-screen500:px-0 flex flex-col max-screen1200:flex-1 max-screen1200:w-full justify-center items-center rounded-md tracking-wider bg-card-bg transition-colors p-5">
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: dashboard?.movies_count
                          ? dashboard.movies_count
                          : 0,
                        label: "ფილმები",
                        color: "var(--color-pie1)",
                      },
                      {
                        id: 1,
                        value: dashboard?.series_count
                          ? dashboard.series_count
                          : 0,
                        label: "სერიალები",
                        color: "var(--color-pie2)",
                      },
                      {
                        id: 2,
                        value: dashboard?.animations_count
                          ? dashboard.animations_count
                          : 0,
                        label: "ანიმაციები",
                        color: "var(--color-pie3)",
                      },
                      {
                        id: 3,
                        value: dashboard?.animes_count
                          ? dashboard.animes_count
                          : 0,
                        label: "ანიმეები",
                        color: "var(--color-pie4)",
                      },
                    ],
                    innerRadius: 20,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
                  },
                ]}
                sx={{
                  "& path": { stroke: "var(--color-card-bg)" },
                }}
                width={210}
                height={200}
                slotProps={{
                  legend: { hidden: true, padding: 0 },
                }}
                margin={{ right: 0 }}
              />
              <div className="flex gap-3 flex-wrap font-mmedium justify-center text-[13px] px-2">
                <div className="flex items-center gap-1">
                  <div className="h-3 aspect-square bg-pie1 rounded-sm "></div>-
                  ფილმები (
                  {dashboard?.movies_count ? dashboard.movies_count : 0})
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 aspect-square bg-pie2 rounded-sm "></div>-
                  სერიალები (
                  {dashboard?.series_count ? dashboard.series_count : 0})
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 aspect-square bg-pie3 rounded-sm "></div>-
                  ანიმაციები (
                  {dashboard?.animations_count ? dashboard.animations_count : 0}
                  )
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 aspect-square bg-pie4 rounded-sm "></div>-
                  ანიმეები (
                  {dashboard?.animes_count ? dashboard.animes_count : 0})
                </div>
              </div>
            </div>
            <div className="h-auto gap-5 flex-1 flex max-screen500:px-0 flex-col justify-center items-center rounded-md tracking-wider bg-card-bg transition-colors p-5 opacity-20">
              <h2>ნახვები</h2>
              <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: "band", dataKey: "month" }]}
                layout="vertical"
                colors={["var(--color-main)"]}
                borderRadius={10}
                {...chartSetting}
                slotProps={{ legend: { hidden: true } }}
                sx={{
                  [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                      stroke: "var(--color-desc)",
                      strokeWidth: 3,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                      fill: "var(--color-desc)",
                    },
                  },
                }}
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
function DashboardCard(props: {
  main_label: string;
  label: string;
  data: string | number | undefined;
  activeColor?: boolean;
}) {
  return (
    <>
      {props.activeColor ? (
        <>
          <div className="h-[100px] flex-1 min-w-[300px] w-[400px] rounded-md tracking-wider bg-main-clear transition-colors p-4 flex flex-col justify-between">
            <p className="text-head">
              <span className="text-main">{props.main_label}</span>{" "}
              {props.label}
            </p>
            <h2 className="text-2xl font-mbold text-main text-end">
              {props.data}
            </h2>
          </div>
        </>
      ) : (
        <>
          <div className="h-[100px] flex-1 min-w-[300px] w-[400px] rounded-md tracking-wider bg-card-bg transition-colors p-4 flex flex-col justify-between">
            <p className="text-head">
              <span className="text-main">{props.main_label}</span>{" "}
              {props.label}
            </p>
            <h2 className="text-2xl font-mbold text-main text-end">
              {props.data}
            </h2>
          </div>
        </>
      )}
    </>
  );
}
const chartSetting = {
  series: [{ dataKey: "seoul", label: "ნახვები" }],
  height: 300,
};

export const dataset = [
  {
    seoul: 144,
    month: "June",
  },
  {
    seoul: 319,
    month: "July",
  },
  {
    seoul: 249,
    month: "Aug",
  },
  {
    seoul: 131,
    month: "Sept",
  },
  {
    seoul: 55,
    month: "Oct",
  },
  {
    seoul: 48,
    month: "Nov",
  },
  {
    seoul: 25,
    month: "Dec",
  },
];
type TsetDashboard = {
  dashboard: TdashboardType | null;
};
type TdashboardType = {
  users_count: number;
  active_count: number;
  movies_count: number;
  series_count: number;
  animations_count: number;
  animes_count: number;
  comments_count: number;
  movie_likes_count: number;
};
function DashboardSkeleton() {
  return (
    <>
      <div className="flex gap-5 flex-wrap  font-mbold animate-pulse">
        <DashboardCard activeColor main_label="" label="" data={""} />
        <DashboardCard main_label="" label="" data={""} />
        <DashboardCard main_label="" label="" data={""} />
        <DashboardCard main_label="" label="" data={""} />
      </div>
      <div className="flex gap-5 flex-wrap mt-5 font-mbold max-screen1200:flex-col">
        <div className="animate-pulse h-auto gap-5 w-[300px] max-screen500:px-0 flex flex-col max-screen1200:flex-1 max-screen1200:w-full justify-center items-center rounded-md tracking-wider bg-card-bg transition-colors p-5"></div>
      </div>
    </>
  );
}
