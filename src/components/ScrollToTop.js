import { Component } from 'react';
import { withRouter } from 'react-router';
/* Used to scroll to the top of each tab when the user switches tabs */
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop);