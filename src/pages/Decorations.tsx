import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import SectionHeader from '@/components/SectionHeader';

import birthdayImg from '@/assets/birthday-decor.jpg';
import proposalImg from '@/assets/proposal-decor.jpg';
import anniversaryImg from '@/assets/anniversary-decor.jpg';
import babyImg from '@/assets/baby-decor.jpg';
import partyImg from '@/assets/party-decor.jpg';
import surpriseImg from '@/assets/surprise-decor.jpg';

const allServices = [
  { id: '1', image: birthdayImg, title: 'Golden Birthday Balloon Setup', price: '₹2,499', tag: 'Trending' },
  { id: '2', image: proposalImg, title: 'Romantic Proposal Under Stars', price: '₹4,999', tag: 'Popular' },
  { id: '3', image: anniversaryImg, title: 'Golden Anniversary Dinner', price: '₹3,499' },
  { id: '4', image: babyImg, title: 'Pastel Baby Shower Theme', price: '₹2,999' },
  { id: '5', image: partyImg, title: 'Neon Party Night Setup', price: '₹3,999', tag: 'Hot' },
  { id: '6', image: surpriseImg, title: 'Surprise Gift Box Decor', price: '₹1,999' },
  { id: '7', image: birthdayImg, title: 'Premium Birthday Bash', price: '₹5,499' },
  { id: '8', image: proposalImg, title: 'Candlelight Proposal Setup', price: '₹6,999', tag: 'Popular' },
  { id: '9', image: anniversaryImg, title: 'Royal Anniversary Setup', price: '₹7,999' },
  { id: '10', image: partyImg, title: 'Club Theme Party Decor', price: '₹4,499' },
];

const Decorations = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <SectionHeader title="All Decorations" />
      <div className="grid grid-cols-2 gap-3 px-4 pb-4">
        {allServices.map((s) => (
          <div key={s.id} className="min-w-0 max-w-none">
            <ServiceCard image={s.image} title={s.title} price={s.price} tag={s.tag} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decorations;
