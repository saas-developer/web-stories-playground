/**
 * External dependencies
 */
import Moveable from 'react-moveable';
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { useRef, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useStory } from '../../app';

const CORNER_HANDLES = [ 'nw', 'ne', 'sw', 'se' ];
const ALL_HANDLES = [ 'n', 's', 'e', 'w', 'nw', 'ne', 'sw', 'se' ];

function Movable( {
	selectedElement,
	targetEl,
	pushEvent,
} ) {
	const moveable = useRef();

	const {
		actions: { updateSelectedElements },
	} = useStory();

	const latestEvent = useRef();

	useEffect( () => {
		latestEvent.current = pushEvent;
	}, [ pushEvent ] );

	useEffect( () => {
		if ( moveable.current ) {
			// If we have persistent event then let's use that, ensuring the targets match.
			if ( latestEvent.current && targetEl.contains( latestEvent.current.target ) ) {
				moveable.current.moveable.dragStart( latestEvent.current );
			}
			moveable.current.updateRect();
		}
	}, [ targetEl, moveable ] );

	// Update moveable with whatever properties could be updated outside moveable
	// itself.
	useEffect( () => {
		if ( moveable.current ) {
			moveable.current.updateRect();
		}
	} );

	const frame = {
		translate: [ 0, 0 ],
		rotate: selectedElement.rotationAngle,
	};

	const setTransformStyle = ( target ) => {
		target.style.transform = `translate(${ frame.translate[ 0 ] }px, ${ frame.translate[ 1 ] }px) rotate(${ frame.rotate }deg)`;
	};

	/**
	 * Resets Movable once the action is done, sets the initial values.
	 *
	 * @param {Object} target Target element.
	 */
	const resetMoveable = ( target ) => {
		frame.translate = [ 0, 0 ];
		// Inline start resetting has to be done very carefully here to avoid
		// conflicts with stylesheets. See #3951.
		target.style.transform = '';
		target.style.width = '';
		target.style.height = '';
		if ( moveable.current ) {
			moveable.current.updateRect();
		}
	};

	const update = ( properties ) => updateSelectedElements( { properties } );

	return (
		<Moveable
			ref={ moveable }
			target={ targetEl }
			draggable={ ! selectedElement.isFullbleed }
			resizable={ ! selectedElement.isFullbleed }
			rotatable={ ! selectedElement.isFullbleed }
			onDrag={ ( { target, beforeTranslate } ) => {
				frame.translate = beforeTranslate;
				setTransformStyle( target );
			} }
			throttleDrag={ 0 }
			onDragStart={ ( { set } ) => {
				set( frame.translate );
			} }
			onDragEnd={ ( { target } ) => {
				// When dragging finishes, set the new properties based on the original + what moved meanwhile.
				const newProps = { x: selectedElement.x + frame.translate[ 0 ], y: selectedElement.y + frame.translate[ 1 ] };
				update( newProps );
				resetMoveable( target );
			} }
			onResizeStart={ ( { setOrigin, dragStart } ) => {
				setOrigin( [ '%', '%' ] );
				if ( dragStart ) {
					dragStart.set( frame.translate );
				}
			} }
			onResize={ ( { target, width, height, drag } ) => {
				target.style.width = `${ width }px`;
				target.style.height = `${ height }px`;
				frame.translate = drag.beforeTranslate;
				setTransformStyle( target );
			} }
			onResizeEnd={ ( { target } ) => {
				update( {
					width: parseInt( target.style.width ),
					height: parseInt( target.style.height ),
					x: selectedElement.x + frame.translate[ 0 ],
					y: selectedElement.y + frame.translate[ 1 ],
				} );
				resetMoveable( target );
			} }
			onRotateStart={ ( { set } ) => {
				set( frame.rotate );
			} }
			onRotate={ ( { target, beforeRotate } ) => {
				frame.rotate = beforeRotate;
				setTransformStyle( target );
			} }
			onRotateEnd={ ( { target } ) => {
				update( { rotationAngle: frame.rotate } );
				resetMoveable( target );
			} }
			origin={ false }
			pinchable={ true }
			keepRatio={ 'image' === selectedElement.type } // @†odo Even image doesn't always keep ratio, consider moving to element's model.
			renderDirections={ 'image' === selectedElement.type ? CORNER_HANDLES : ALL_HANDLES }
		/>
	);
}

Movable.propTypes = {
	selectedElement: PropTypes.object,
	targetEl: PropTypes.object.isRequired,
	pushEvent: PropTypes.object,
};

export default Movable;
