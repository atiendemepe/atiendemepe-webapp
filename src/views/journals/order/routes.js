import Restaurant from './Restaurant.vue'
import SelectOption from './SelectOption.vue'
import Summary from './Summary.vue'

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
    },
    {
        name: 'summary',
        path: '/restaurant/:id/option/:optionId/summary',
        component: Summary
    }
]

export default routes