import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    macros: {
      '\\vec': '\\boldsymbol{#1}',
      '\\ihat': '\\boldsymbol{\\hat{\\imath}}',
      '\\jhat': '\\boldsymbol{\\hat{\\jmath}}',
      '\\khat': '\\boldsymbol{\\hat{k}}',
    },
  }
})