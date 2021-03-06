import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ( { title, url } ) => {

    return (
        <div className="card animate__animated animate__bounceIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

GifGridItem.propTypes = {
    img: PropTypes.object
}

export default GifGridItem
