const endDate = "28 feb 2024 12:00 AM"; // here mention the proper date and time 

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const different = (end - now) / 1000;
  console.log(different);

  if (different < 0) return; // Negative value is not accept

  // coverent into milisecond to  second,minute,Hr,day
  inputs[0].value = Math.floor(different / 3600 / 24); //days value

  inputs[1].value = Math.floor((different / 3600) % 24); //hr value

  inputs[2].value = Math.floor((different / 60) % 60); //minute value

  inputs[3].value = Math.floor(different % 60); //Second value
}
// initial function  call
clock();

// every second function call
setInterval(() => {
  clock();
}, 
1000);
