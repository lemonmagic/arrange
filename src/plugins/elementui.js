import {
  Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Radio, RadioButton, RadioGroup, Divider, Button,
  Table, TableColumn, Form, FormItem, Input, Row, Dropdown, DropdownMenu, DropdownItem, Loading, Steps, Step, Result, InfiniteScroll,
  CheckboxGroup, Checkbox,CheckboxButton, Col, TimePicker, DatePicker, Option, Select, Popover, Tooltip, Drawer, Cascader, InputNumber, 
  ButtonGroup, Descriptions, DescriptionsItem, Dialog, PageHeader, Tabs, TabPane, Carousel, CarouselItem
} from 'element-ui'
// MessageBox 以下述三行代码方式全局引入
import Vue from "vue";
import {MessageBox} from 'element-ui';
Vue.prototype.$confirm = MessageBox.confirm;

const element = {
  install: function (Vue) {
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(Radio)
    Vue.use(MenuItemGroup)
    Vue.use(RadioButton)
    Vue.use(RadioGroup)
    Vue.use(Divider)
    Vue.use(Button)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Row)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Loading)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(Result)
    Vue.use(InfiniteScroll)
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    Vue.use(CheckboxButton)
    Vue.use(Col)
    Vue.use(TimePicker)
    Vue.use(DatePicker)
    Vue.use(Option)
    Vue.use(Select)
    Vue.use(Popover)
    Vue.use(Tooltip)
    Vue.use(Drawer)
    Vue.use(Cascader)
    Vue.use(InputNumber)
    Vue.use(ButtonGroup)
    Vue.use(Descriptions)
    Vue.use(DescriptionsItem)
    Vue.use(Dialog)
    Vue.use(PageHeader)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
  }
}
export default element