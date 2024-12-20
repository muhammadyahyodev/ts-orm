import { createLogger, format, transports } from "winston";

const Logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "HH:mm:ss" }),
    format.printf(({ level, message, timestamp }) => `[${level.toUpperCase()}] ${timestamp} ${message}`)
  ),
  transports: [new transports.Console()],
});

export default Logger;
