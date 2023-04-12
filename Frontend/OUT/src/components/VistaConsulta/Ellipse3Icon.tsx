import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={10} cy={10} r={10} fill='#006DD1' fillOpacity={0.63} />
  </svg>
);
const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
