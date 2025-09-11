import * as React from 'react';
export interface ResumeProps {
  href?: string;
  label?: string;
  color?: string;
  download?: boolean;
  className?: string;
  compact?: boolean;
}
declare const Resume: React.FC<ResumeProps>;
export default Resume;
declare module './Resume.jsx' {
  export { ResumeProps };
  export default Resume;
}
declare module './Resume' {
  export { ResumeProps };
  export default Resume;
}
