interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false
}: ButtonProps) {
  const variants = {
    primary: 'bg-[#1D9E75] text-white',
    secondary: 'bg-white border-2 border-[#1D9E75] text-[#1D9E75]'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} px-6 py-3 rounded-[10px] font-medium transition-opacity disabled:opacity-50 ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </button>
  );
}
