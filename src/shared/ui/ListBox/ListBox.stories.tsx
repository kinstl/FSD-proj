import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    label: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '12356456', content: 'Второй пункт' },
    ],
    defaultValue: '123',
};

export const Readonly = Template.bind({});
Readonly.args = {
    label: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '12356456', content: 'Второй пункт' },
    ],
    defaultValue: '123',
    readonly: true,
};

export const DisabledItem = Template.bind({});
DisabledItem.args = {
    label: 'Укажите значение',
    items: [
        { value: '123', content: 'Первый пункт' },
        { value: '12356456', content: 'Второй пункт', disabled: true },
        { value: '12356456', content: 'Третий пункт' },
    ],
    defaultValue: '123',
};
