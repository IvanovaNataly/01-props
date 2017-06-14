import React from 'react';

export default ( {action,subject} ) => {
    return (
      <div className="thumb">
				<h4 className="headline fz35 white-text">Thumbnail component</h4>
				<img src="http://lorempixel.com/100/100/people/"/>
				<h5 className="paragraph white-text fz30">passed props: {action} {subject}</h5>
	  	</div>
    )
}