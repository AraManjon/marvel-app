import { Router, RouteComponentProps } from '@reach/router'
import { CharactersPage } from '../pages/CharactersPage'

const RouterApp = () => {

  return (
    <Router>
      <RouterPage path="/" pageComponent={<CharactersPage />} />
    </Router>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default RouterApp