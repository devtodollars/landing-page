import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroHome() {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      const owner = "devtodollars";
      const repo = "mvp-boilerplate";
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`,
      );
      const data = await response.json();
      setStars(data.stargazers_count);
    };

    fetchStars();
  }, []);
  return (
    <section className="relative isolate pt-14">
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary">
          <span className="text-primary "> Chief Technology Officer</span>
          <br /> {/* New line added here */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white tracking-wide">
            as a Service{" "}
          </span>
        </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our templated code and processes are available for free and{" "}
            <span className="text-primary">
              trusted by {stars ? stars : "956"} developers
            </span>
          </p>
          <button
            onClick={() => document.getElementById("choose-path")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-12 cursor-pointer bg-transparent border-none p-0"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="mx-auto h-8 w-8 animate-bounce text-white/50" />
          </button>
        </div>
      </div>
    </section>
  );
}
