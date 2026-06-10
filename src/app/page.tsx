import HeroSection from '@/app/components/home/HeroSection'
import FAQSection from './components/home/FAQSection';
import CtaBanner from './components/home/CtaBanner';
import QuickStats from './components/home/QuickStats';
import AdmissionProcess from './components/home/AdmissionProcess';
import WhyChooseUs from './components/home/WhyChooseUs';
import AboutUniversity from './components/home/AboutUniversity';
import TopRecruiters from './components/home/Toprecruiters';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutUniversity/>
      <CtaBanner 
        backgroundImageUrl="https://img.magnific.com/premium-photo/cheerful-indian-asian-young-group-college-students-friends-laughing-together-while-sitting-standing-walking-campus_466689-8627.jpg?semt=ais_hybrid&w=740&q=80" 
      />
      <WhyChooseUs/>
      <QuickStats/>
      <TopRecruiters/>
      <AdmissionProcess/>
      <FAQSection/>
    </>
  );
}
