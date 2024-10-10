import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    size: 50,
};

export const Dark = Template.bind({});
Dark.args = {
    size: 50,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
