import React from 'react';
import PropTypes from 'prop-types'

const When = ({is, children}) =>
  <>
    {is && children}
  </>

When.propTypes = {
  is: PropTypes.bool.isRequired,
}

export default When;
