import MainContainer from "@/app/components/containers/MainContainer"
import HeroSection from "@/app/scenes/HeroSection"
import ChefsSection from "@/app/scenes/ChefsSection"
import MealPlanSection from "@/app/scenes/MealPlanSection"
import Footer from "@/app/components/footers/Footer"
import TrendingRecipeSection from "@/app/scenes/TrendingRecipeSection"
import ShowcaseSection from "@/app/scenes/ShowcaseSection"
import LastSection from "@/app/scenes/LastSection"

export default function Home() {

  // TEST LOADING SCREEN
  // const[page, setPage] = useState(null)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPage(content of page here)
  //   }, 3000)
  // }, [])
  // if(!page) {
  //   return <Loading/>
  // }

  return (
    <MainContainer>
      <HeroSection />
      <ChefsSection />
      <MealPlanSection />
      <TrendingRecipeSection />
      <ShowcaseSection />
      <LastSection />
      <Footer />
    </MainContainer>
  );
}
