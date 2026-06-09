import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NewsAndEvents from "@/components/NewsAndEvents";
import TopNavBar from "@/components/TopNavBar";
import YourNeeds from "@/components/YourNeeds";

function Home() {
  //   const DecorativePattern = ({ side }: { side: "left" | "right" }) => (
  //     <div
  //       className={`absolute ${side}-0 top-0 h-full w-32 opacity-10 pointer-events-none z-0 ${
  //         side === "left" ? "ml-4" : "mr-4"
  //       }`}
  //     >
  //       <div className="flex flex-col gap-2 justify-start h-full overflow-hidden">
  //         {Array.from({ length: 40 }).map((_, index) => (
  //           <div
  //             key={index}
  //             className="w-16 h-16 border-[10px] border-green-600 rotate-45 shrink-0"
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   );

  return (
    <>
      <TopNavBar />
      <HeroSection />
      <YourNeeds />

      <NewsAndEvents />

      <Footer />
    </>
  );
}
export default Home;
