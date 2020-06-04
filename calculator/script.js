const $lis = document.querySelectorAll("li");

$lis.forEach((node) => {
   node.addEventListener("mousedown", function (event) {
      event.preventDefault();
      const value = node.innerText.trim();
      const $result = document.querySelector(".result");
      const resultText = $result.innerText.trim();

      if (resultText == "0" || resultText == "undefined" || resultText == "Infinity") {
         $result.innerText = '';
      }

      if (value == "=") {
         let solution = eval(resultText);
         $result.innerText = solution;
         return true;
      }

      if (value.toLowerCase() == "c") {
         $result.innerText = '';
         return true;
      }

      if (value == "×") {
         $result.append("*");
      } else if (value == "÷") {
         $result.append("/");
      } else {
         $result.append(value);
      }

   })
});