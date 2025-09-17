function calculate(operation) {
  let n1 = parseFloat(document.getElementById('num1').value) || 0;
  let n2 = parseFloat(document.getElementById('num2').value) || 0;
  let n3 = parseFloat(document.getElementById('num3').value) || 0;
  let res = 0;

  if (operation === 'add') res = n1 + n2 + n3;
  if (operation === 'sub') res = n1 - n2 - n3;
  if (operation === 'mul') res = n1 * n2 * n3;
  if (operation === 'div') {
    if (n2 === 0 || n3 === 0) {
      document.getElementById('result').innerText = "Division by zero not allowed";
      return;
    }
    res = n1 / n2 / n3;
  }
  document.getElementById('result').innerText = "Result: " + res;
}
