import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

const notification = {
    id: '1',
    title: 'test',
    description: 'test desc',
};

const notificationWithHref = {
    id: '1',
    title: 'test',
    description: 'test desc',
    href: 'link',
};

export const Normal = Template.bind({});
Normal.args = {
    item: notification,
};

export const NormalHref = Template.bind({});
NormalHref.args = {
    item: notificationWithHref,
};

export const Dark = Template.bind({});
Dark.args = {
    item: notification,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkHref = Template.bind({});
DarkHref.args = {
    item: notificationWithHref,
};
DarkHref.decorators = [ThemeDecorator(Theme.DARK)];
