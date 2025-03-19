// myProject/HeartSync/src/directives/lazy.ts
import type { DirectiveBinding } from 'vue';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const  observer  = useIntersectionObserver();

const lazyDirective = {
  mounted(el: HTMLImageElement, binding: DirectiveBinding) {
    if (typeof binding.value === 'string') {
      el.dataset.src = binding.value; // 将图片的URL存储在元素的dataset属性中
    }
    observer.observe(el);
  },
  unmounted(el: any) {
    // 当元素卸载时，取消观察
    observer.unobserve(el);  }
};

export default lazyDirective;