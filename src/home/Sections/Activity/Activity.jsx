import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const USERNAME = "SanjuBhunia99";

const Activity = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="activity"
      className="scroll-mt-20 text-white text-center mb-10 px-3 sm:px-6"
    >
      <div className="text-xl sm:text-2xl underline font-semibold mb-6">
        🏃‍♂️ Activity
      </div>
      <div className="flex justify-center p-2">
        <div
          className="w-full max-w-full sm:max-w-xl md:max-w-2xl rounded-xl p-2 sm:p-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        >
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&theme=github&color=2ea44f&line=2ea44f&point=2ea44f&refresh=${refreshKey}`}
              alt="GitHub Contribution Activity Graph"
              className="w-full rounded-md"
            />
          </a>
        </div>
      </div>
      <div className="mt-6 overflow-x-auto">
        <div className="flex justify-center">
          <div className="rounded-xl px-4 py-4">
            <GitHubCalendar
              key={refreshKey}
              username={USERNAME}
              weekStart={0}
              showYearLabel={false}
              showWeekdayLabels={false}
              hideColorLegend={false}
              hideTotalCount={false}
              blockSize={15}
              blockMargin={3}
              fontSize={12}
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              }}
              renderBlock={(block, activity) => {
                const count = activity.count;
                const date = activity.date;

                const tooltipText =
                  count === 0
                    ? `${date} — No contributions`
                    : `${date} — ${count} contribution${count > 1 ? "s" : ""}`;

                const githubDayUrl = `https://github.com/${USERNAME}?tab=overview&from=${date}&to=${date}`;

                return React.cloneElement(
                  block,
                  {
                    style: {
                      cursor: "pointer",
                    },
                    onClick: () => window.open(githubDayUrl, "_blank"),
                  },
                  <title>{tooltipText}</title>
                );
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
