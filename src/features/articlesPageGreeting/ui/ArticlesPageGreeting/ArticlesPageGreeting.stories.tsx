import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageGreeting } from './ArticlesPageGreeting';

export default {
    title: 'features/ArticlePageGreeting',
    component: ArticlesPageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageGreeting>;

const Template: ComponentStory<typeof ArticlesPageGreeting> = () => (
    <ArticlesPageGreeting />
);

export const Normal = Template.bind({});
Normal.args = {};
