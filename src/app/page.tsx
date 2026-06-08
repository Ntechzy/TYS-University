import HeroSection from '@/app/components/home/HeroSection'
import FAQSection from './components/home/FAQSection';
import CtaBanner from './components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <FAQSection/>
      <CtaBanner 
        backgroundImageUrl="https://img.magnific.com/premium-photo/cheerful-indian-asian-young-group-college-students-friends-laughing-together-while-sitting-standing-walking-campus_466689-8627.jpg?semt=ais_hybrid&w=740&q=80" 
      />
    </>
  );
}
