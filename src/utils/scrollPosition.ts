// Store scroll positions for different routes
const scrollPositions: Record<string, number> = {};

// Save the current scroll position for the specified route
export const saveScrollPosition = (route: string): void => {
  scrollPositions[route] = window.scrollY;
};

// Get the saved scroll position for the specified route
export const getScrollPosition = (route: string): number => {
  return scrollPositions[route] || 0;
};

// Restore the scroll position for the current route
export const restoreScrollPosition = (route: string): void => {
  const position = getScrollPosition(route);
  setTimeout(() => {
    window.scrollTo(0, position);
  }, 0);
};

// Utility to track scroll position when navigating between tabs
export const useScrollPreservation = (): void => {
  // Save scroll position before navigating
  window.onbeforeunload = () => {
    const currentPath = window.location.pathname;
    saveScrollPosition(currentPath);
    return undefined;
  };
}; 