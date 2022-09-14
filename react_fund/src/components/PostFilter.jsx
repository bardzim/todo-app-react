import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

function PostFilter({filter,setFilter}) {
  return (
    <div>
        <MyInput
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort })}
          defaultValue="select"
          options={[
            {value: 'title', name: 'name' },
            {value: 'body', name: 'description' }
          ]}
        />
      </div>
  )
}

export default PostFilter