const textarea = document.getElementById("text");
const counter = document.getElementById("counter");
const btn = document.getElementById("btn");
const maxlength = 280;
textarea.addEventListener("input", () => {
  let text = textarea.value;
  if (text.length > maxlength) {
    text = text.slice(0, maxlength);
    textarea.value = text;
  }

  let remaining = maxlength - text.length;
  counter.textContent = remaining + "/" + maxlength;
  if (remaining <= 0) {
    counter.style.color = "red";
    btn.style.backgroundColor = "red";
  } else {
    counter.style.color = "#555";
    btn.style.backgroundColor = "";
  }

  btn.disabled = text.length === 0 || text.length > maxlength || remaining <= 0;

  //counter.textContent = textarea.value.length + "/" + maxlength;
});
