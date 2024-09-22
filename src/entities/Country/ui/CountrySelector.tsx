import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../model/types/country';

interface CountrySelectorProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelector = memo(
    ({ className, value, onChange, readonly }: CountrySelectorProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <ListBox
                className={classNames('', {}, [className])}
                onChange={onChangeHandler}
                value={value}
                items={options}
                defaultValue={t('country')}
                readonly={readonly}
                label={t('country')}
            />
        );
    },
);
