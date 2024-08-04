import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: {
            id: '1',
            username: 'Vasya',
            avatar: 'https://i.pinimg.com/736x/ee/07/42/ee07426386c756e414ba9c0d5b79ea15.jpg',
        },
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
