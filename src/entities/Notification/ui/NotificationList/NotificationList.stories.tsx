import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification',
                    description: 'Hello this is a notification',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'Hello this is a notification 2',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'Hello this is a notification 3',
                },
            ],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification',
                    description: 'Hello this is a notification',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'Hello this is a notification 2',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'Hello this is a notification 3',
                },
            ],
        },
    ],
};
