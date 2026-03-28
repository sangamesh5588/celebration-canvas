import { MapPin, Search, ShoppingBag } from 'lucide-react';
import { useStore } from '@/store/useStore';

const Navbar = () => {
  const cartCount = useStore((s) => s.cartCount());

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 max-w-lg mx-auto">
        <button className="flex items-center gap-1.5 text-primary">
          <MapPin size={18} />
          <div className="text-left">
            <p className="text-xs font-bold leading-tight">Mumbai</p>
            <p className="text-[10px] text-muted-foreground leading-tight">Andheri West</p>
          </div>
        </button>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Search size={20} className="text-foreground" />
          </button>
          <button className="relative p-2 rounded-full hover:bg-muted transition-colors">
            <ShoppingBag size={20} className="text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full min-w-[18px] h-[18px]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
