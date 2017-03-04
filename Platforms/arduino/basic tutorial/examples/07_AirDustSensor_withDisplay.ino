
// LED
// #include <Wire.h>  // Only needed for Arduino 1.6.5 and earlier
#include "SSD1306.h" // alias for `#include "SSD1306Wire.h"`
// Include custom images
// #include "images.h"

// Initialize the OLED display using Wire library
SSD1306  display(0x3c, D3, D5);
// SH1106 display(0x3c, D3, D5);

#define DEMO_DURATION 3000
typedef void (*Demo)(void);

int demoMode = 0;
int counter = 1;

#include <stdio.h>
#include <stdlib.h>


// Reference : http://www.ilikesan.com/category/NodeMCU
// http://arduinodev.woofex.net/2012/12/01/standalone-sharp-dust-sensor/

float dustVal = 0;
float dustDensity = 0;

int ledPower = 10;
int delayTime = 280;
int delayTime2 = 40;
float offTime = 9680;

float globalDust = 0;

void setup() {
  Serial.begin(9600);
  pinMode(ledPower, OUTPUT);
  pinMode(4, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println();


  // Initialising the UI will init the display too.
  display.init();

  display.flipScreenVertically();
  display.setFont(ArialMT_Plain_10);
}

void drawFontFaceDemo() {
  char text[30];
  sprintf(text, "문자 = %0.3f\n", globalDust);


    // Font Demo1
    // create more fonts at http://oleddisplay.squix.ch/
    display.setTextAlignment(TEXT_ALIGN_LEFT);
//    display.setFont(ArialMT_Plain_10);
//    display.drawString(0, 0, "Hello world");
//    display.setFont(ArialMT_Plain_16);
//    display.drawString(0, 10, globalDust);
    display.setFont(ArialMT_Plain_24);
    display.drawString(0, 26, text);
}
Demo demos[] = {drawFontFaceDemo};
int demoLength = (sizeof(demos) / sizeof(Demo));
long timeSinceLastModeSwitch = 0;

void loop() {

  digitalWrite(ledPower, LOW); // power on the LED
  delayMicroseconds(delayTime);

  //먼지 센서를 값을 0.0V~3.3V 을 0~1024 값으로 변경해 줌.
  dustVal = analogRead(A0); // read the dust value
  delayMicroseconds(delayTime2);

  digitalWrite(ledPower, HIGH); // turn the LED off
  delayMicroseconds(offTime);

  delay(1500);


  float voltage = 0;
  float v0 = 0;
  float dust = 0;

  //입력된 볼트를 계산해 줌
  voltage = dustVal * (3.3 / 1024);
  // 볼트를 기준으로 미세먼지 값으로 변환해 줌, 데이터 시트을 참고 오차가 존재합니다.
  dust = (0.17 * voltage) * 1000;


  // 미세먼지 수치 출력
  Serial.print("Dust density(ug/m3) = ");
  Serial.print(dust);

  //아날로그로 읽어 들인 0-1024 수치
  Serial.print(", dustVal = ");
  Serial.print(dustVal);

  // 볼트로 계산해서 출력
  Serial.print(", voltage = ");
  Serial.println(voltage);

  globalDust = dust;


  char output[50];
  //snprintf(output, 50, "%f", dust);
  snprintf (output, sizeof(output), "%f", dust);

  String mystring = String(dust);
  // printf("%s", mystring);


  // clear the display
  display.clear();

  display.setTextAlignment(TEXT_ALIGN_LEFT);
  display.setFont(ArialMT_Plain_24);
  display.drawString(0, 26, mystring);

  // draw the current demo method
  //demos[demoMode]();


  display.setTextAlignment(TEXT_ALIGN_RIGHT);
  display.drawString(10, 128, String(millis()));
  // write the buffer to the display
  display.display();

  if (millis() - timeSinceLastModeSwitch > DEMO_DURATION) {
    demoMode = (demoMode + 1)  % demoLength;
    timeSinceLastModeSwitch = millis();
  }
  counter++;
  delay(10);

}
