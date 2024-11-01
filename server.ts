export type Server = {
    port: number;
    host: string;
    start: () => void;
}

export const createServer = (port: number, host: string): Server => {
    return {
        port,
        host,
        start: () => {
            console.log('Server started');
        }
    }
}