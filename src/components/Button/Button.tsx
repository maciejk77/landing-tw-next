import clsx from 'clsx';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

/**
 * Common Button component
 * @param {node} [children] - The content of the component
 * @param {string} className - Additional CSS classes (optional)
 * @param {*} props Additional props to pass onto the button
 * @returns <Button href={href} variant={variant} className={className} {...props}>{children}<Button />
 */
export default function Button({
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={clsx(
        'font-semibold inline-block text-center bg-black text-white hover:bg-black-800 text-base sm:text-lg py-3.5 px-4.5 rounded-[16px] transition duration 200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black',
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
