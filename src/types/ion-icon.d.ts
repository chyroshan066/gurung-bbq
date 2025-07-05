declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': {
        name?: string;
        'aria-hidden'?: boolean | 'true' | 'false';
        className?: string;
        size?: string;
        color?: string;
      };
    }
  }
}

export {};