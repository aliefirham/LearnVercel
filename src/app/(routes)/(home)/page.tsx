import HomeSectionOne from "./components/homesectionone";
import HomeSectionTwo from "./components/homesectiontwo";
import HomeSectionThree from "./components/homesectionthree";
import HomeSectionFour from "./components/homesectionfour";
import HomeSectionFive from "./components/homesectionfive";
import HomeSectionSix from "./components/homesectionsix";
import HomeGallery from "./components/homegallery";
import HomeVideoShowcase from './components/homevideoshowcase'

const Page = () => {
  return (
    <div className="min-h-screen">
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeGallery />
      <HomeVideoShowcase />
      <HomeSectionSix />
    </div>
  );
}

export default Page;
