function ArticleTeaser(props) {

  const {id, title, created_date, handleTitleClick } = props
  
  return (
    <div>
      <a onClick={ () => handleTitleClick(id) }>{ title }</a>
      <p>{ created_date }</p>
    </div>
  )
}

export default ArticleTeaser;


// // class-based component equivalent code:
// import React, { Component } from 'react';

// class ArticleTeaser extends Component {
//   render() {
//     const { id, title, created_date: createdDate, handleTitleClick } = this.props;
//     return (
//       <div>
//         <a onClick={ () => handleTitleClick(id) }>{ title }</a>
//         <p>{ createdDate }</p>
//       </div>
//     )
//   }
// }

// export default ArticleTeaser;


