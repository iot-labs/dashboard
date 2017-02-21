int LED = 16;    // Use D0, GPIO16

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT); // Initialize the LED pin as an output
}

// the loop function runs over and over again forever
void loop() {

  for( int i=0; i<255; i++ ) {
    analogWrite(LED, i);  // analogWrite range : 0~255
    delay(10);
  }

}
