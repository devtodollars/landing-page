import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { useEffect, useState } from "react";
import GitHubButton from "react-github-btn";
import { CircleDollarSign } from "lucide-react";
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
      "Optional non-custodial Monero payment management",
      "Optional Monero app subscription management",
    ],
    logos: ["stripe", "monero"],
  },
  {
    name: "Analytics",
    features: [
      "PostHog observability",
      "User behavior tracking",
    ],
    logos: ["posthog"],
  },
  {
    name: "Email",
    features: [
      "Complete Loops SMTP setup",
      "Transactional emails ready to send",
      "Marketing automation included",
    ],
    logos: ["loops"],
  },
];

const MONERO_ADDRESS =
  "82nLM11CewQTvsXa9AoobY98TNptCViCgVpijbE8LEFLjmUxsFoy6zeAMfiATS9oLuDKdUWJkMUMi6APZPjiWwguL6izV8m";

function MoneroModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(MONERO_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl leading-none cursor-pointer bg-transparent border-none"
        >
          &#x2715;
        </button>
        <h3 className="text-lg font-semibold text-white mb-4 text-center">
          Donate with Monero
        </h3>
        <div className="flex justify-center mb-4">
          <img
            src="/img/monero-donate-qr.svg"
            alt="Monero QR Code"
            className="w-48 h-48 rounded-lg bg-white p-2"
          />
        </div>
        <div className="bg-white/[0.05] border border-white/10 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-300 font-mono break-all m-0 select-all">
            {MONERO_ADDRESS}
          </p>
        </div>
        <button
          onClick={copyAddress}
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-black cursor-pointer border-none hover:bg-primary/80"
        >
          {copied ? "Copied!" : "Copy Address"}
        </button>
      </div>
    </div>
  );
}

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
              className="rounded-md bg-primary px-5 py-3 text-md font-semibold text-black shadow-xs hover:bg-primary/80 hover:no-underline hover:text-black"
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
        p-5 h-full
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
          <div className="flex flex-wrap justify-center gap-4">
            {modules.map((module) => (
              <div key={module.name} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                <ModuleCard module={module} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


function CtaBoilerplate() {
  const [showDonateMenu, setShowDonateMenu] = useState(false);
  const [showMoneroModal, setShowMoneroModal] = useState(false);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Support the Project
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            If this boilerplate saved you time, consider supporting its
            continued development — or reach out if you need help building.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowDonateMenu(!showDonateMenu)}
                className="rounded-md bg-primary px-5 py-3 text-base leading-[1.75] font-semibold text-black shadow-xs hover:bg-primary/80 cursor-pointer border-none"
              >
                Donate
              </button>
              {showDonateMenu && (
                <div className="absolute top-full mt-2 left-0 bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden min-w-[200px] z-10">
                  <a
                    href="https://buy.stripe.com/14A8wPgrZ55n2qc71kfrW00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-3 text-sm text-white hover:bg-white/10 hover:no-underline hover:text-white"
                    onClick={() => setShowDonateMenu(false)}
                  >
                    <CircleDollarSign className="w-5 h-5 shrink-0 text-green-500" />
                    Donate with USD
                  </a>
                  <button
                    onClick={() => {
                      setShowDonateMenu(false);
                      setShowMoneroModal(true);
                    }}
                    className="flex items-center gap-2.5 w-full text-left px-4 py-3 text-sm text-white hover:bg-white/10 cursor-pointer bg-transparent border-none border-t border-t-white/10"
                  >
                    <img src="/img/tech/monero.svg" alt="Monero" className="w-5 h-5 shrink-0" />
                    Donate with Monero
                  </button>
                </div>
              )}
            </div>
            <a
              href="/"
              className="rounded-md bg-white/10 px-5 py-3 text-base leading-[1.75] font-semibold text-white shadow-xs hover:bg-white/20 hover:no-underline hover:text-white"
            >
              View Development Services
            </a>
            <a
              href="https://discord.gg/6q63Xa6SEB"
              className="rounded-md bg-white/10 px-5 py-3 text-base leading-[1.75] font-semibold text-white shadow-xs hover:bg-white/20 hover:no-underline hover:text-white"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>
      {showMoneroModal && (
        <MoneroModal onClose={() => setShowMoneroModal(false)} />
      )}
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
      <Head>
        <meta property="og:image" content="https://devtodollars.com/img/boilerplate-social.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://devtodollars.com/img/boilerplate-social.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <FixedBackground />
      <HeroBoilerplate stars={stars} />
      <ModuleGrid />
      <CtaBoilerplate />
    </Layout>
  );
}
