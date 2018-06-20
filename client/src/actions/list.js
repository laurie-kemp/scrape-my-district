export const CHANGE_CELL = 'CHANGE_CELL'

export const changeCell = (payload) => {
  console.log(payload, "THIS IS THE PAYLOAD COMING TO ACTION")
  return {
    type: CHANGE_CELL,
    payload: payload
  }
}