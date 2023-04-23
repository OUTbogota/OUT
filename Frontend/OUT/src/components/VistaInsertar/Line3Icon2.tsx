import { memo, SVGProps } from 'react';

const Line3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 90' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L0 90' stroke='#E4E4E4' strokeWidth={2} strokeLinecap='round' />
  </svg>
);
const Memo = memo(Line3Icon2);
export { Memo as Line3Icon2 };
