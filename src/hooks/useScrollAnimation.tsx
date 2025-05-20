
import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll(".animate-on-scroll").forEach(element => {
      element.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-500", "ease-out");
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
