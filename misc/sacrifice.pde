int startTime;
int timeElapsed;

void setup() {
  size (800, 800);
  frameRate(24);
  
  startTime = millis();
}


void draw() {
  timeElapsed = (millis() - startTime)/100;
  
  clear();
  
  
  text(timeElapsed, 10, 30);
}