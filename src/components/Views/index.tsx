'use client'
import React from 'react'
import { Container } from './Container'
import { PersonalInfo } from './Screens/PersonalInfo'
import { SelectPlan } from './Screens/SelectPlan'
import { PickAddOns } from './Screens/PickAddOns/PickAddOns'
import { FinishingUp } from './Screens/FinishingUp'
import { ThankYou } from './Screens/ThankYou'
import { useViews } from '@/presentations/views.presentation'

export const componentsDictionary = {
  PersonalInfo,
  SelectPlan,
  PickAddOns,
  FinishingUp,
  ThankYou,
}

export const Views = () => {
  const { view, Component } = useViews()

  return (
    <Container heading={view?.heading} text={view?.text}>
      {Component && <Component />}
    </Container>
  )
}
