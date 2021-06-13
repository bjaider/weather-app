const sidebarState = (state = true, action) => {
  switch (action.type) {
    case 'changeSidebarState': {
      return action.payload
    }

    default:
      return state
  }
}

export default sidebarState
