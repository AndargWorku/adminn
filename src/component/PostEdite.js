import React from 'react'
import {Edit,SimpleForm,TextInput,DateInput} from "react-admin"
const PostEdite = (props) => {
  return (
    <Edit title="Edit post" {...props}>
    <SimpleForm>
<TextInput disabled source="id"/>
<TextInput source="title"/>
<TextInput multiline source="body"/>
<DateInput label="published" source="publishedAt"/>
      
    </SimpleForm>
    </Edit>
  )
}

export default PostEdite
