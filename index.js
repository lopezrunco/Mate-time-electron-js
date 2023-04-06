const d = document,
    workTime = 25,
    restTime = 5,
    userName = 'Damian',
    $timer = d.getElementById('timer'),
    $fixedInfo = d.getElementById('fixed-info'),
    $currentInfo = d.getElementById('currentInfo'),
    $currentHour = d.getElementById('current-hour'),
    $startBtn = d.getElementById('start-timer'),
    $stopBtn = d.getElementById('stop-timer'),
    workAlarm = new Audio("./assets/work-alarm.mp3"),
    restAlarm = new Audio("./assets/rest-alarm.mp3")

$fixedInfo.innerHTML = `<span>Work time: <b>${workTime} min<br></b>Rest time: <b>${restTime} min</b></span>`
$timer.innerText = `Hi, ${userName}`
$currentInfo.innerHTML = `<p>It's motion time!<p>`
$stopBtn.style.display = 'none'

const work = () => {
    const startingWorkTime = new Date()
    let stopWorkTime = new Date(startingWorkTime.getTime() + workTime * 60000),
        diference
    workAlarm.play()
    $startBtn.style.display = 'none'
    $stopBtn.style.display = 'block'
    $timer.innerText = 'Work time'
    document.body.classList.add('started')

    let workingInterval = setInterval(() => {
        diference = stopWorkTime - new Date().getTime()
        $currentInfo.innerHTML = `<p>We'll rest in <b>${parseInt(diference / 60000) + 1} min</b></p>`
        if (new Date().getTime() > stopWorkTime.getTime()) {
            clearInterval(workingInterval)
            rest()
        }
    }, 0)
}

const rest = () => {
    const startingRestTime = new Date()
    let stopRestTime = new Date(startingRestTime.getTime() + restTime * 60000)
    restAlarm.play()
    $timer.innerText = 'Mate time'
    $currentInfo.innerHTML = `<p><b>Chill out</b></p>`
    document.body.classList.add('stopped')

    let restInterval = setInterval(() => {
        if (new Date().getTime() > stopRestTime.getTime()) {
            clearInterval(restInterval)
            work()
        }
    }, 0)
}

const resetTimer = () => {
    location.reload()
}

$startBtn.addEventListener('click', e => work())
$stopBtn.addEventListener('click', e => resetTimer())