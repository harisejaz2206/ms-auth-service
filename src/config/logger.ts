// logger configuration
import winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  defaultMeta: {
    serviceName: 'service-name',
  },
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint(),
      ),
    }),
  ],
})

export default logger
