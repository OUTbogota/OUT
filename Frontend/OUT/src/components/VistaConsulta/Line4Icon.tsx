import { memo, SVGProps } from 'react';

const Line4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 47' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L0 47' stroke='#E4E4E4' strokeWidth={2} strokeLinecap='round' />
  </svg>
);
const Memo = memo(Line4Icon);
export { Memo as Line4Icon };
