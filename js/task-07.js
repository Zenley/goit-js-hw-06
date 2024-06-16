const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  const currentSize = fontSizeControl.value + 'px';
  
  text.style.fontSize = currentSize;
});

text.style.fontSize = fontSizeControl.value + 'px';
