import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx and tailwind-merge
 * Utility for conditionally joining tailwind classes together
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 