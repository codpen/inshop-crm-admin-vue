import Vue from 'vue'

import FormComponents from '@inshopgroup/vue-inshop-crm-form-components'
import '@inshopgroup/vue-inshop-crm-form-components/dist/vue-inshop-crm-form-components.css'
import FormInput from '@/components/form/FormInput'
import FormTextarea from '@/components/form/FormTextarea'

Vue.component('FormInput', FormInput)
Vue.component('FormTextarea', FormTextarea)

Object.keys(FormComponents).forEach(name => {
  if (!['FormInput', 'FormTextarea'].includes(name)) {
    Vue.component(name, FormComponents[name])
  }
})
