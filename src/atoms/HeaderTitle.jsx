import React from 'react'
import './HeaderTitle.css'
function HeaderTitle(props) {
  return (
    <>
      <p class='cloud-text cloud-title'>Moving Cloud Text</p>
      <p class='cloud-text attribute'>
        Photo by <a href='https://unsplash.com/photos/Xk0uzYL3lyY?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Setu Anand</a> on{' '}
        <a href='https://unsplash.com/search/photos/coal?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Unsplash</a>
      </p>
    </>
  )
}

export default HeaderTitle
