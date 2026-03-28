import { Cake, Heart, Baby, PartyPopper, Gift, Sparkles } from 'lucide-react';

const categories = [
  { label: 'Birthday', icon: Cake, color: 'bg-pink-50 text-pink-500' },
  { label: 'Proposal', icon: Heart, color: 'bg-red-50 text-red-500' },
  { label: 'Anniversary', icon: Sparkles, color: 'bg-amber-50 text-amber-500' },
  { label: 'Baby', icon: Baby, color: 'bg-blue-50 text-blue-500' },
  { label: 'Party', icon: PartyPopper, color: 'bg-purple-50 text-purple-500' },
  { label: 'Surprise', icon: Gift, color: 'bg-green-50 text-green-500' },
];

const CategoryScroll = () => {
  return (
    <section className="px-4 py-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((cat) => (
          <button key={cat.label} className="flex flex-col items-center gap-2 min-w-[68px]">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${cat.color} transition-transform active:scale-95`}>
              <cat.icon size={24} />
            </div>
            <span className="text-xs font-medium text-foreground">{cat.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryScroll;
