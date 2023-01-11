import {Admin,Resource} from "react-admin"
import restProvider from "ra-data-simple-rest"
import PostList from "./component/PostList"
import PostCreate from "./component/PostCreate";
import PostEdite from "./component/PostEdite";
import UserList from "./component/UserList"
import UserCreate from "./component/UserCreate";
import UserEdit from "./component/UserEdit";
function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="posts"
       list={PostList} 
       create={PostCreate} 
       Edite={PostEdite}/>
       <Resource name="users"
       list={UserList} 
       create={UserCreate} 
       Edit={UserEdit}/>
    </Admin>
  )
}

export default App
