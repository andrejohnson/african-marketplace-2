import React from 'react';
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom';

export default function Home() {
  // navigate us to <website base URL>/items-list
  const history = useHistory();

  const routeToShop = () => {
    history.push('/items-list');
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/PLMiACbs7Y4'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}
