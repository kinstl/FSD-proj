import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountrySelector } from './CountrySelector';

export default {
    title: 'shared/CountrySelector',
    component: CountrySelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelector>;

const Template: ComponentStory<typeof CountrySelector> = (args) => (
    <CountrySelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
