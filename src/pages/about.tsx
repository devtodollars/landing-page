import Layout from "@theme/Layout";
import MeetFounders from "../components/meet-founders";
import FixedBackground from "../components/fixed-background";

export default function About(): JSX.Element {
  return (
    <Layout title="About Us" description="Learn more about DevToDollars and our founders">
      <FixedBackground />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We're a team of experienced technical founders who've been in your shoes.
              We've built startups from the ground up, scaled products to hundreds of thousands of users,
              and know exactly what it takes to turn an idea into a successful business.
            </p>
          </div>
        </div>
      </div>
      <MeetFounders />
    </Layout>
  );
}
