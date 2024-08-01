const btn_encrypt = document.querySelector(".btn-encrypt");
const btn_decrypt = document.querySelector(".btn-decrypt");
const btn_copy = document.querySelector(".btn-copy");
const input = document.querySelector(".text-input");
const output = document.querySelector(".text-output");
const search = document.querySelector(".search");
const text_info = document.getElementById("text-info");
const right = document.querySelector(".right");
const code = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat"
};
const decode = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u"
};

function replace(new_value){
  output.value = new_value;
  output.classList.add("set");
  right.classList.add("setting");
  input.value = "";
  input.style.height = "auto";
  input.placeholder = "Ingrese el texto aquí";
  search.classList.add("hide");
  text_info.classList.add("hide");
  btn_copy.classList.remove("bn-hide");
}

function reset(){
  input.value = "";
  input.style.height = "auto";
  output.value = "";
  right.classList.remove("setting");
  output.classList.remove("set");
  search.classList.remove("hide");
  text_info.classList.remove("hide");
  btn_copy.classList.add("bn-hide");
  input.focus();
}

btn_encrypt.addEventListener('click', () => {
  const message = input.value.toLowerCase();

  if (message !== "") {
    function encrypt(message) {
      for (const [key, value] of Object.entries(code)) {
        message = message.replaceAll(key, value);
      }
      return message;
    }
    replace(encrypt(message));
  } else {
    alert("Ingrese texto para encriptar");
    reset();
  }
});

btn_decrypt.addEventListener('click', () => {
  const message = input.value.toLowerCase();

  if (message !== "") {
    function decrypt(message) {
      for (const [value, key] of Object.entries(decode)) {
        message = message.replaceAll(value, key);
      }
      return message;
    }
    replace(decrypt(message));
  } else {
    alert("Ingrese texto a desencriptar");
    reset();
  }
});


btn_copy.addEventListener("click", () => {
  output.select();
  document.execCommand('copy');
  alert("Texto Copiado");
  reset();
});

input.addEventListener("input", e => {
  input.style.height = "auto";
  input.style.height = `${e.target.scrollHeight}px`;
});
