import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize } = format;

const Logger = createLogger({
  format: combine(
    colorize(),
    timestamp(),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.Console(),
  ],
});

Logger.info('Logger created');

export default Logger;
