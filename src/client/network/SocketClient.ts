/**
 * Socket Client para comunicação real-time
 * Configurado para Fase 5+ (Online Multiplayer)
 */

import { io, Socket } from 'socket.io-client';

class SocketClient {
  private socket: Socket | null = null;
  private connected: boolean = false;

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.connected) {
        resolve();
        return;
      }

      this.socket = io({
        path: '/socket.io',
        transports: ['websocket', 'polling'],
      });

      this.socket.on('connect', () => {
        console.log('[Socket] Conectado ao servidor:', this.socket?.id);
        this.connected = true;
        resolve();
      });

      this.socket.on('disconnect', () => {
        console.log('[Socket] Desconectado do servidor');
        this.connected = false;
      });

      this.socket.on('error', (error) => {
        console.error('[Socket] Erro:', error);
        reject(error);
      });

      // Retry logic
      setTimeout(() => {
        if (!this.connected) {
          reject(new Error('Connection timeout'));
        }
      }, 5000);
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.connected = false;
    }
  }

  emit(event: string, data?: any): void {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  on(event: string, callback: (data: any) => void): void {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  once(event: string, callback: (data: any) => void): void {
    if (this.socket) {
      this.socket.once(event, callback);
    }
  }

  off(event: string): void {
    if (this.socket) {
      this.socket.off(event);
    }
  }

  isConnected(): boolean {
    return this.connected;
  }

  getId(): string | null {
    return this.socket?.id || null;
  }
}

export default new SocketClient();
