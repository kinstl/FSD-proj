import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: `import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
    <Code {...args} />
);

export const Normal = Template.bind({});`,
};

export const Dark = Template.bind({});
Dark.args = {
    text: `import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
    <Code {...args} />
);

export const Normal = Template.bind({});`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    text: `import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
    <Code {...args} />
);

export const Normal = Template.bind({});`,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
