var i=Object.defineProperty;var n=(e,a)=>i(e,"name",{value:a,configurable:!0});import{j as l}from"./jsx-runtime.f7fdca9b.js";import"./iframe.afa0b447.js";const o=n(({label:e="No Label",size:a="normal",allCaps:t=!1,color:s="primary",fontColor:c})=>l("span",{className:`label ${a} text-${s}`,style:{color:c},children:t?e.toUpperCase():e}),"MyLabel");try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Este es el mensaje a mostrar en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Este es el tama\xF1o de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Si quiere todo capitalizado",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Colores Basicos del boton",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Colores personalizado de la fuente",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:o.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const L={parameters:{storySource:{source:`import { MyLabel } from "../../components/MyLabel";\r
import { ComponentMeta, ComponentStory } from '@storybook/react';\r
\r
\r
export default {\r
    title: 'UI/MyLabel',\r
    component: MyLabel,\r
    argTypes: {\r
    /**\r
     * Is this the principal call to action on the page\r
    */\r
        label: { control: 'text' },\r
        size: { control: {\r
                type: 'radio',\r
                options: ['normal', 'h1', 'h2', 'h3']\r
            },\r
        },\r
        color:{ control: 'select' },\r
        fontColor:{ control: 'color' }\r
    }\r
} as ComponentMeta<typeof MyLabel>\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args}/>\r
\r
export const Basic = Template.bind({});\r
Basic.args={\r
    size: 'normal',\r
    allCaps: false  //Capitalizar toda la palabra\r
}\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
    size: 'normal',\r
    allCaps: true  //Capitalizar toda la palabra\r
\r
}\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
    size: 'normal',\r
    color: 'secondary'\r
}\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
    size: 'normal',\r
    color: 'tertiary'\r
\r
}\r
\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
    size: 'h1',\r
    fontColor: '#5517ac'\r
\r
}`,locationsMap:{basic:{startLoc:{col:49,line:23},endLoc:{col:80,line:23},startBody:{col:49,line:23},endBody:{col:80,line:23}},"all-caps":{startLoc:{col:49,line:23},endLoc:{col:80,line:23},startBody:{col:49,line:23},endBody:{col:80,line:23}},secondary:{startLoc:{col:49,line:23},endLoc:{col:80,line:23},startBody:{col:49,line:23},endBody:{col:80,line:23}},tertiary:{startLoc:{col:49,line:23},endLoc:{col:80,line:23},startBody:{col:49,line:23},endBody:{col:80,line:23}},"custom-font-color":{startLoc:{col:49,line:23},endLoc:{col:80,line:23},startBody:{col:49,line:23},endBody:{col:80,line:23}}}}},title:"UI/MyLabel",component:o,argTypes:{label:{control:"text"},size:{control:{type:"radio",options:["normal","h1","h2","h3"]}},color:{control:"select"},fontColor:{control:"color"}}},r=n(e=>l(o,{...e}),"Template"),p=r.bind({});p.args={size:"normal",allCaps:!1};const d=r.bind({});d.args={size:"normal",allCaps:!0};const y=r.bind({});y.args={size:"normal",color:"secondary"};const m=r.bind({});m.args={size:"normal",color:"tertiary"};const u=r.bind({});u.args={size:"h1",fontColor:"#5517ac"};const g=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{d as AllCaps,p as Basic,u as CustomFontColor,y as Secondary,m as Tertiary,g as __namedExportsOrder,L as default};
//# sourceMappingURL=MyLabel.stories.18771f87.js.map
