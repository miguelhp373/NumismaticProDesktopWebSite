const btnCopy   =   document.querySelector('#copyButton');
const pixKey    =   'fcb862c6-a9c7-4176-ba53-4a15f6964fd4';

btnCopy.addEventListener('click', (e) => {
  e.preventDefault();
  
  navigator.clipboard.writeText(pixKey);
  
  alert('Texto copiado para área de transferência! Ctrl+V em algum local para colar');
});

