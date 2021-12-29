import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export type MobileListItemProps = {
  type?: string
  category?: string
  onClick: React.MouseEventHandler<HTMLLIElement>
}

function MobileListItem({ type, category, onClick }: MobileListItemProps) {
  return (
    <li onClick={onClick}>
      {type || category}
      <FontAwesomeIcon icon={faChevronRight} className='nextBtn' />
    </li>
  )
}

export default MobileListItem
