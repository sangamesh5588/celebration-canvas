import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import { Tag, Clock, Percent } from 'lucide-react';

const offers = [
  { id: 1, title: 'Flat 30% Off on Birthday Decor', code: 'BDAY30', validTill: 'Apr 15, 2026', icon: Percent },
  { id: 2, title: '₹500 Off on First Order', code: 'FIRST500', validTill: 'Apr 30, 2026', icon: Tag },
  { id: 3, title: 'Buy 2 Get 1 Free on Party Packages', code: 'PARTY3', validTill: 'Apr 20, 2026', icon: Percent },
  { id: 4, title: '20% Off Anniversary Specials', code: 'LOVE20', validTill: 'May 1, 2026', icon: Tag },
  { id: 5, title: 'Free Setup on Orders Above ₹5000', code: 'FREESETUP', validTill: 'Apr 25, 2026', icon: Percent },
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <SectionHeader title="Offers & Deals" />
      <div className="flex flex-col gap-3 px-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="rounded-2xl border border-border bg-card p-4 shadow-card flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <offer.icon size={20} className="text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-foreground">{offer.title}</h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                  {offer.code}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock size={12} /> {offer.validTill}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
