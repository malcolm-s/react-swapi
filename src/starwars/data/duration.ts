interface DurationOptions {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export class Duration {
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor(private options: DurationOptions) {
    this.days = options.days || 0;
    this.hours = options.hours || 0;
    this.minutes = options.minutes || 0;
    this.seconds = options.seconds || 0;
  }

  public toMilliSeconds(): number {
    if (this.days && this.days > 0) {
      return new Duration({
        hours: (this.days * 24) + this.hours,
        minutes: this.minutes,
        seconds: this.seconds
      }).toMilliSeconds();
    }
    if (this.hours && this.hours > 0) {
      return new Duration({
        minutes: (this.hours * 60) + this.minutes,
        seconds: this.seconds
      }).toMilliSeconds();
    }
    if (this.minutes && this.minutes > 0) {
      return new Duration({
        seconds: (this.minutes * 60) + this.seconds
      }).toMilliSeconds();
    }

    return this.seconds * 1000;
  }
}
