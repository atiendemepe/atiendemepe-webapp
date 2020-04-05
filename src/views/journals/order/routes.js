import Restaurant from './Restaurant.vue'
import SelectOption from './SelectOption.vue'

const routes = [
    {
        name: 'restaurant',
        path: '/restaurant/:id',
        component: Restaurant
    },
    {
        name: 'selectOption',
        path: '/restaurant/:id/option/:optionId',
        component: SelectOption
    }
]

export default routes