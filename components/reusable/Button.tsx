import { Icon } from "@iconify/react";
import Link from "next/link";

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  text: string;
  prependIcon?: string;
  appendIcon?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { text, prependIcon, appendIcon, href, onClick , ...rest  } = props

  const buttonContent = (
    <div className="flex gap-3 items-center justify-between">
      {prependIcon && <Icon icon={prependIcon} className="text-third size-6" />}
      <span className="text-lg font-semibold">{text}</span>
      {appendIcon && <Icon icon={appendIcon} className="text-third size-6" />}
    </div>
  );
  return (
    //@ts-ignore
    <button onClick={onClick} className="rounded-[30px] bg-black text-third px-3 py-2 cursor-pointer" {...rest}>
      {href ? <Link href={href}>{buttonContent}</Link> : buttonContent}
    </button>
  );
}
