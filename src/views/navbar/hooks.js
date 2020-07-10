import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};

// show/hide nav background; true=transparent; false=backgroundColor
export const useOnScroll = (position, positionHandler, handler) => {
  // useEffect(() => {
  let didScroll = false;
  window.onscroll = handleScroll;
  function handleScroll() {
    didScroll = true;
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 20) {
      currentScrollPos = 0;
    }
    if (currentScrollPos) {
      //console.log(currentScrollPos, ' ', position);
      // caso de safari que pageYOffset puede ser negativo
      currentScrollPos <= 0 ? handler(true) : handler(false);
      // : Math.abs(currentScrollPos - position > 10 || position === 0)
      // ? handler(true)
      //: handler(currentScrollPos < position);
      //positionHandler(currentScrollPos);
    } else {
      handler(true);
      //positionHandler(8000);
    }
  }

  setInterval(() => {
    if (didScroll) {
      didScroll = false;
    }
  }, 100);
  // });
};
