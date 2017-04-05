/*
  Arduino Code - for AnalogReadSerial
  Reads an analog input on pin 0, prints the result to the serial monitor.
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

 This example code is in the public domain.
 */

// the setup routine runs once when you press reset:
void setup() {
  //initialize Serial communication
  //we do this so we can read out data to the serial monitor
  Serial.begin(9600); //9600 is the rate of communication

  pinMode(11,OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {

  //OUTOUT STUFF
  //if we have a serial connection
  if(Serial.available() > 0) {
    char input = Serial.parseInt();
    //use the value of the incoming byte to control LED
    analogWrite(11, input);
  }
    
  //INOUT STUFF
  //read our sensor value
  //analogRead() on the pin that we plugged out sensor into
  int sensor1 = analogRead(A0);
  int sensor2 = analogRead(A1);

  //print our data se we can see it! like console.log
  Serial.print(sensor1);
  Serial.print(",");
  Serial.println(sensor2);
  //add a delay to slow things down a bit 
  delay(1);
}
