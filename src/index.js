(() => {
  const codeInput = document.querySelector("#code");
  const messageSmall = document.querySelector("#message");

  codeInput.value = "1234-5678-9101112-0";

  const showMessage = (message) => {
    messageSmall.innerHTML = message;
    setTimeout(() => {
      messageSmall.innerHTML = "";
    }, 1500);
  };

  codeInput.addEventListener("click", (e) => {
    const dataToClipboard = codeInput.value;
    const data = [
      new ClipboardItem({
        "text/plain": new Blob([dataToClipboard], { type: "text/plain" }),
      }),
    ];

    navigator.clipboard.write(data).then(
      () => {
        showMessage("COPIED!");
      },
      () => {
        showMessage("Unable to write to clipboard. :-(");
      }
    );
  });
})();
