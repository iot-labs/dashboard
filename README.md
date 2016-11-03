#### Language

* [English](https://github.com/iot-labs/communication/blob/master/README.md)
* [Korean](https://github.com/iot-labs/communication/blob/master/README.kr.md)


# <a name="iotlabs-english">IoT Labs - A Framework for Simpler IoT Development Environment
@(_Open Frontier)[IoT Labs]


IoT Labs aims to provide a framework for (communication/storage/analysis) in IoT development for increased productivity.

----

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [IoT Labs - A Framework for Simpler IoT Development Environment](#iotlabs-english)
	- [News](#news-english)
	- [Introduction to IoT Labs](#introduction-to-iot-labs)
		- [Scope](#scope)
	- [Current Status](#current-status)
	- [API Docs](#-)
	- [Get Involved](#get-involved)
		- [Issues](#issues)
		- [Development Participation](#development-participation)
		- [Sponsor](#sponsor)
	- [License](#license)

<!-- /TOC -->

----
## Build Status
#### Platform/Java
[![Build Status](https://api.travis-ci.org/jongkwang/IoTLabs.svg?branch=master)](https://travis-ci.org/jongkwang/IoTLabs)
[![Coverage Status](https://coveralls.io/repos/github/toori67/IoTLabs/badge.svg?branch=master)](https://coveralls.io/github/toori67/IoTLabs?branch=master)

## Introduction to IoT Labs
IoT Labs was created to help IoT device developers who are not familiar with web development environments.
The goal of this project is to help developers realize their IoT ideas.

This project aims to utilize the most common and simple technologies, and emphasizes detailed description of its features. Developers will be able to learn and understand IoT Labs through many of its examples and real-world application case studies.

## Overview

* Communications
	* <img src="https://raw.githubusercontent.com/jongkwang/IoTLabs/master/assets/img/overview1.png">
* Data Storage
	* <img src="https://raw.githubusercontent.com/jongkwang/IoTLabs/master/assets/img/overview2.png">
* Data Analysis
	* <img src="https://raw.githubusercontent.com/jongkwang/IoTLabs/master/assets/img/overview3.png">
*  API
	* <img src="https://raw.githubusercontent.com/jongkwang/IoTLabs/master/assets/img/overview4.png">

----

### Project Goal

The influence of IoT technology is increasing and there have been many attempts to incorporate IoT technology in various fields. Many students and less-experienced developers are trying to create and improve their IoT ideas. But there is a steep learning curve for those who have no background in software engineering.

IoT Labs strives to help those who have great ideas but are not familiar with software engineering by lowering the learning curve of software development.

----

### Scope

- Device Communication
	- MQTT, Web Socket, Bluetooth
- Data Storage
	- JDBC, JSON Store, Redis
- Data Analysis (Dashboard)
	- (Undecided. Suggestions are welcome.)
- API
	- Facebook
	- Twitter
	- Gmail

----

## Current Status

- Device Communication :  ![](https://img.shields.io/badge/Development-Processing-green.svg?style=flat)
- Data Storage :  ![](https://img.shields.io/badge/Development-Processing-green.svg?style=flat)
- Data Analysis (Dashboard) :  ![](https://img.shields.io/badge/Development-Scheduled-green.svg?style=flat)
- API :  ![](https://img.shields.io/badge/Development-Scheduled-green.svg?style=flat)

----

## Development

#### Travis-CI
Contributor 가 많아짐에 따라 Test 와 CI(Continuous Integration)이 중요해짐
그래서 오픈소스인 Travis-CI 를 이용하고 있음

* 모든 개발 코드에는 Test 코드를 넣어야 함 (의무)
* Travis CI 의 테스트를 통화한 것만 Merge 될 수 있습니다

![img04](https://cloud.githubusercontent.com/assets/897510/20933154/8150c43c-bc1a-11e6-915f-6f6a729355d7.jpg)
![img05](https://cloud.githubusercontent.com/assets/897510/20933169/8e93df26-bc1a-11e6-93e7-6985dca9abcf.png)

#### Codecov
프로젝트가 복잡해지고, 혼자 개발하는 것이 아니다보니 테스트에 대한 중요도가 높아짐
Codecov를 통한 테스트 코드의 커버리지 확인

* Code Coverage 를 표시 한다
 * Patch before/after 비교를 해준다
 * Line count 로 명확히 표시한다
* Github 에 직접 Code Coverage 를 표시해 준다

![img06](https://cloud.githubusercontent.com/assets/897510/20933250/d5c99142-bc1a-11e6-8a35-ed6c04eed351.png)
![img07](https://cloud.githubusercontent.com/assets/897510/20933255/d8540852-bc1a-11e6-8c7f-2e697283df0a.png)

----

## Get Involved

## Issues
Please post any questions or suggestions as a [Github Issue](https://github.com/jongkwang/IoTLabs/issues).
A response will be provided as soon as possible.
All questions and suggestions are welcome.

## Development Participation
Help us improve IoT Labs. Contributions are always welcome.

## Sponsor

* This project is sponsored by [KossLab](http://devlab.oss.kr/).


## License
* [IoT Labs](https://github.com/jongkwang/IoTLabs) is under [MIT](https://opensource.org/licenses/MIT) license.
* The respective licenses of all software and fonts must be honored.
* Software and fonts used:
	* Font
		* [스케치명조](http://www.asiasoft.co.kr/)
	* Open Source
		* [Paho](http://www.eclipse.org/paho/) - [Eclipse Public License 1.0](http://projects.eclipse.org/content/eclipse-public-license-1.0)
		* [RabbitMQ](https://www.rabbitmq.com/) - [Mozilla Public License](https://www.rabbitmq.com/mpl.html)

```text
The MIT License (MIT)

Copyright (c) 2016 IoT Labs (https://github.com/jongkwang/IoTLabs)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
