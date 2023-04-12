import { memo, SVGProps } from 'react';

const Line1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 66' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L1.21583e-07 66' stroke='#E4E4E4' strokeWidth={2} strokeLinecap='round' />
  </svg>
);
const Memo = memo(Line1Icon);
export { Memo as Line1Icon };
