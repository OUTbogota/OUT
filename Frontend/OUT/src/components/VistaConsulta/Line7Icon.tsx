import { memo, SVGProps } from 'react';

const Line7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1480 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1480' stroke='#E4E4E4' strokeWidth={2} strokeLinecap='round' />
  </svg>
);
const Memo = memo(Line7Icon);
export { Memo as Line7Icon };
