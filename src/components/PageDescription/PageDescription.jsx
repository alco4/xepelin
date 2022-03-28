import React from 'react'
import PropTypes from 'prop-types'
import './pageDescription.scss'

const PageDescription = ({ pageLogo, title, description }) => {
    return (
        <div className={'pageDescriptionContainer'}>
            {pageLogo}
            <div className={'pageDescriptionTitle'}>{title}</div>
            <div className={'pageDescriptionText'}>{description}</div>
        </div>
    )
}

PageDescription.defaultProps = {
    sectionLogo: null,
    title: null,
    description: null
}

PageDescription.propTypes = {
    sectionLogo: PropTypes.element,
    title: PropTypes.string,
    description: PropTypes.string
}

export default PageDescription