/// <reference types="react" />
import { DefaultProps } from '@mantine/core';
import { NotificationProps } from '../types';
export interface NotificationContainerProps extends DefaultProps {
    notification: NotificationProps;
    onHide(id: string): void;
    autoClose: false | number;
}
declare function NotificationContainer({ className, sx, notification, autoClose, onHide, }: NotificationContainerProps): JSX.Element;
declare namespace NotificationContainer {
    var displayName: string;
}
export default NotificationContainer;
//# sourceMappingURL=NotificationContainer.d.ts.map