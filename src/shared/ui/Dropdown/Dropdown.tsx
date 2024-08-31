import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { useFloating, flip, shift, autoUpdate } from '@floating-ui/react-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
    const { className, items, trigger } = props;

    const { refs, floatingStyles } = useFloating({
        middleware: [flip(), shift({ padding: 5 })],
        placement: 'bottom-start',
        whileElementsMounted: autoUpdate,
    });

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn} ref={refs.setReference}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={cls.menu}
                ref={refs.setFloating}
                style={floatingStyles}
            >
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(
                                cls.item,
                                {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
