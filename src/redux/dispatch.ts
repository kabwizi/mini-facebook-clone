import {
  SHOW_ALL_STORIES,
  SHOW_SINGLE_POST,
  CLOSE_OVERLAY,
  CHANGE_CURRENT_STORY
} from './action'
import { IPayload } from './reducer'

export function dispatchShowAllStories(payload: IPayload) {
  return {
    type: SHOW_ALL_STORIES,
    payload: payload
  }
}

export function dispatchSinglePost(payload: IPayload) {
  return {
    type: SHOW_SINGLE_POST,
    payload: payload
  }
}
export function dispatchCloseOverlay() {
  return {
    type: CLOSE_OVERLAY
  }
}

export function dispatchChangeCurrentStory(payload: IPayload) {
  return {
    type: CHANGE_CURRENT_STORY,
    payload: payload
  }
}
