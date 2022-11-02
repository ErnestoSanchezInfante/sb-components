import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
    /**
     * Is this the principal call to action on the page
    */
        label: { control: 'text' },
        size: { control: {
                type: 'radio',
                options: ['normal', 'h1', 'h2', 'h3']
            },
        },
        color:{ control: 'select' },
        fontColor:{ control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args}/>

export const Basic = Template.bind({});
Basic.args={
    size: 'normal',
    allCaps: false  //Capitalizar toda la palabra
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true  //Capitalizar toda la palabra

}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'

}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'

}