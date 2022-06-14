const d = document,
    workTime = 2,
    restTime = 1,
    $timer = d.getElementById('timer'),
    $fixedInfo = d.getElementById('fixed-info'),
    $currentInfo = d.getElementById('currentInfo'),
    $currentHour = d.getElementById('current-hour'),
    $startBtn = d.getElementById('start-timer'),
    $stopBtn = d.getElementById('stop-timer'),
    workAlarm = new Audio("./assets/work-alarm.mp3"),
    restAlarm = new Audio("./assets/rest-alarm.mp3")

$fixedInfo.innerHTML = `<p>Code time: <b>${workTime} min | </b>Rest time: <b>${restTime} min</b></p>`
$timer.innerText = `Hi, dev`
$currentInfo.innerHTML = `<p>It's time to write some code<p>`
$stopBtn.style.display = 'none'

const work = () => {
    const startingWorkTime = new Date()
    let stopWorkTime = new Date(startingWorkTime.getTime() + workTime * 60000),
        diference
    workAlarm.play()
    $startBtn.style.display = 'none'
    $stopBtn.style.display = 'block'
    $timer.innerText = 'Code time'

    let workingInterval = setInterval(() => {
        diference = stopWorkTime - new Date().getTime()
        $currentInfo.innerHTML = `<p>We'll rest in <b>${parseInt(diference / 60000) + 1} min</b></p>`
        if (new Date().getTime() > stopWorkTime.getTime()) {
            clearInterval(workingInterval)
            rest()
        }
    }, 1000)
}

const rest = () => {
    const startingRestTime = new Date()
    let stopRestTime = new Date(startingRestTime.getTime() + restTime * 60000)
    restAlarm.play()
    $timer.innerText = 'Mate time'
    $currentInfo.innerHTML = `<p><b>Chill out</b></p>`

    let restInterval = setInterval(() => {
        if (new Date().getTime() > stopRestTime.getTime()) {
            clearInterval(restInterval)
            work()
        }
    }, 1000)
}

const resetTimer = () => {
    $timer.innerText = 'Stopped'
    $currentInfo.innerHTML = `<p>Reseting timer...</p>`
    $startBtn.style.display = 'block'
    $stopBtn.style.display = 'none'
    setTimeout(() => location.reload(), 2000);
}

$startBtn.addEventListener('click', e => work())
$stopBtn.addEventListener('click', e => resetTimer())