declare class MqttService {
    private client;
    private isConnected;
    private reconnectAttempts;
    getConnected(): boolean;
    initialize(): void;
    private handleMessage;
    publish(topic: string, payload: unknown): boolean;
    publishCommand(serialNumber: string, subTopic: string, payload: unknown): boolean;
    disconnect(): Promise<void>;
}
export declare const mqttService: MqttService;
export {};
//# sourceMappingURL=mqtt.service.d.ts.map