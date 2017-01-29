import React from 'react'
import { connect } from 'react-redux'

import StyleSheet from 'stilr'

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: '#000'
  }
})

class MainContainer extends React.Component {
  render () {
    return <h1 className={styles.header}>Hello {this.props.main.dummyAppName}</h1>
  }
}

export default connect(
  (state) => state
)(MainContainer)
