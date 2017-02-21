int LED = 16;    // Use D0, GPIO16

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT); // Initialize the LED pin as an output
}

// the loop function runs over and over again forever
void loop() {
  analogWrite(LED, 0);  // analogWrite range : 0~255
  delay(400);

  analogWrite(LED, 100);
  delay(400);

  analogWrite(LED, 255);
  delay(400);

}
