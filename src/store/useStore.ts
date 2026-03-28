import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface User {
  phone: string;
  name?: string;
  isLoggedIn: boolean;
}

interface AppState {
  user: User;
  cart: CartItem[];
  setUser: (user: User) => void;
  logout: () => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  cartCount: () => number;
}

export const useStore = create<AppState>((set, get) => ({
  user: { phone: '', isLoggedIn: false },
  cart: [],
  setUser: (user) => set({ user }),
  logout: () => set({ user: { phone: '', isLoggedIn: false } }),
  addToCart: (item) => {
    const cart = get().cart;
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      set({ cart: cart.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) });
    } else {
      set({ cart: [...cart, { ...item, quantity: 1 }] });
    }
  },
  removeFromCart: (id) => set({ cart: get().cart.filter((i) => i.id !== id) }),
  cartCount: () => get().cart.reduce((sum, i) => sum + i.quantity, 0),
}));
