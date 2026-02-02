import Layout from "@theme/Layout";
import { useEffect, useState } from "react";
import GitHubButton from "react-github-btn";
import FixedBackground from "../components/fixed-background";

interface Module {
  name: string;
  features: string[];
  logos: string[];
}

const modules: Module[] = [
  {
    name: "Web Frontend",
    features: [
      "Next.js + Vercel deployment",
      "CI/CD setup for auto deploy",
    ],
    logos: ["nextjs", "vercel"],
  },
  {
    name: "Mobile Stack",
    features: [
      "Flutter cross-platform",
      "iOS & Android from one codebase",
    ],
    logos: ["flutter"],
  },
  {
    name: "Authentication",
    features: [
      "Supabase Authentication",
      "Email Verification",
      "Google and GitHub OAuth",
    ],
    logos: ["supabase", "google", "github"],
  },
  {
    name: "Backend",
    features: [
      "Vercel Edge functions",
      "Supabase Edge functions",
      "PostgreSQL with real-time",
    ],
    logos: ["vercel", "supabase"],
  },
  {
    name: "Payments",
    features: [
      "Complete Stripe integration",
      "Subscription management",
    ],
    logos: ["stripe"],
  },
  {
    name: "Analytics",
    features: [
      "PostHog observability",
      "User behavior tracking",
    ],
    logos: ["posthog"],
  },
];

function HeroBoilerplate({ stars }: { stars: number | null }) {
  return (
    <section className="relative isolate pt-14">
      <div className="mx-auto max-w-3xl py-24 sm:py-32 lg:py-40">
        <div className="text-center px-6">
          <p className="text-base font-semibold leading-7 text-primary">
            Open Source
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            MVP Boilerplate
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Launch your startup in under 30 minutes with our production-ready
            boilerplate. Trusted by{" "}
            <span className="text-primary">{stars ? stars : "956"}+ developers</span>.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <GitHubButton
                href="https://github.com/devtodollars/mvp-boilerplate"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-size="large"
                data-icon="octicon-star"
                data-show-count="true"
                aria-label="Star devtodollars/mvp-boilerplate on GitHub"
              >
                Star on GitHub
              </GitHubButton>
            </div>
            <a
              href="/docs"
              className="rounded-md bg-primary px-5 py-3 text-md font-semibold text-black shadow-sm hover:bg-primary/80 hover:no-underline hover:text-black"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module }: { module: Module }) {
  return (
    <div
      className="
        group rounded-2xl
        bg-white/[0.03] border border-white/10
        p-5
        transition-all duration-200
        hover:bg-white/[0.06] hover:border-white/20
      "
    >
      {/* Logos at top */}
      <div className="flex items-center gap-3 mb-4">
        {module.logos.map((logo) => (
          <img
            key={logo}
            src={`/img/tech/${logo}.svg`}
            alt={logo}
            className="h-8 w-8 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        ))}
      </div>

      {/* Module name */}
      <h3 className="font-semibold text-white text-lg mb-3">
        {module.name}
      </h3>

      {/* Bullet points - aligned with header */}
      <ul className="space-y-1.5 list-none p-0 m-0">
        {module.features.map((feature, idx) => (
          <li key={idx} className="text-sm text-gray-400">
            <span className="text-base">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ModuleGrid() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Everything You Need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What's Included
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Production-ready modules to launch your MVP.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module) => (
              <ModuleCard key={module.name} module={module} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function CtaBoilerplate() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need Help Building?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            If you'd prefer to focus on your business while we handle the
            technical complexity, check out our development services.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="rounded-md bg-primary px-5 py-3 text-md font-semibold text-black shadow-sm hover:bg-primary/80 hover:no-underline hover:text-black"
            >
              View Development Services
            </a>
            <a
              href="https://discord.gg/6q63Xa6SEB"
              className="rounded-md bg-white/10 px-5 py-3 text-md font-semibold text-white shadow-sm hover:bg-white/20 hover:no-underline hover:text-white"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Boilerplate(): JSX.Element {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      const owner = "devtodollars";
      const repo = "mvp-boilerplate";
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`
      );
      const data = await response.json();
      setStars(data.stargazers_count);
    };
    fetchStars();
  }, []);

  return (
    <Layout
      title="Open Source Boilerplate"
      description="Launch your startup in under 30 minutes with our production-ready MVP boilerplate"
    >
      <FixedBackground />
      <HeroBoilerplate stars={stars} />
      <ModuleGrid />
      <CtaBoilerplate />
    </Layout>
  );
}
