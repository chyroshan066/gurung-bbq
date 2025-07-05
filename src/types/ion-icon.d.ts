import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
        'aria-hidden'?: boolean | 'true' | 'false';
        size?: 'small' | 'large' | string;
        color?: string;
        src?: string;
        icon?: string;
        ios?: string;
        md?: string;
        flipRtl?: boolean;
        lazy?: boolean;
        sanitize?: boolean;
        mode?: 'ios' | 'md';
      };
    }
  }
}

export {};