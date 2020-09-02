(() => {
  const codeInput = document.querySelector('#code');
  const messageSmall = document.querySelector('#message');

  const r = () => {
    return parseInt(Math.random() * (9999 - 1111) + 1111);
  };

  const showMessage = (message) => {
    messageSmall.innerHTML = message;
    setTimeout(() => (messageSmall.innerHTML = ''), 1500);
  };

  const copyTextToClipboard = async (e) => {
    try {
      const dataToClipboard = codeInput.value;
      const data = [
        new ClipboardItem({
          'text/plain': new Blob([dataToClipboard], { type: 'text/plain' }),
        }),
      ];

      await navigator.clipboard.write(data);
      showMessage('copied!');
    } catch (error) {
      showMessage('Unable to write to clipboard. :-(');
      console.error('Unable to write to clipboard', { error });
    }
  };

  codeInput.value = `${r()}.${r()}.${r()}.${r()}-${r()}`;
  codeInput.addEventListener('click', copyTextToClipboard);
})();
