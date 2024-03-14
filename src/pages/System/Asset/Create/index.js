import React from 'react';

const AssetCreate = () => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     name: name,
  //     type: type,
  //     content: content
  //   };
  //   console.log(formData); // 这里可以替换为提交表单的逻辑
  // };

  return (

      <div>
        <h1>Asset Create</h1>
        {/*<form onSubmit={handleSubmit}>*/}
        {/*  <label>Name:</label>*/}
        {/*  <input type="text" value={name}*/}
        {/*         onChange={(e) => setName(e.target.value)}/>*/}

        {/*  <label>Type:</label>*/}
        {/*  <select value={type} onChange={(e) => setType(e.target.value)}>*/}
        {/*    <option value="Headline">Headline</option>*/}
        {/*    <option value="Description">Description</option>*/}
        {/*    <option value="Callout">Callout</option>*/}
        {/*  </select>*/}

        {/*  <label>Content:</label>*/}
        {/*  <textarea value={content}*/}
        {/*            onChange={(e) => setContent(e.target.value)}/>*/}

        {/*  <button type="submit">Save</button>*/}
        {/*</form>*/}
      </div>
  );
 
};

export default AssetCreate;