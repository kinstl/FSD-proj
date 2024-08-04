import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'Vasya',
                avatar: 'https://i.pinimg.com/736x/ee/07/42/ee07426386c756e414ba9c0d5b79ea15.jpg',
            },
        },
        {
            id: '2',
            text: 'world hello',
            user: { id: '2', username: 'Misha' },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
