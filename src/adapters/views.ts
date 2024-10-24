export const views = [
  {
    id: 1,
    heading: 'Personal Info',
    text: 'Please provide your name, email address, and phone number.',
    component: 'PersonalInfo',
  },
  {
    id: 2,
    heading: 'Select your plan',
    text: 'You have the option of monthly or yearly billing.',
    component: 'SelectPlan',
  },
  {
    id: 3,
    heading: 'Pick add-ons',
    text: 'Add-ons help enhance your gaming experience.',
    component: 'PickAddOns',
  },
  {
    id: 4,
    heading: 'Finishing up',
    text: 'Double-check everything looks OK before confirming.',
    component: 'FinishingUp',
  },
  {
    id: 5,
    heading: '',
    text: '',
    component: 'ThankYou',
  },
]

export const inputs = [
  {
    id: 1,
    type: 'username',
    label: 'Name',
    fieldId: 'name',
    placeholder: 'e.g. Stephen King',
  },
  {
    id: 2,
    type: 'email',
    label: 'Email Adress',
    fieldId: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
  },
  {
    id: 3,
    type: 'phone',
    label: 'Phone Number',
    fieldId: 'phone',
    placeholder: 'e.g. +1 234 567 890',
  },
]

export const getViews = () => {
  return views
}

export const getInputs = () => {
  return inputs
}
