setInterval(()=>{
    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')
    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    // mengubah 24 jam ke 12 jam!!!
    if (h > 12){
        h = h -12;
    }

    // tambahkan 0 sebelum 1 digit angka
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours. innerHTML = h;
    minutes. innerHTML = m;
    seconds. innerHTML = s;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 510 - (510 * h) / 12;
    // 12 jam
    mm.style.strokeDashoffset = 630 - (630 * m) / 60;
    // 60 menit
    ss.style.strokeDashoffset = 760 - (760 * s) / 60;
    // 60 detik

    sec_dot.style.transform = 'rotateZ(${s * 6}deg)';
    // 360/60sec = 6
    min_dot.style.transform = 'rotateZ(${m * 6}deg)';
    // 
    hr_dot.style.transform = 'rotateZ(${h * 30}deg)';
})