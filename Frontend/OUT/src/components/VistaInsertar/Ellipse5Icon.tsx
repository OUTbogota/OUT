import { memo, SVGProps } from 'react';

const Ellipse5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={35} cy={35} r={35} fill='#FF7575' />
  </svg>
);
const Memo = memo(Ellipse5Icon);
export { Memo as Ellipse5Icon };