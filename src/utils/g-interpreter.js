import * as gcode from 'gcode';

class Interpreter extends gcode.Interpreter {

  constructor() {
    super();

    this.lineCounter = 0;
  }

  incrementCounter() {
    this.lineCounter++;
    console.log(this.lineCounter);
  }

  // Missing Command Definition
  '_'(args) {
    console.log('No Code Defined!');
    console.log(args);
    this.incrementCounter();
  }

  // G Modal Group

  'G0'(args) {
    console.log('G0! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G1'(args) {
    console.log('G1! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G2'(args) {
    console.log('G2! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G3'(args) {
    console.log('G3! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G4'(args) {
    console.log('G4! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G10'(args) {
    console.log('G10! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G17'(args) {
    console.log('G17! Plane Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G18'(args) {
    console.log('G18! Plane Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G19'(args) {
    console.log('G19! Plane Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G20'(args) {
    console.log('G20! Select Imperial Units!');
    console.log(args);
    this.incrementCounter();
  }

  'G21'(args) {
    console.log('G21! Select Metric Units!');
    console.log(args);
    this.incrementCounter();
  }

  'G28'(args) {
    console.log('G28! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G30'(args) {
    console.log('G30! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G38_2'(args) {
    console.log('G38.2! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G40'(args) {
    console.log('G40! Cutter Radius Compensation!');
    console.log(args);
    this.incrementCounter();
  }

  'G41'(args) {
    console.log('G41! Cutter Radius Compensation!');
    console.log(args);
    this.incrementCounter();
  }

  'G42'(args) {
    console.log('G42! Cutter Radius Compensation!');
    console.log(args);
    this.incrementCounter();
  }

  'G43'(args) {
    console.log('G43! Tool Length Offset!');
    console.log(args);
    this.incrementCounter();
  }

  'G49'(args) {
    console.log('G49! Tool Length Offset!');
    console.log(args);
    this.incrementCounter();
  }

  'G53'(args) {
    console.log('G53! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G54'(args) {
    console.log('G54! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G55'(args) {
    console.log('G55! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G56'(args) {
    console.log('G56! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G57'(args) {
    console.log('G57! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G58'(args) {
    console.log('G58! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G59'(args) {
    console.log('G59! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G59_1'(args) {
    console.log('G59.1! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G59_2'(args) {
    console.log('G59.2! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G59_3'(args) {
    console.log('G59.3! Coordinate System Selection!');
    console.log(args);
    this.incrementCounter();
  }

  'G61'(args) {
    console.log('G61! Path Control Mode!');
    console.log(args);
    this.incrementCounter();
  }

  'G61_1'(args) {
    console.log('G61.1! Path Control Mode!');
    console.log(args);
    this.incrementCounter();
  }

  'G64'(args) {
    console.log('G64! Path Control Mode!');
    console.log(args);
    this.incrementCounter();
  }

  'G80'(args) {
    console.log('G80! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G81'(args) {
    console.log('G81! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G82'(args) {
    console.log('G82! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G83'(args) {
    console.log('G83! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G84'(args) {
    console.log('G84! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G85'(args) {
    console.log('G85! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G86'(args) {
    console.log('G86! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G87'(args) {
    console.log('G87! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G88'(args) {
    console.log('G88! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G89'(args) {
    console.log('G89! Motion!');
    console.log(args);
    this.incrementCounter();
  }

  'G90'(args) {
    console.log('G90! Distance Mode!');
    console.log(args);
    this.incrementCounter();
  }

  'G91'(args) {
    console.log('G91! Distance Mode!');
    console.log(args);
    this.incrementCounter();
  }

  'G92'(args) {
    console.log('G92! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G92_1'(args) {
    console.log('G92.1! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G92_2'(args) {
    console.log('G92.2! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G92_3'(args) {
    console.log('G92.3! Undefined!');
    console.log(args);
    this.incrementCounter();
  }

  'G93'(args) {
    console.log('G93! Feed Rate Mode!');
    console.log(args);
    this.incrementCounter();
  }

  'G94'(args) {
    console.log('G94! Feed Rate Mode!');
    console.log(args);
    this.incrementCounter();
  }

  'G98'(args) {
    console.log('G98! Return Mode in Canned Cycles!');
    console.log(args);
    this.incrementCounter();
  }

  'G99'(args) {
    console.log('G99! Return Mode in Canned Cycles!');
    console.log(args);
    this.incrementCounter();
  }

  // M Modal Group

  'M0'(args) {
    console.log('M0! Stopping!');
    console.log(args);
    this.incrementCounter();
  }

  'M1'(args) {
    console.log('M1! Stopping!');
    console.log(args);
    this.incrementCounter();
  }

  'M2'(args) {
    console.log('M2! Stopping!');
    console.log(args);
    this.incrementCounter();
  }

  'M3'(args) {
    console.log('M3! Spindle Turning!');
    console.log(args);
    this.incrementCounter();
  }

  'M4'(args) {
    console.log('M4! Spindle Turning!');
    console.log(args);
    this.incrementCounter();
  }

  'M5'(args) {
    console.log('M5! Spindle Turning!');
    console.log(args);
    this.incrementCounter();
  }

  'M6'(args) {
    console.log('M6! Tool Change!');
    console.log(args);
    this.incrementCounter();
  }

  'M7'(args) {
    console.log('M7! Coolant!');
    console.log(args);
    this.incrementCounter();
  }

  'M8'(args) {
    console.log('M8! Coolant!');
    console.log(args);
    this.incrementCounter();
  }

  'M9'(args) {
    console.log('M9! Coolant!');
    console.log(args);
    this.incrementCounter();
  }

  'M30'(args) {
    console.log('M30! Stopping!');
    console.log(args);
    this.incrementCounter();
  }

  'M48'(args) {
    console.log('M48! Enable/Disable Feed and Speed Override Switches!');
    console.log(args);
    this.incrementCounter();
  }

  'M49'(args) {
    console.log('M48! Enable/Disable Feed and Speed Override Switches!');
    console.log(args);
    this.incrementCounter();
  }

  'M60'(args) {
    console.log('M60! Stopping!');
    console.log(args);
    this.incrementCounter();
  }
}

export default Interpreter;
