const submitBtn = document.querySelector("#submit");
const n_El = document.querySelector("#n");
const k_El = document.querySelector("#k");
const responceEl = document.querySelector("#responce");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault;
  responceEl.innerHTML = "";

  let n = n_El.value === null ? "" : Array(parseInt(n_El.value)).fill(1);
  let k = k_El.value;

  let numberOfDead = 0;
  let missingIndex = 0; //Пропущенные элементы при обнулении счётчика
  let missed = 0;       //Пропущенные "убитые" элементы 
  let arr;
  

  for (
    let i = 0;
    i < n.length;
    arr = checkIndexValue(i, k, n.length), i = arr[0], missingIndex += arr[1]
  ) {
    if ((i + 1 + missingIndex - missed) % k === 0) { //Проверяем кратность
      while (n[i] == 0) {
        arr = checkIndexValue(i, k, n.length);
        i = arr[0];

        arr[1] != 0 ? (missingIndex += arr[1]) : missed++;
      }
      responceEl.innerHTML += `${i + 1} человек умер. \n`;
      n[i] = 0;
      numberOfDead++;
      if (numberOfDead == n.length - 1) {
        break;
      }
    } else if (n[i] === 0) { //Если не кратно, но элемент массива с индексом счётчика "убит"
      missed++;
    }
  }

  responceEl.innerHTML += `${n.indexOf(1) + 1} человек выжил.`;
});

function checkIndexValue(index, k, arrayLength) { // Функция для обнуления счётчика или прибавления единицы
  let missedIndex = 0;
  if (index === arrayLength - 1) {
    missedIndex = (index + 1) % k;
    index = 0;
  } else {
    index++;
  }

  let arr = [index, missedIndex];

  return arr;
}
