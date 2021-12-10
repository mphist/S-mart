import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { clearFilterInSession } from '../../utils/clearFilterInSession'

export type MenuProps = {
  category?: string
  id: string
}

function Menu({ category, id }: MenuProps) {
  switch (category) {
    case 'CLOTHING': {
      return (
        <div css={menu}>
          <h3>CLOTHING</h3>
          <ul>
            <li>
              <Link
                to={`/clothing/${id}-new-arrivals`}
                onClick={clearFilterInSession}
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to={`/clothing/${id}-hoodies&sweaters`}
                onClick={clearFilterInSession}
              >
                Hoodies & Sweaters
              </Link>
            </li>
            <li>
              <Link
                to={`/clothing/${id}-shirts`}
                onClick={clearFilterInSession}
              >
                Shirts
              </Link>
            </li>
            <li>
              <Link to={`/clothing/${id}-pants`} onClick={clearFilterInSession}>
                Pants
              </Link>
            </li>
            <li>
              <Link
                to={`/clothing/${id}-jackets`}
                onClick={clearFilterInSession}
              >
                Jackets
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'SHOES': {
      return (
        <div css={menu}>
          <h3>SHOES</h3>
          <ul>
            <li>
              <Link
                to={`/shoes/${id}-new-arrivals`}
                onClick={clearFilterInSession}
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to={`/shoes/${id}-sneakers`} onClick={clearFilterInSession}>
                Sneakers
              </Link>
            </li>
            <li>
              <Link
                to={`/shoes/${id}-running_shoes`}
                onClick={clearFilterInSession}
              >
                Running Shoes
              </Link>
            </li>
            <li>
              <Link
                to={`/shoes/${id}-tennis_shoes`}
                onClick={clearFilterInSession}
              >
                Tennis Shoes
              </Link>
            </li>
            <li>
              <Link
                to={`/shoes/${id}-basketball_shoes`}
                onClick={clearFilterInSession}
              >
                Basketball Shoes
              </Link>
            </li>
            <li>
              <Link to={`/shoes/${id}-boots`} onClick={clearFilterInSession}>
                Boots
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'ACCESSORIES': {
      return (
        <div css={menu}>
          <h3>ACCESSORIES</h3>
          <ul>
            <li>
              <Link
                to={`/accessories/${id}-accessories-new-arrivals`}
                onClick={clearFilterInSession}
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to={`/accessories/${id}-hats`}
                onClick={clearFilterInSession}
              >
                Hats
              </Link>
            </li>
            <li>
              <Link
                to={`/accessories/${id}-belts`}
                onClick={clearFilterInSession}
              >
                Belts
              </Link>
            </li>
            <li>
              <Link
                to={`/accessories/${id}-socks`}
                onClick={clearFilterInSession}
              >
                Socks
              </Link>
            </li>
            <li>
              <Link
                to={`/accessories/${id}-gloves`}
                onClick={clearFilterInSession}
              >
                Gloves
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'CLOTHING_BOYS': {
      return (
        <div css={menu}>
          <h3>BOYS CLOTHING</h3>
          <ul>
            <li>
              <Link
                to={`/clothing/boys-hoodies&sweaters`}
                onClick={clearFilterInSession}
              >
                Hoodies & Sweaters
              </Link>
            </li>
            <li>
              <Link to={`/clothing/boys-shirts`} onClick={clearFilterInSession}>
                Shirts
              </Link>
            </li>
            <li>
              <Link to={`/clothing/boys-pants`} onClick={clearFilterInSession}>
                Pants
              </Link>
            </li>
            <li>
              <Link
                to={`/clothing/boys-jackets`}
                onClick={clearFilterInSession}
              >
                Jackets
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'CLOTHING_GIRLS': {
      return (
        <div css={menu}>
          <h3>GIRLS CLOTHING</h3>
          <ul>
            <li>
              <Link
                to={`/clothing/girls-hoodies&sweaters`}
                onClick={clearFilterInSession}
              >
                Hoodies & Sweaters
              </Link>
            </li>
            <li>
              <Link
                to={`/clothing/girls-shirts`}
                onClick={clearFilterInSession}
              >
                Shirts
              </Link>
            </li>
            <li>
              <Link to={`/clothing/girls-pants`} onClick={clearFilterInSession}>
                Pants
              </Link>
            </li>
            <li>
              <Link
                to={`/clothing/girls-jackets`}
                onClick={clearFilterInSession}
              >
                Jackets
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'SHOES_BOYS': {
      return (
        <div css={menu}>
          <h3>BOYS SHOES</h3>
          <ul>
            <li>
              <Link to={`/shoes/boys-sneakers`} onClick={clearFilterInSession}>
                Sneakers
              </Link>
            </li>
            <li>
              <Link
                to={`/shoes/boys-running_shoes`}
                onClick={clearFilterInSession}
              >
                Running Shoes
              </Link>
            </li>
            <li>
              <Link
                to={`/shoes/boys-soccer_cleats`}
                onClick={clearFilterInSession}
              >
                Soccer Cleats
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'SHOES_GIRLS': {
      return (
        <div css={menu}>
          <h3>GIRLS SHOES</h3>
          <ul>
            <li>
              <Link to={`/shoes/girls-sneakers`} onClick={clearFilterInSession}>
                Sneakers
              </Link>
            </li>
            <li>
              <Link
                to={`/shoes/girls-running_shoes`}
                onClick={clearFilterInSession}
              >
                Running Shoes
              </Link>
            </li>
            <li>
              <Link
                to={`/shoes/girls-soccer_cleats`}
                onClick={clearFilterInSession}
              >
                Soccer Cleats
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'ACCESSORIES_KIDS': {
      return (
        <div css={menu}>
          <h3>ACCESSORIES</h3>
          <ul>
            <li>
              <Link
                to={`/accessories/${id}-backpacks`}
                onClick={clearFilterInSession}
              >
                Backpacks
              </Link>
            </li>
            <li>
              <Link
                to={`/accessories/${id}-hats`}
                onClick={clearFilterInSession}
              >
                Hats
              </Link>
            </li>
            <li>
              <Link
                to={`/accessories/${id}-socks`}
                onClick={clearFilterInSession}
              >
                Socks
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'EARRINGS': {
      return (
        <div css={menu}>
          <h3>EARRINGS</h3>
          <ul>
            <li>
              <Link to={`/${id}-earrings-american_west`}>American West</Link>
            </li>
            <li>
              <Link to={`/${id}-earrings-arabella`}>Arabella</Link>
            </li>
            <li>
              <Link to={`/${id}-earrings-disney`}>Disney</Link>
            </li>
            {/* <li>
              <Link to={`${id}-earrings-le-vian`}>Le Vian</Link>
            </li> */}
            <li>
              <Link to={`/${id}-earrings-michael_kors`}>Michael Kors</Link>
            </li>
            <li>
              <Link to={`/${id}-earrings-sirena`}>Sirena</Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'RINGS': {
      return (
        <div css={menu}>
          <h3>RINGS</h3>
          <ul>
            <li>
              <Link to={`/${id}-rings-alex_woo`}>Alex Woo</Link>
            </li>
            <li>
              <Link to={`/${id}-rings-american_west`}>American West</Link>
            </li>
            <li>
              <Link to={`/${id}-rings-giani_bernini`}>Giani Bernini</Link>
            </li>
            <li>
              <Link to={`/${id}-rings-le_vian`}>Le Vian</Link>
            </li>
            <li>
              <Link to={`/${id}-rings-sarah_chloe`}>Sarah Chloe</Link>
            </li>
            <li>
              <Link to={`/${id}-rings-triton`}>Triton</Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'BRACELETS': {
      return (
        <div css={menu}>
          <h3>BRACELETS</h3>
          <ul>
            <li>
              <Link to={`/${id}-bracelets-belle_de_mer`}>Belle De Mer</Link>
            </li>
            <li>
              <Link to={`/${id}-bracelets-macys`}>Macy's</Link>
            </li>
            <li>
              <Link to={`/${id}-bracelets-michael_kors`}>Michael Kors</Link>
            </li>
            <li>
              <Link to={`/${id}-bracelets-peter_thomas_roth`}>
                Peter Thomas Roth
              </Link>
            </li>
            <li>
              <Link to={`/${id}-bracelets-simone_i_smith`}>
                Simone I. Smith
              </Link>
            </li>
            <li>
              <Link to={`/${id}-bracelets-unwritten`}>Unwritten</Link>
            </li>
          </ul>
        </div>
      )
    }
    case 'WATCHES': {
      return (
        <div css={menu}>
          <h3>WATCHES</h3>
          <ul>
            <li>
              <Link to={`/${id}-watches-armani_exchange`}>Armani Exchange</Link>
            </li>
            <li>
              <Link to={`/${id}-watches-charter_club`}>Charter Club</Link>
            </li>
            <li>
              <Link to={`/${id}-watches-coach`}>COACH</Link>
            </li>
            <li>
              <Link to={`/${id}-watches-diesel`}>Diesel</Link>
            </li>
            <li>
              <Link to={`/${id}-watches-olivia_burton`}>Olivia Burton</Link>
            </li>
            <li>
              <Link to={`/${id}-watches-tag_heuer`}>TAG Heuer</Link>
            </li>
          </ul>
        </div>
      )
    }
    default:
      return null
  }
}

const menu = css`
  h3 {
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 2px;
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding-top: 0.4rem;
    }
  }
  a {
    text-decoration: none;
    color: black;
    :hover {
      text-decoration: underline;
    }
  }
  padding: 0 3rem;
  padding-top: 1rem;
  font-size: 14px;
  letter-spacing: 0.5px;
`

export default Menu
