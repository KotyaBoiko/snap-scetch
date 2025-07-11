import CategoryList from "@/features/session/components/CategoryList";
import AboutUsBanner from "@/features/home/components/AboutUsBanner";
import Banner from "@/features/home/components/Banner/Banner";
import ForWhom from "@/features/home/components/ForWhom";
import WhyUs from "@/features/home/components/WhyUs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="relative z-20 bg-main-beige">
        <AboutUsBanner/>
        <WhyUs/>
        <ForWhom/>
        <CategoryList max={4} title="TRY IT NOW"/>
      </div>
    </div>
  );
};

export default HomePage;
