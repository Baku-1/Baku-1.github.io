import { getNotifications, createNotification } from '../../services/notificationService';

export const fetchNotifications = () => async (dispatch) => {
  const notifications = await getNotifications();
    dispatch({ type: 'FETCH_NOTIFICATIONS', payload: notifications });
    };

    export const addNotification = (notificationData) => async (dispatch) => {
      const newNotification = await createNotification(notificationData);
        dispatch({ type: 'ADD_NOTIFICATION', payload: newNotification });
        };
