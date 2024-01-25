// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {isactive, func, listitem} = props

  const {id, thumbnailUrl, thumbnailAltText} = listitem
  const onclickFun = () => {
    func(id)
  }

  const classes = isactive ? 'Item-style-dark' : ''

  return (
    <li className="lists">
      <button type="button" onClick={onclickFun}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`Item-style ${classes}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
