import { Icon } from "@iconify/react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ text, icon, href, onClick }: ButtonProps) {
  const buttonContent = (
    <div className="flex gap-3 items-center justify-between">
      <span className="text-lg font-semibold">{text}</span>
      {icon && <Icon icon={icon} className="text-third size-6" />}
    </div>
  );
  return (
    <button onClick={onClick} className="rounded-[30px] bg-black text-third px-3 py-2 cursor-pointer">
      {href ? <Link href={href}>{buttonContent}</Link> : buttonContent}
    </button>
  );
}
