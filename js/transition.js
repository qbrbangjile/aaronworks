document.addEventListener('DOMContentLoaded', () => {
    // 页面加载时淡入
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 50);
  
    // 拦截所有内部链接点击，先淡出动画再跳转
    document.querySelectorAll('a[href]').forEach(link => {
      // 排除外部链接和锚点链接
      if (link.hostname !== window.location.hostname || link.hash) return;
  
      link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.href;
  
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 120); 
      });
    });
  });
  