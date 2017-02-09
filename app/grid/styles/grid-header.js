import StyleSheet from 'stilr'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 120
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0px'
  },
  headersContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  dataType: {
    padding: '5px 0px'
  },
  projectHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    padding: 5
  },
  projectTitle: {
    textAlign: 'center',
    fontFamily: "'avenir next', avenir, sans-serif"
  }
})
