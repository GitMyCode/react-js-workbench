const redux = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: '',
  shows
}

const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case SET_SEARCH_TERM:
      const newState = {}
      Object.assign(newState, state, { searchTerm: action.value })
      return newState
    default:
      return state
  }
}

const store = redux.createStore(reducer, initialState, redux.compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => (
  {
    searchTerm: state.searchTerm,
    shows: state.shows
  })
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
        dispatch({ type: SET_SEARCH_TERM, value: searchTerm })
      }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)
module.exports = { connector, store }
