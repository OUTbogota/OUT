import { memo, SVGProps } from 'react';

const Line3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 90' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L1.41847e-07 90' stroke='white' strokeWidth={2} />
  </svg>
);
const Memo = memo(Line3Icon);
export { Memo as Line3Icon };
