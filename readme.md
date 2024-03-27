<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lopezrunco/Mate-time-electron-js">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Mate-time-electron-js</h3>

  <p align="center">
    Just a simple app to track the working time.
    <br />
    <a href="https://github.com/lopezrunco/Mate-time-electron-js"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#script-version">Script version</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="screenshot.png" >

In my daily work, I often found myself with exhausted eyes in front of my computer screen. To manage work breaks, I developed this app that controls work time and break time.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* HTML
* CSS
* Javascript
* Electron.js

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* nodejs
* npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lopezrunco/Mate-time-electron-js.git
   ```
2. Create "assets" folder and add two mp3 files with this names:
    ```sh
    rest-alarm.mp3 
    work-alarm.mp3
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the app
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Script version

After switching to Arch Linux, I decided to adopt a minimalist approach. Thus, I developed a basic script that runs in Bash, providing screen alerts instead of sound notifications.

```sh
  work_alert() {
    zenity --info --title="Work time" --text="Time to code!" --no-markup --width=250 --timeout=0
  }

  mate_alert() {
    zenity --info --title="Mate time" --text="Take a rest!" --no-markup --width=250 --timeout=0
  }

  # Main loop
  while true; do
      # Display alert every 25 minutes
      work_alert
      sleep $((25 * 60))

      # Display alert every 5 minutes
      mate_alert
      sleep $((5 * 60))
  done
```

<p align="right">(<a href="#top">back to top</a>)</p>

