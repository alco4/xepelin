import React from 'react'
import PropTypes from 'prop-types'
import './sectionDescription.scss'

const SectionDescription = ({sectionLogo, title, description}) => {
    return(
        <div className={'sectionContainer'}>
            {sectionLogo}
            <div className={'sectionTitle'}>{title}</div>
            <div className={'sectionDescription'}>{description}</div>
        </div>
    )
}

SectionDescription.defaultProps = {
    sectionLogo:null,
    title: null,
    description: null
}

SectionDescription.propTypes = {
    sectionLogo: PropTypes.element,
    title: PropTypes.string,
    description: PropTypes.string
}

export default SectionDescription