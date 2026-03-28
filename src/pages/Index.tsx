import Navbar from '@/components/Navbar';
import CategoryScroll from '@/components/CategoryScroll';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { useNavigate } from 'react-router-dom';

import birthdayImg from '@/assets/birthday-decor.jpg';
import proposalImg from '@/assets/proposal-decor.jpg';
import anniversaryImg from '@/assets/anniversary-decor.jpg';
import babyImg from '@/assets/baby-decor.jpg';
import partyImg from '@/assets/party-decor.jpg';
import surpriseImg from '@/assets/surprise-decor.jpg';
import promoBanner from '@/assets/promo-banner.jpg';

const trendingServices = [
  { id: '1', image: birthdayImg, title: 'Golden Birthday Balloon Setup', price: '₹2,499', tag: 'Trending' as const },
  { id: '2', image: proposalImg, title: 'Romantic Proposal Under Stars', price: '₹4,999', tag: 'Popular' as const },
  { id: '3', image: anniversaryImg, title: 'Golden Anniversary Dinner', price: '₹3,499', tag: 'Trending' as const },
  { id: '4', image: babyImg, title: 'Pastel Baby Shower Theme', price: '₹2,999' },
];

const popularServices = [
  { id: '5', image: partyImg, title: 'Neon Party Night Setup', price: '₹3,999', tag: 'Hot' as const },
  { id: '6', image: surpriseImg, title: 'Surprise Gift Box Decor', price: '₹1,999' },
  { id: '7', image: birthdayImg, title: 'Premium Birthday Bash', price: '₹5,499', tag: 'Popular' as const },
  { id: '8', image: proposalImg, title: 'Candlelight Proposal Setup', price: '₹6,999' },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />

      {/* Promo Banner */}
      <section className="px-4 pt-4">
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <img src={promoBanner} alt="Special offers on decorations" className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="px-5">
              <p className="text-xs font-semibold text-accent-foreground/80 uppercase tracking-wider">Limited Time</p>
              <h2 className="text-xl font-extrabold text-primary-foreground leading-tight mt-1">Flat 30% Off<br/>First Order</h2>
              <button
                onClick={() => navigate('/offers')}
                className="mt-2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full"
              >
                Explore Offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategoryScroll />

      {/* Trending Now */}
      <SectionHeader title="Trending Now" onAction={() => navigate('/decorations')} />
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-2">
        {trendingServices.map((s) => (
          <ServiceCard key={s.id} image={s.image} title={s.title} price={s.price} tag={s.tag} />
        ))}
      </div>

      {/* Popular Picks */}
      <SectionHeader title="Popular Picks" onAction={() => navigate('/decorations')} />
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-4">
        {popularServices.map((s) => (
          <ServiceCard key={s.id} image={s.image} title={s.title} price={s.price} tag={s.tag} tagColor="highlight" />
        ))}
      </div>
    </div>
  );
};

export default Index;
