import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top-left corner of the page instantly
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any HTML
}