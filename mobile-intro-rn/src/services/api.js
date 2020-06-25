import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;

/**
 * IOS com Emulador = localhost
 * IOS com dispositivo = ip da máquina
 * Android com Emulador =
 *    - localhost(usar no terminal 'adb reverse tcp:PORTA tcp:PORTA')
 *    - IP especifico para emulador: 10.0.2.2 (Android Studio)
 * Android com dispositivo = ip da máquina
 */