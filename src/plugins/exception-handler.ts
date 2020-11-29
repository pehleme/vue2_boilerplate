import { appLogger } from '@/app/config';
import Vue from 'vue';

Vue.config.errorHandler = (err, vm, info) => {
  appLogger.logToServer({ err, vm, info });
};

window.onerror = (message, source, lineno, colno, error) => {
  appLogger.logToServer({ message, source, lineno, colno, error });
};
