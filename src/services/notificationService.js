// src\services\notificationService.js

import { toast } from 'react-toastify';

export const notificationService = {
    success: (message) => {
        toast.success(message);
    },
    error: (message) => {
        toast.error(message);
    },
    info: (message) => {
        toast.info(message);
    },
    warning: (message) => {
        toast.warning(message);
    },
};