declare module 'framer-motion' {
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    variants?: any;
    custom?: any;
    layout?: any;
    layoutId?: string;
    className?: string;
    style?: any;
    children?: any;
    [key: string]: any;
  }

  export const motion: any;
  export const AnimatePresence: any;
  export function useScroll(options?: any): any;
  export function useTransform(...args: any[]): any;
  export function useSpring(...args: any[]): any;
  export function useMotionValue(...args: any[]): any;
  export function useInView(...args: any[]): any;
  export function useAnimation(...args: any[]): any;
  export function useVelocity(...args: any[]): any;
}
