type Callback = () => void;

export class Eventing {
  evets: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    const handlers = this.evets[eventName] || [];

    handlers.push(callback);
    this.evets[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.evets[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  }
}
