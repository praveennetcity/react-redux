export const validateUser = (loginDet) => {
  setTimeout(() => {
    dispatch({ type: 'LOGIN', 'loginDet': loginDet })
  }, 2000)
}