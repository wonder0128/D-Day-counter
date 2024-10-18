const messageContainer = document.querySelector('#d-day-message');
const container = document.getElementById('d-day-container');

// container.style.display = 'none';
messageContainer.innerHTML = `<h3>D-Day를 입력해주세요.</h3>`;

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`; // 템플릿 리터럴

  return dateFormat;
  // console.log(inputYear, inputMonth, inputDate)
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 자정 기준
  const remaining = (targetDate - nowDate) / 1000;

  if(remaining <= 0){
    // remaining === 0 - 만약, remainig이 0이라면, 타이머가 종료 되었습니다. 출력
    messageContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
  } else if (isNaN(remaining)){
    // 만약, 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력
    messageContainer.innerHTML = `<h3>유효한 시간대가 아닙니다.</h3>`;
  }

  const remainingObj = {
    reminingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60
  }

  const documentObj = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    min: document.getElementById('min'),
    sec: document.getElementById('sec')
  }

  const timeKeys = Object.keys(remainingObj);
  const docKeys =  Object.keys(documentObj);

  for(let i = 0; i < timeKeys.length; i++){
    documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
  }

  // documentObj.days.textContent = remainingObj['reminingDate'];
  // documentObj.hours.textContent = remainingObj['remainingHours'];
  // documentObj.min.textContent = remainingObj['remainingMin'];
  // documentObj.sec.textContent = remainingObj['remainingSec'];

};