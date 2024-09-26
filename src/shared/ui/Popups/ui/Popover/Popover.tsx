import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { useFloating, flip, shift, autoUpdate } from '@floating-ui/react-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const { className, trigger, children } = props;

    const { refs, floatingStyles } = useFloating({
        middleware: [flip(), shift({ padding: 5 })],
        placement: 'bottom-start',
        whileElementsMounted: autoUpdate,
    });

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button
                className={popupCls.trigger}
                ref={refs.setReference}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={cls.panel}
                ref={refs.setFloating}
                style={floatingStyles}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
