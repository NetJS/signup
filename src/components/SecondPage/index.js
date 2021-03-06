import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import Box from '../../common/Box'
import ProgressBar from '../../common/ProgressBar'
import Body from '../../common/Body'
import Footer from '../../common/Footer'
import BirthDate from '../../common/BirthDate'
import Gender from '../../common/Gender'
import Select from '../../common/Select'

import validate from '../../helpers/validate'

import './index.css'


class SecondPage extends Component {
    render() {

        const { handleSubmit, invalid } = this.props

        return (
            <Box header="Signup">

                <ProgressBar progress={invalid ? 33 : 66} />

                <Body>
                    <form onSubmit={handleSubmit}>
                        <div className="second">
                            <BirthDate />
                            <Gender />
                            <Select />
                        </div>
                    </form>
                </Body>

                <Footer>
                    <Link to='/' className="link link-silver animated tada">Back</Link>
                    {invalid ? '' : <Link to='/third' className="link animated tada">Next ➡</Link>}
                </Footer>
                
            </Box>
        )
    }
}


SecondPage.propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool
}


export default reduxForm({
    form: 'signup',
    destroyOnUnmount: false,
    validate
})(SecondPage)
