/*
 * Project WakeMeUp
 * Description: Wakes you up
 * Author: Jacob Leiken, Jeffrey Kennan, Stephanie Zhang, and Warren Partridge
 * Date: 1/27/18 - 1/28/18
 */

int led = D0;
int motor = D1;
int status = 0;

// setup() runs once, when the device is first turned on.
void setup() {
  pinMode(motor, OUTPUT);
  pinMode(led, OUTPUT);

  digitalWrite(motor, LOW);
  digitalWrite(led, LOW);
  // to call: POST /v1/devices/2b003f001747343338333633/wake
  Particle.function("wake",wakeUp);
  Particle.variable("status",status);
}

// loop() runs over and over again, as quickly as it can execute.
void loop() {
  // do nothing, all actions are performed in callbacks
}

int wakeUp(String command) {
  if (command == "open") {
    lightUp();
    digitalWrite(motor, HIGH);
    delay(10000);
    digitalWrite(motor, LOW);
    status = 1;
    return 1;
  } else if (command == "off") {
    digitalWrite(motor, LOW);
    digitalWrite(led, LOW);
    status = 0;
    return 0;
  }
}

void lightUp() {
  for (int i = 0; i < 256; i++) {
    analogWrite(led, i);
    delay(50);
  }
}
