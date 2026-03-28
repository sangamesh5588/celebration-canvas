import Navbar from '@/components/Navbar';
import { useStore } from '@/store/useStore';
import { useNavigate } from 'react-router-dom';
import { User, ShoppingBag, Heart, Settings, LogOut, ChevronRight } from 'lucide-react';

const menuItems = [
  { label: 'My Orders', icon: ShoppingBag },
  { label: 'Wishlist', icon: Heart },
  { label: 'Settings', icon: Settings },
];

const Profile = () => {
  const { user, logout } = useStore();
  const navigate = useNavigate();

  if (!user.isLoggedIn) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
            <User size={36} className="text-muted-foreground" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Welcome to DecoMart</h2>
          <p className="text-sm text-muted-foreground mt-1">Login to manage your orders and preferences</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-6 bg-accent text-accent-foreground font-bold text-sm px-8 py-3 rounded-2xl"
          >
            Login / Sign Up
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <div className="px-4 pt-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <User size={28} className="text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">{user.name || 'User'}</h2>
            <p className="text-sm text-muted-foreground">{user.phone}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center justify-between w-full p-4 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className="text-primary" />
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          ))}

          <button
            onClick={() => { logout(); navigate('/'); }}
            className="flex items-center gap-3 w-full p-4 rounded-2xl bg-card border border-border shadow-card mt-2"
          >
            <LogOut size={20} className="text-destructive" />
            <span className="text-sm font-semibold text-destructive">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
