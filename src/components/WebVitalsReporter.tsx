'use client'

import { useReportWebVitals } from 'next/web-vitals'

const BUDGETS: Record<string, number> = {
  CLS: 0.1,
  INP: 200,
  LCP: 2500,
}

export default function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    const budget = BUDGETS[metric.name]

    if (budget === undefined) {
      return
    }

    const isOverBudget = metric.value > budget
    const log = isOverBudget ? console.warn : console.info

    log(
      `[WebVitals] ${metric.name}: ${metric.value.toFixed(2)} (budget: ${budget})`
    )
  })

  return null
}
