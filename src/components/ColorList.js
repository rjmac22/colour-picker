import PropTypes from 'prop-types'
import React from 'react'
import Color from './Color'
import '../stylesheets/ColorList.css'

const ColorList = ({ colors =[], onRate=f=>f, onRemove=f=>f }) =>
   <div className="color-list">
     {(colors.length === 0) ?
        <p>No Colours Listed. (Add a Color)</p> :
        colors.map(color =>
            <Color key={color.id}
                       {...color}
                       onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)} />
        )
     }
   </div>


ColorList.PropTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func
}

export default ColorList