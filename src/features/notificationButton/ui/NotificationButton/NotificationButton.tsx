import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <Popover
                trigger={
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon inverted Svg={NotificationIcon} />
                    </Button>
                }
            >
                <NotificationList />
            </Popover>
        </div>
    );
});
