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

// Throttle function to limit the rate at which a function is called
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Optimize scroll performance
export function optimizeScrollPerformance() {
  // Disable scroll anchoring to prevent layout shifts during scroll
  document.documentElement.style.scrollBehavior = 'smooth';
  document.documentElement.style.scrollPaddingTop = '0';
  
  // Optimize rendering during scroll
  let ticking = false;
  
  function updateScrollPosition() {
    // Any scroll-related updates can go here
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }
  
  // Use passive event listeners for better performance
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('touchmove', requestTick, { passive: true });
  window.addEventListener('wheel', requestTick, { passive: true });
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
      rootMargin: '50px 0px',
      threshold: 0.01
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Optimize CSS animations
export function optimizeCSSAnimations() {
  // Add will-change property to animated elements
  const animatedElements = document.querySelectorAll(
    '.animate-fade-in-up, .animate-marquee, .navy-glow, .navy-pulse, .crypto-wireframe, .crypto-button, .gold-glow, .gold-pulse, .gold-float, .gold-rotate, .gold-shimmer, .gold-drift, .gold-sparkle, .will-change-transform'
  );
  
  animatedElements.forEach(el => {
    // Only add will-change if not already present
    if (!el.classList.contains('will-change-transform')) {
      el.classList.add('will-change-transform');
    }
  });
  
  // Reduce animation intensity for users who prefer reduced motion
  if (prefersReducedMotion()) {
    document.body.classList.add('reduce-motion');
  }
}

// Optimize rendering performance
export function optimizeRendering() {
  // Enable hardware acceleration for composited layers
  const compositedElements = document.querySelectorAll('.composited');
  compositedElements.forEach(el => {
    (el as HTMLElement).style.transform = 'translateZ(0)';
  });
  
  // Optimize font rendering - using type assertion for vendor-prefixed properties
  (document.body.style as any).webkitFontSmoothing = 'antialiased';
  (document.body.style as any).mozOsxFontSmoothing = 'grayscale';
  
  // Reduce animations on low performance devices
  if (isLowPerformanceDevice()) {
    document.body.classList.add('low-performance');
  }
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