import { env } from '@/environments';

class AppLogger {
  public log!: Function;
  public debug!: Function;
  public info!: Function;
  public warn!: Function;
  public error!: Function;
  public logToServer!: Function;

  constructor() {
    this.initLogger();
  }

  /* eslint-disable no-console */
  private initLogger() {
    if (env.environment !== 'production') {
      this.log = console.log.bind(console);
      this.debug = console.debug.bind(console);
      this.info = console.info.bind(console);
      this.warn = console.warn.bind(console);
      this.error = console.error.bind(console);

      this.logToServer = this.error;
    } else {
      this.log = this.debug = this.info = this.warn = this.error = () =>
        undefined;

      this.logToServer = (err: object | string) => console.error(err);
    }
  }
}

const appLogger = new AppLogger();

export { appLogger };
