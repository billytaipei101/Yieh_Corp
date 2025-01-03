function updateOutput() {
  const dropdown1 = document.getElementById("dropdown1");
  const dropdown2 = document.getElementById("dropdown2");
  const dropdown3 = document.getElementById("dropdown3");
  const dropdown4 = document.getElementById("dropdown4");
  const outputText = document.getElementById("output-text");

  let text = "";

  if (dropdown1.value !== "" && dropdown2.value !== "" && dropdown3.value !== "") {
    text = `My ${dropdown1.value} and ${dropdown2.value} went to the ${dropdown3.value} on Friday.`;
  }

  if (dropdown4.value !== "") {
    text += ` The number is ${dropdown4.value}.`;
  }

  outputText.textContent = text;
}

function copyText() {
  const outputText = document.getElementById("output-text");
  const tempInput = document.createElement("input");
  tempInput.value = outputText.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Text copied!");
}

document.getElementById("dropdown1").addEventListener("change", updateOutput);
document.getElementById("dropdown2").addEventListener("change", updateOutput);
document.getElementById("dropdown3").addEventListener("change", updateOutput);
document.getElementById("dropdown4").addEventListener("change", updateOutput);