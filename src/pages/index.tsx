import Layout from "@theme/Layout";
import HeroHome from "../components/hero-home";
import SplitPaths from "../components/split-paths";
import ValueProp from "../components/value-prop";
import OurProcess from "../components/our-process";
import AboutUs from "../components/about-us";
import Testimonial from "../components/testimonial";
import Cta from "../components/cta";
import FixedBackground from "../components/fixed-background";

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="The World's Most Transparent Dev Agency">
      <FixedBackground />
      <HeroHome />
      <SplitPaths />
      <AboutUs />
      <Testimonial />
      <OurProcess />
      <ValueProp />
      <Cta />
    </Layout>
  );
}
