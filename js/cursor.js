document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.id = 'invert-cursor';
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  window.addEventListener('mousedown', () => {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
  });

  window.addEventListener('mouseup', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
  });

  // 选取所有链接和缩略图label
  const hoverTargets = [...document.querySelectorAll('a'), ...document.querySelectorAll('label.thumb-img')];

  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.borderRadius = '50%';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.borderRadius = '50%';
    });
  });
});
