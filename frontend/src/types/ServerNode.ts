export interface ServerNode {
  id: number;
  name: string;
  currentConnections: number;
  weight: number;
  active: boolean;
  cpuUsage: number;
  responseTime: number;
}