import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";


MouseFollower.registerGSAP(gsap);

export default function PointerFollower() {
  useEffect(() => {
    
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    
    if (isMobile || !document.body) return;

    let cursor;

    
    const initCursor = setTimeout(() => {
      cursor = new MouseFollower({
        container: document.body,
        speed: 0.3,
        ease: "expo.out",
        skewing: 2,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300,
      });
    }, 100);

  
    return () => {
      clearTimeout(initCursor);
      if (cursor) {
        cursor.destroy();
      }
    };
  }, []);

  return null;
}
