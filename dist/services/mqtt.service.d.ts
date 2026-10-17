declare class MqttService {
    private client;
    private isConnected;
    private reconnectAttempts;
    getConnected(): boolean;
    initialize(): void;
    private handleMessage;
    publish(topic: string, payload: unknown, options?: {
        retain?: boolean;
        qos?: 0 | 1 | 2;
    }): boolean;
    publishActivationStatus(serialNumber: string, activated: boolean, owner?: string, message?: string): boolean;
    publishCommand(serialNumber: string, subTopic: string, payload: unknown): boolean;
    publishOtaTrigger(serialNumber: string, payload: unknown): boolean;
    publishOtaBroadcast(payload: unknown): boolean;
    disconnect(): Promise<void>;
}
export declare const mqttService: MqttService;
export {};
//# sourceMappingURL=mqtt.service.d.ts.map