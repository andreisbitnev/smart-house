# smart-home project
## Introduction
<p>This is a very start of a step-by-step guide on building and deploying a smart-house project using JavaScript as the main programming language on both frontend and backend</p>
<p>The goal of the project is to build a robust and user friendly environment to connect and manage electronic devices at your home or office through wifi</p>


## Software stack
<ul>
    <li>
        During the development as well as in production all the services will be <b>Dockerized</b>, so most of the examples presented in this course will be built using tools available on linux environment.
    </li>
    <li>
        The application to manage the devices by the end user will be built using the <b>MEAN</b> stack <b>(Mongo, Express, Angular 5, Node.js)</b>
    </li>
    <li>
        Wifi relay switches powered by the ESP8266 chip, will be programmed using <b>Mongoose OS</b>, and will also be executing JavaScript
    </li>
    <li>
        IOT devices will be communicating with the server through secure MQTT protocol. The <b>Mosquitto</b> MQTT broker will be user for this purpose
    </li>
</ul>