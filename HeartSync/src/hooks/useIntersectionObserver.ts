const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
}

export function useIntersectionObserver() {
    return observer
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        loadImg(entry.target as HTMLImageElement)
        observer.unobserve(entry.target);
      }
    });
  },options);

function loadImg(targetImg: HTMLImageElement){
    targetImg.src = targetImg.dataset.src || "";
}