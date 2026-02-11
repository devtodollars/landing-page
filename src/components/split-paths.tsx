import { CheckIcon } from "@heroicons/react/20/solid";

const paths = [
  {
    name: "Let Us Build It",
    id: "agency",
    description:
      "Focus on your business while we handle the technical complexity",
    features: [
      "Dedicated tech co-founder experience",
      "MVP delivered in 14 days",
      "AI-accelerated development",
      "Post-launch support & iteration",
    ],
    highlighted: true,
    badge: "Recommended",
  },
  {
    name: "Build It Yourself",
    id: "diy",
    description:
      "Use our open-source boilerplate to launch your MVP in under 30 minutes",
    features: [
      "Flutter + Next.js + Supabase + Stripe",
      "Auth, payments & database pre-configured",
      "Detailed documentation",
      "Active Discord community",
    ],
    highlighted: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SplitPaths() {
  return (
    <div id="choose-path" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Choose Your Path
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Two Ways to Launch Your MVP
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {paths.map((path) => (
            <div
              key={path.id}
              className={classNames(
                path.highlighted
                  ? "bg-white/5 ring-2 ring-primary"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10 flex flex-col"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={path.id}
                  className="text-2xl font-bold leading-8 text-white"
                >
                  {path.name}
                </h3>
                {path.highlighted && path.badge ? (
                  <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-black">
                    {path.badge}
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-md leading-6 text-gray-300">
                {path.description}
              </p>
              <div
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-100 grow"
              >
                {path.features.map((feature) => (
                  <div key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-green-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {path.id === "agency" ? (
                  <>
                    <a
                      href="https://cal.com/amirali-tabrizi/30min"
                      className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-primary/80 hover:text-black hover:no-underline"
                    >
                      Book a Free Call
                    </a>
                    <a
                      href="mailto:amirali@devtodollars.com"
                      className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-xs hover:bg-primary/80 hover:text-black hover:no-underline"
                    >
                      Get In Touch
                    </a>
                  </>
                ) : (
                  <a
                    href="/boilerplate"
                    className="rounded-md bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-white/20 hover:text-white hover:no-underline"
                  >
                    View Boilerplate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
