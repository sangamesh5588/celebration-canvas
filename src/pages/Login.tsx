import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const { setUser } = useStore();
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phone.length === 10) setStep('otp');
  };

  const handleVerifyOtp = () => {
    if (otp.length === 4) {
      setUser({ phone: `+91${phone}`, isLoggedIn: true, name: 'User' });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 max-w-lg mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-primary">Welcome to<br />DecoMart ✨</h1>
          <p className="text-sm text-muted-foreground mt-2">
            {step === 'phone' ? 'Enter your phone number to continue' : 'Enter the OTP sent to your phone'}
          </p>
        </div>

        {step === 'phone' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
              <Phone size={20} className="text-primary" />
              <span className="text-sm font-semibold text-muted-foreground">+91</span>
              <input
                type="tel"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter phone number"
                className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/50"
              />
            </div>
            <button
              onClick={handleSendOtp}
              disabled={phone.length !== 10}
              className="w-full bg-accent text-accent-foreground font-bold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-40 transition-opacity"
            >
              Send OTP <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex gap-3 justify-center">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="tel"
                  maxLength={1}
                  value={otp[i] || ''}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    const newOtp = otp.split('');
                    newOtp[i] = val;
                    setOtp(newOtp.join(''));
                    if (val && e.target.nextElementSibling) {
                      (e.target.nextElementSibling as HTMLInputElement).focus();
                    }
                  }}
                  className="w-14 h-14 text-center text-xl font-bold bg-card border-2 border-border rounded-2xl text-foreground outline-none focus:border-accent transition-colors"
                />
              ))}
            </div>
            <button
              onClick={handleVerifyOtp}
              disabled={otp.length !== 4}
              className="w-full bg-accent text-accent-foreground font-bold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-40 transition-opacity"
            >
              Verify & Continue <ArrowRight size={16} />
            </button>
            <button onClick={() => setStep('phone')} className="w-full text-sm text-muted-foreground font-medium">
              Change number
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
