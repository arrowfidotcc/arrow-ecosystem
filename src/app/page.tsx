import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LaunchWizard from "@/components/LaunchWizard";
import DeploymentStatus from "@/components/DeploymentStatus";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <LaunchWizard />
      <DeploymentStatus />
    </>
  );
}
