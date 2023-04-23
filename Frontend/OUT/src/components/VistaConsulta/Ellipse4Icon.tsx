import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color: string;
}

const Ellipse4Icon = ({ color, ...props }: Props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={10} cy={10} r={10} fill={color} />
  </svg>
);
const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
