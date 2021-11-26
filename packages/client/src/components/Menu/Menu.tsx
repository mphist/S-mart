import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

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
              <Link to={`/${id}-clothing-new-arrivals`}>New Arrivals</Link>
            </li>
            <li>
              <Link to={`/${id}-hoodies&sweaters`}>Hoodies & Sweaters</Link>
            </li>
            <li>
              <Link to={`/${id}-shirts`}>Shirts</Link>
            </li>
            <li>
              <Link to={`/${id}-pants`}>Pants</Link>
            </li>
            <li>
              <Link to={`/${id}-jackets`}>Jackets</Link>
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
              <Link to={`/${id}-shoes-new-arrivals`}>New Arrivals</Link>
            </li>
            <li>
              <Link to={`/${id}-sneakers`}>Sneakers</Link>
            </li>
            <li>
              <Link to={`/${id}-running_shoes`}>Running Shoes</Link>
            </li>
            <li>
              <Link to={`/${id}-tennis_shoes`}>Tennis Shoes</Link>
            </li>
            <li>
              <Link to={`/${id}-basketball_shoes`}>Basketball Shoes</Link>
            </li>
            <li>
              <Link to={`/${id}-boots`}>Boots</Link>
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
              <Link to={`/${id}-accessories-new-arrivals`}>New Arrivals</Link>
            </li>
            <li>
              <Link to={`/${id}-hats`}>Hats</Link>
            </li>
            <li>
              <Link to={`/${id}-belts`}>Belts</Link>
            </li>
            <li>
              <Link to={`/${id}-socks`}>Socks</Link>
            </li>
            <li>
              <Link to={`/${id}-gloves`}>Gloves</Link>
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
              <Link to={`/boys-hoodies&sweaters`}>Hoodies & Sweaters</Link>
            </li>
            <li>
              <Link to={`/boys-shirts`}>Shirts</Link>
            </li>
            <li>
              <Link to={`/boys-pants`}>Pants</Link>
            </li>
            <li>
              <Link to={`/boys-jackets`}>Jackets</Link>
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
              <Link to={`/girls-hoodies&sweaters`}>Hoodies & Sweaters</Link>
            </li>
            <li>
              <Link to={`/girls-shirts`}>Shirts</Link>
            </li>
            <li>
              <Link to={`/girls-pants`}>Pants</Link>
            </li>
            <li>
              <Link to={`/girls-jackets`}>Jackets</Link>
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
              <Link to={`/boys-sneakers`}>Sneakers</Link>
            </li>
            <li>
              <Link to={`/boys-running_shoes`}>Running Shoes</Link>
            </li>
            <li>
              <Link to={`/boys-soccer_cleats`}>Soccer Cleats</Link>
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
              <Link to={`/girls-sneakers`}>Sneakers</Link>
            </li>
            <li>
              <Link to={`/girls-running_shoes`}>Running Shoes</Link>
            </li>
            <li>
              <Link to={`/girls-soccer_cleats`}>Soccer Cleats</Link>
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
              <Link to={`/${id}-backpacks`}>Backpacks</Link>
            </li>
            <li>
              <Link to={`/${id}-hats`}>Hats</Link>
            </li>
            <li>
              <Link to={`/${id}-socks`}>Socks</Link>
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
