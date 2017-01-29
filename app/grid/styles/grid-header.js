import StyleSheet from 'stilr'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75
  },
  projectHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    borderLeft: '1px solid black',
    borderRight: '1px solid black'
  },
  projectTitle: {
    textAlign: 'center',
    fontFamily: "'avenir next', avenir, sans-serif"
  }
})
