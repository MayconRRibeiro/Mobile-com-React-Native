import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.106:3333',
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com disp. físico: IP da máquina
 * Android com Emulador: localhost (ADB Reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com disp. físico: IP da máquina
 */
