import { Fragment, ReactNode } from 'react';
import { useFloating, flip, shift, autoUpdate } from '@floating-ui/react-dom';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: <T extends string>(value: T) => void;
    readonly?: boolean;
    label?: string;
}

export const ListBox = (props: ListBoxProps) => {
    const { items, className, value, defaultValue, onChange, readonly, label } =
        props;

    const { refs, floatingStyles } = useFloating({
        middleware: [flip(), shift({ padding: 5 })],
        placement: 'bottom-start',
        whileElementsMounted: autoUpdate,
    });

    return (
        <HStack gap="8">
            {label && <span>{label}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button
                    as="div"
                    className={cls.trigger}
                    ref={refs.setReference}
                >
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, [])}
                    style={floatingStyles}
                    ref={refs.setFloating}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
