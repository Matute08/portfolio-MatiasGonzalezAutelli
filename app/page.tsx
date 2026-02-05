import Introduction from "@/components/sections/introduction/introduction";
import TransitionPage from "@/components/animations/transition-page/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-screen h-full bg-no-repeat bg-gradient-cover">
        <Introduction />
      </div>
    </main>
  );
}
