import { Cycle } from './reducers'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRPUT_CURRENT_CYCLE = 'INTERRPUT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interrutCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRPUT_CURRENT_CYCLE,
    payload: {},
  }
}

export function markCurrentCycleAsFinshiedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    payload: {},
  }
}
