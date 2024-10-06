import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleRating } from './ArticleRating';

export default {
    title: 'features/Article/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
