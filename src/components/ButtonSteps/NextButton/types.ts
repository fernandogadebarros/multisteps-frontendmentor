export type NextButtonProps = {
  step: { first: boolean; fourth: boolean; greaterThanOne: boolean }
  goNext?: () => void
}
