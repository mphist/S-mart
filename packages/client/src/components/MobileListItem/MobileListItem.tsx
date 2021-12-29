import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export type MobileListItemProps = {
  type?: string
  category?: string
  subCategory?: string
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

function MobileListItem({
  type,
  category,
  subCategory,
  onClick,
}: MobileListItemProps) {
  return (
    <li onClick={onClick}>
      {(subCategory && (
        <Link
          to={`/${category?.toLowerCase()}/${type?.toLowerCase()}-${subCategory
            ?.toLowerCase()
            .replace(' ', '-')
            .replace('-& ', '&')}`}
        >
          {subCategory.replace('_', ' ')}
        </Link>
      )) ||
        category ||
        type}
      <FontAwesomeIcon icon={faChevronRight} className='nextBtn' />
    </li>
  )
}

export default MobileListItem
