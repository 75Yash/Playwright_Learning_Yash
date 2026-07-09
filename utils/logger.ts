export class Logger {

  private static getTimestamp(): string {
    return new Date().toLocaleString();
  }

  private static log(
    level: string,
    ...messages: unknown[]
  ): void {

    console.log(
      `[${Logger.getTimestamp()}] [${level}]`,
      ...messages
    );

  }

  static info(...messages: unknown[]): void {
    Logger.log('INFO', ...messages);
  }

  static warn(...messages: unknown[]): void {
    Logger.log('WARN', ...messages);
  }

  static error(...messages: unknown[]): void {
    Logger.log('ERROR', ...messages);
  }

  static debug(...messages: unknown[]): void {
    Logger.log('DEBUG', ...messages);
  }

}