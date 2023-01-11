import React from 'react'
import {Create,SimpleForm,TextInput,DateInput} from "react-admin"
const PostCreate = (props) => {
  return (
    <Create title="create post" {...props}>
    <SimpleForm>
<TextInput source="title"/>
<TextInput multiline source="body"/>
<DateInput label="published" source="publishedAt"/>
      
    </SimpleForm>
    </Create>
  )
}

export default PostCreate
