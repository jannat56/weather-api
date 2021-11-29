const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',function(){
  const inputBtn = document.getElementById('input-btn').value;
//   console.log(inputBtn);
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=3868eb48a7912aef8ca9b0fd63ce0420')
.then(res => res.json())
.then(data => {
    // console.log(data)
    const cityName = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15;
    const desc = data.weather[0].description;

     document.getElementById('city').innerText= cityName;
    document.getElementById('temp').innerText= temp.toFixed(2);
    document.getElementById('desc').innerText= desc;
    
})
})