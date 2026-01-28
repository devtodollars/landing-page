import { Search, ClipboardList, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: "Discovery",
    description: "We sit down with you to understand your vision, goals, and requirements for the application.",
    icon: Search,
  },
  {
    id: 2,
    name: "Scoping",
    description: "We define the project scope with specific timelines and deliverables tailored to your needs.",
    icon: ClipboardList,
  },
  {
    id: 3,
    name: "Development",
    description: "We build your application iteratively, incorporating your feedback at every stage.",
    icon: Code,
  },
  {
    id: 4,
    name: "Launch & Iteration",
    description: "We deploy your application and continue iterating based on real user feedback.",
    icon: Rocket,
  },
];

export default function OurProcess() {
  return (
    <div className="py-24 sm:py-32 bg-[#343434]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-400">
            Our Process
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How We Work
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            A proven four-stage process to bring your idea to life
          </p>
        </div>

        {/* Circular Process - Desktop */}
        <div className="hidden lg:block mt-20">
          <div className="relative mx-auto w-[600px] h-[600px]">
            {/* Connecting circle */}
            <div className="absolute inset-[75px] rounded-full border-2 border-dashed border-yellow-400/30" />

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">Your MVP</p>
                <p className="text-sm text-gray-400">In 14 days</p>
              </div>
            </div>

            {/* Step 1 - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/50">
                <Search className="w-8 h-8 text-black" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold text-yellow-400">01</span>
                <h3 className="text-lg font-bold text-white">{steps[0].name}</h3>
                <p className="text-sm text-gray-400 mt-1">{steps[0].description}</p>
              </div>
            </div>

            {/* Step 2 - Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/50">
                <ClipboardList className="w-8 h-8 text-black" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold text-yellow-400">02</span>
                <h3 className="text-lg font-bold text-white">{steps[1].name}</h3>
                <p className="text-sm text-gray-400 mt-1">{steps[1].description}</p>
              </div>
            </div>

            {/* Step 3 - Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/50">
                <Code className="w-8 h-8 text-black" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold text-yellow-400">03</span>
                <h3 className="text-lg font-bold text-white">{steps[2].name}</h3>
                <p className="text-sm text-gray-400 mt-1">{steps[2].description}</p>
              </div>
            </div>

            {/* Step 4 - Left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/50">
                <Rocket className="w-8 h-8 text-black" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold text-yellow-400">04</span>
                <h3 className="text-lg font-bold text-white">{steps[3].name}</h3>
                <p className="text-sm text-gray-400 mt-1">{steps[3].description}</p>
              </div>
            </div>

            {/* Arrow indicators */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
              {/* Top to Right arrow */}
              <path
                d="M 340 80 Q 450 80 500 180"
                fill="none"
                stroke="rgb(250 204 21 / 0.4)"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              {/* Right to Bottom arrow */}
              <path
                d="M 520 340 Q 520 450 420 500"
                fill="none"
                stroke="rgb(250 204 21 / 0.4)"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              {/* Bottom to Left arrow */}
              <path
                d="M 260 520 Q 150 520 100 420"
                fill="none"
                stroke="rgb(250 204 21 / 0.4)"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              {/* Left to Top arrow */}
              <path
                d="M 80 260 Q 80 150 180 100"
                fill="none"
                stroke="rgb(250 204 21 / 0.4)"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="rgb(250 204 21 / 0.6)"
                  />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Mobile/Tablet - Vertical timeline */}
        <div className="lg:hidden mt-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-400/30" />

            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.id} className="relative flex items-start gap-6">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/50 flex-shrink-0">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-yellow-400">0{step.id}</span>
                    <h3 className="text-xl font-bold text-white">{step.name}</h3>
                    <p className="text-gray-400 mt-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
