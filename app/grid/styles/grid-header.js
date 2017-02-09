import StyleSheet from 'stilr'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    height: 100
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0px'
  },
  headersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dataType: {
    
  },
  projectHeader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  projectTitle: {
    textAlign: 'center',
    fontFamily: "'avenir next', avenir, sans-serif"
  }
})
