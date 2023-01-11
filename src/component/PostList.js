import React from 'react'
import {List,Datagrid,TextInput,EditButton, DeleteButton, DateInput} from "react-admin"
const PostList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextInput source="id"/>
            <TextInput source="title"/>
            <DateInput source="publishedAt"/>
            <EditButton basePath='/posts'/>
            <DeleteButton  basePath='/posts'/>
        </Datagrid>
      
    </List>
  )
}

export default PostList
