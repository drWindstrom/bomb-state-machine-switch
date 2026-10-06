type BombSignals = "UP" | "DOWN" | "ARM" | "TICK";

type BombStates = "SETTING" | "TIMING" | "EXPLODED";

class Event {
  sig;

  constructor(sig: BombSignals) {
    this.sig = sig;
  }
}

class TickEvent extends Event {
  fineTime: number;

  constructor(sig: BombSignals, fineTime: number) {
    super(sig);
    this.fineTime = fineTime;
  }
}

class BombFSM {
  state?: BombStates;
  timeout = 60; // timeout in [s] until the bomb explodes
  code = 0;
  defuse: number;

  constructor(defuse: number) {
    this.defuse = defuse;
  }

  init(): void {
    this.state = "SETTING";
  }

  dispatch(e: Event): void {
    switch (this.state) {
      case "SETTING": {
        switch (e.sig) {
          case "UP": {
            if (this.timeout < 60) {
              this.timeout++;
              console.log(`Timeout: ${this.timeout} seconds.`);
            }
            break;
          }
          case "DOWN": {
            if (this.timeout > 1) {
              this.timeout--;
              console.log(`Timeout: ${this.timeout} seconds.`);
            }
            break;
          }
          case "ARM": {
            this.code = 0;
            this.state = "TIMING";
            break;
          }
        }
        break;
      }
      case "TIMING": {
        switch (e.sig) {
          case "UP": {
            this.code <<= 1;
            this.code |= 1;
            break;
          }
          case "DOWN": {
            this.code <<= 1;
            break;
          }
          case "ARM": {
            if (this.code === this.defuse) {
              this.state = "SETTING";
            }
            break;
          }
          case "TICK": {
            if ((e as TickEvent).fineTime === 0) {
              this.timeout--;
              console.log(`Timeout: ${this.timeout} seconds.`);
              if (this.timeout === 0) {
                this.state = "EXPLODED";
                console.log("BOOM!");
              } else {
                this.state = "TIMING";
              }
            }
            break;
          }
        }
        break;
      }
      default: {
        console.log(
          "Please initialize the state machine before dispatching events.",
        );
        break;
      }
    }
  }
}
