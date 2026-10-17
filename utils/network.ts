import os from 'os';
import { Request } from 'express';

export function getLocalIpAddress(): string {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    const ifaceList = interfaces[name];
    if (!ifaceList) continue;
    for (const iface of ifaceList) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

export function resolveServerBaseUrl(req: Request): string {
  if (process.env.PUBLIC_API_URL && process.env.PUBLIC_API_URL.trim() !== '') {
    return process.env.PUBLIC_API_URL.replace(/\/+$/, '');
  }

  const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'http';
  let host = req.headers['x-forwarded-host'] || req.get('host') || 'localhost:3000';

  if (Array.isArray(host)) {
    host = host[0];
  }

  const hostName = host.split(':')[0];
  const port = host.includes(':') ? host.split(':')[1] : (process.env.PORT || '3000');

  if (hostName === 'localhost' || hostName === '127.0.0.1') {
    const localIp = getLocalIpAddress();
    if (localIp !== '127.0.0.1') {
      host = `${localIp}:${port}`;
    }
  }

  return `${protocol}://${host}`;
}
