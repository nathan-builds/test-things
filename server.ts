export type Server = {
    port: number;
    host: string;
    start: () => void;
}