import React from 'react';

export const Navigation = ({onRouteChange, isSignedIn}) => {
   if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='f3 link dim ba br2 black pa3 mr2 pointer'>Signout</p>
			</nav>
		);
	} else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim ba br2 black pa3 mr2 pointer'>Signin</p>
				<p onClick={() => onRouteChange('register')} className='f3 link dim ba br2 black pa3 mr2 pointer'>Register</p>
			</nav>
		);
	}
}