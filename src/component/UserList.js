import React from 'react'
import {List,Datagrid,TextInput,EmailFiled,EditButton, DeleteButton} from "react-admin"
const UserList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <EditButton basePath='/users'/>
            <DeleteButton  basePath='/users'/>
        </Datagrid>
      
    </List>
  )
}

export default UserList
