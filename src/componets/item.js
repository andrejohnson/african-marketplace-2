import React from 'react'
// We'll need quite a few imports from react-router-dom
import { 
  Route, 
  NavLink, 
  Switch, 
  useParams, 
  useRouteMatch, 
  useHistory
} from 'react-router-dom';
import ItemDetails from './ItemDetails'

export default function Item(props) {
  // We get ALL items through props. We'll use the URL to find out which item is the one to show.
  const { items } = props
  const history = useHistory();

  // we use this hook to grab they dynamic parts of the path (:itemID).
  const { itemID } = useParams();
  const { url, path } = useRouteMatch();

  const item = items.find(elem => elem.id === parseInt(itemID))

  // if (!item) {
  //   history.push('/');
  // }

  return (
      <div className='item-wrapper'>
        <div className='item-header'>
          <div className='image-wrapper'>
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className='item-title-wrapper'>
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
          </div>
        </div>

        <nav className='item-sub-nav'>
          <NavLink to={`${url}/shipping`}>Shipping</NavLink>
          <NavLink to={`${url}/description`}>Description</NavLink>
        </nav>  
        <Switch>
          <Route path={`${path}/shipping`}>
            <ItemDetails text={item.shipping} />
          </Route>
          <Route path={`${path}/description`}>
            <ItemDetails text={item.description} />
          </Route>
        </Switch>
      </div>
  )
}
