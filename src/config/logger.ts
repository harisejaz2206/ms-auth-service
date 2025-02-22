// logger configuration
import winston from 'winston'
import { Config } from '.'

const logger = winston.createLogger({
  level: 'info',
  defaultMeta: {
    serviceName: 'service-name',
  },
  transports: [
    new winston.transports.File({
      level: 'info',
      dirname: 'logs',
      filename: 'combined.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint(),
      ),
      silent: false,
    }),
    new winston.transports.File({
      level: 'error',
      dirname: 'logs',
      filename: 'errors.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint(),
      ),
      silent: false,
    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint(),
      ),
      silent: Config.NODE_ENV === 'test',
    }),
  ],
})

export default logger
