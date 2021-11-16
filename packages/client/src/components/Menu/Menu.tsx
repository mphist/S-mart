import { css } from '@emotion/react'

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
              <a href={`/${id}-clothing-new-arrivals`}>New Arrivals</a>
            </li>
            <li>
              <a href={`/${id}-hoodies&sweaters`}>Hoodies & Sweaters</a>
            </li>
            <li>
              <a href={`/${id}-shirts`}>Shirts</a>
            </li>
            <li>
              <a href={`${id}-pants`}>Pants</a>
            </li>
            <li>
              <a href={`${id}-jackets`}>Jackets</a>
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
              <a href={`${id}-shoes-new-arrivals`}>New Arrivals</a>
            </li>
            <li>
              <a href={`${id}-sneakers`}>Sneakers</a>
            </li>
            <li>
              <a href={`${id}-running_shoes`}>Running Shoes</a>
            </li>
            <li>
              <a href={`${id}-tennis_shoes`}>Tennis Shoes</a>
            </li>
            <li>
              <a href={`${id}-basketball_shoes`}>Basketball Shoes</a>
            </li>
            <li>
              <a href={`${id}-boots`}>Boots</a>
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
              <a href={`${id}-accessories-new-arrivals`}>New Arrivals</a>
            </li>
            <li>
              <a href={`${id}-hats`}>Hats</a>
            </li>
            <li>
              <a href={`${id}-belts`}>Belts</a>
            </li>
            <li>
              <a href={`${id}-socks`}>Socks</a>
            </li>
            <li>
              <a href={`${id}-gloves`}>Gloves</a>
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
              <a href={`boys-hoodies&sweaters`}>Hoodies & Sweaters</a>
            </li>
            <li>
              <a href={`boys-shirts`}>Shirts</a>
            </li>
            <li>
              <a href={`boys-pants`}>Pants</a>
            </li>
            <li>
              <a href={`boys-jackets`}>Jackets</a>
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
              <a href={`girls-hoodies&sweaters`}>Hoodies & Sweaters</a>
            </li>
            <li>
              <a href={`girls-shirts`}>Shirts</a>
            </li>
            <li>
              <a href={`girls-pants`}>Pants</a>
            </li>
            <li>
              <a href={`girls-jackets`}>Jackets</a>
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
              <a href={`boys-sneakers`}>Sneakers</a>
            </li>
            <li>
              <a href={`boys-running_shoes`}>Running Shoes</a>
            </li>
            <li>
              <a href={`boys-soccer_cleats`}>Soccer Cleats</a>
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
              <a href={`girls-sneakers`}>Sneakers</a>
            </li>
            <li>
              <a href={`girls-running_shoes`}>Running Shoes</a>
            </li>
            <li>
              <a href={`girls-soccer_cleats`}>Soccer Cleats</a>
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
              <a href={`${id}-backpacks`}>Backpacks</a>
            </li>
            <li>
              <a href={`${id}-hats`}>Hats</a>
            </li>
            <li>
              <a href={`${id}-socks`}>Socks</a>
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
              <a href={`${id}-earrings-american_west`}>American West</a>
            </li>
            <li>
              <a href={`${id}-earrings-arabella`}>Arabella</a>
            </li>
            <li>
              <a href={`${id}-earrings-disney`}>Disney</a>
            </li>
            {/* <li>
              <a href={`${id}-earrings-le-vian`}>Le Vian</a>
            </li> */}
            <li>
              <a href={`${id}-earrings-michael_kors`}>Michael Kors</a>
            </li>
            <li>
              <a href={`${id}-earrings-sirena`}>Sirena</a>
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
              <a href={`${id}-rings-alex_woo`}>Alex Woo</a>
            </li>
            <li>
              <a href={`${id}-rings-american_west`}>American West</a>
            </li>
            <li>
              <a href={`${id}-rings-giani_bernini`}>Giani Bernini</a>
            </li>
            <li>
              <a href={`${id}-rings-le_vian`}>Le Vian</a>
            </li>
            <li>
              <a href={`${id}-rings-sarah_chloe`}>Sarah Chloe</a>
            </li>
            <li>
              <a href={`${id}-rings-triton`}>Triton</a>
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
              <a href={`${id}-bracelets-belle_de_mer`}>Belle De Mer</a>
            </li>
            <li>
              <a href={`${id}-bracelets-macys`}>Macy's</a>
            </li>
            <li>
              <a href={`${id}-bracelets-michael_kors`}>Michael Kors</a>
            </li>
            <li>
              <a href={`${id}-bracelets-peter_thomas_roth`}>
                Peter Thomas Roth
              </a>
            </li>
            <li>
              <a href={`${id}-bracelets-simone_i_smith`}>Simone I. Smith</a>
            </li>
            <li>
              <a href={`${id}-bracelets-unwritten`}>Unwritten</a>
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
              <a href={`${id}-watches-armani_exchange`}>Armani Exchange</a>
            </li>
            <li>
              <a href={`${id}-watches-charter_club`}>Charter Club</a>
            </li>
            <li>
              <a href={`${id}-watches-coach`}>COACH</a>
            </li>
            <li>
              <a href={`${id}-watches-diesel`}>Diesel</a>
            </li>
            <li>
              <a href={`${id}-watches-olivia_burton`}>Olivia Burton</a>
            </li>
            <li>
              <a href={`${id}-watches-tag_heuer`}>TAG Heuer</a>
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
