import { Sparkles } from "lucide-react";

const technologies = [
  {
    name: "Flutter",
    description: "Cross-platform mobile & web apps",
    logo: "/img/tech/flutter.svg",
  },
  {
    name: "Next.js",
    description: "React framework for production",
    logo: "/img/tech/nextjs.svg",
  },
  {
    name: "Supabase",
    description: "Open source backend with auth & database",
    logo: "/img/tech/supabase.svg",
  },
  {
    name: "Stripe",
    description: "Complete payments platform",
    logo: "/img/tech/stripe.svg",
  },
];

export default function TechStack() {
  return (
    <div className="py-24 sm:py-32 bg-[#343434]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            The Stack
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for Speed and Scale
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 gap-8 lg:max-w-none lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 ring-1 ring-white/10"
            >
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-yellow-500/10 p-8 ring-1 ring-primary/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="text-black p-3 bg-yellow-400 shadow-lg shadow-yellow-400/50 rounded-lg">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Supercharged with AI
              </h3>
              <p className="mt-1 text-gray-300">
                We integrate Claude Code into our workflow to write cleaner
                code, catch issues early, and ship faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
