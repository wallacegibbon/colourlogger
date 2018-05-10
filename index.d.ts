declare module "colourlogger" {
    export function getLogger(): Logger;

    export class Logger {
        readonly name: string;
        constructor(name: string);
        disableLog(): void;
        disableLogColor(): void;
        enableLog(): void;
        enableLogColor(): void;
        setLevel(level: LogLevel): void;
        trace(...args: any[]): void;        
        debug(...args: any[]): void;
        info (...args: any[]): void;
        warn (...args: any[]): void;
        error(...args: any[]): void;
        fatal(...args: any[]): void;
    }

    export type LogLevel = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";
}
