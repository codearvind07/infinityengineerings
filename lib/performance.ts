/**
 * Performance optimization utilities
 */

// Check if device has reduced motion preference
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Check if device is low performance
export function isLowPerformanceDevice() {
  // Simple heuristic based on device memory and hardware concurrency
  if (typeof navigator === 'undefined' || typeof window === 'undefined') return false;
  
  // @ts-ignore
  const deviceMemory = navigator.deviceMemory || 0;
  const hardwareConcurrency = navigator.hardwareConcurrency || 0;
  
  // Consider low performance if device has less than 2GB memory or less than 4 cores
  return deviceMemory < 2 || hardwareConcurrency < 4;
}

// Debounce function to limit the rate at which a function is called
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Improved Throttle function to limit the rate at which a function is called
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Optimize scroll performance
export function optimizeScrollPerformance() {
  // Use passive event listeners for better performance
  window.addEventListener('scroll', () => {}, { passive: true });
  window.addEventListener('touchmove', () => {}, { passive: true });
  window.addEventListener('wheel', () => {}, { passive: true });
}

// Lazy load images for better performance
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          if (img.dataset.srcSet) {
            img.srcset = img.dataset.srcSet;
            img.removeAttribute('data-srcset');
          }
          imageObserver.unobserve(img);
        }
      });
    }, {
      // Optimize the observer
      rootMargin: '100px 0px',
      threshold: 0.01
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Optimize CSS animations
export function optimizeCSSAnimations() {
  // Reduce animation intensity for users who prefer reduced motion
  if (prefersReducedMotion()) {
    document.body.classList.add('reduce-motion');
  }
  
  // Reduce animations on low performance devices
  if (isLowPerformanceDevice()) {
    document.body.classList.add('low-performance');
  }
}

// Optimize rendering performance
export function optimizeRendering() {
  // Optimize font rendering
  (document.body.style as any).webkitFontSmoothing = 'antialiased';
  (document.body.style as any).mozOsxFontSmoothing = 'grayscale';
}

// Initialize performance optimizations
export function initPerformanceOptimizations() {
  optimizeScrollPerformance();
  lazyLoadImages();
  optimizeCSSAnimations();
  optimizeRendering();
  
  // Add performance monitoring
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance optimizations initialized');
    console.log('Prefers reduced motion:', prefersReducedMotion());
    console.log('Low performance device:', isLowPerformanceDevice());
  }
}