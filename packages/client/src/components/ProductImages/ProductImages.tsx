import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { productState } from '../../atoms/product'

export type ProductImagesProps = {
  image: {
    [key: string]: string[]
  }
}

function ProductImages({ image }: ProductImagesProps) {
  const { color: selectedColor } = useRecoilValue(productState)
  const [mainImage, setMainImage] = useState('')
  const [img, setImg] = useState<Element | null>(null)
  const selectMain = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    img: string
  ) => {
    const divNodes = e.currentTarget.parentNode?.parentNode?.childNodes
    divNodes?.forEach((e) =>
      (e.childNodes[0] as Element).removeAttribute('class')
    )
    if (e) e.currentTarget.className = 'selected'
    setMainImage(img)
  }

  // const img = document.querySelector('#preview')
  // console.log('1', img)
  useEffect(() => {
    setMainImage('')
    if (!img) {
      setImg(document.querySelector('#preview'))
    } else {
      const divNodes = img.parentNode?.parentNode?.childNodes
      divNodes?.forEach((e) =>
        (e.childNodes[0] as Element).removeAttribute('class')
      )
      img.className = 'selected'
    }
    // console.log('2', img)
    // if (img) {
    //   const divNodes = img.parentNode?.parentNode?.childNodes
    //   divNodes?.forEach((e) =>
    //     (e.childNodes[0] as Element).removeAttribute('class')
    //   )
    //   img.className = 'selected'
    // }
  }, [selectedColor, img])

  return (
    <div css={productImages}>
      <div css={left}>
        {image[selectedColor]?.map((img: string, key: number) => (
          <div id='image' key={key}>
            <img
              id='preview'
              src={img}
              alt={`view-${key}`}
              onClick={(e) => selectMain(e, img)}
            />
          </div>
        ))}
      </div>
      <div css={right}>
        <img
          id='main'
          src={mainImage || image[selectedColor]?.[0]}
          alt='view-selected'
        ></img>
      </div>
    </div>
  )
}

const productImages = css`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 50%;
  @media screen and (max-width: 1350px) {
    flex-direction: column;
    margin: 0 auto;
  }
`
const left = css`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1350px) {
    flex-direction: row;
    order: 2;
  }
  justify-content: center;
  align-items: center;
  #image {
    width: 8rem;
    padding: 0.2rem;
    img {
      background: lightgray;
      width: 100%;
      cursor: pointer;
    }
    .selected {
      border: 1px solid black;
      margin: -1px;
    }
  }
`
const right = css`
  @media screen and (max-width: 1350px) {
    img {
      order: 1;
    }
  }
  width: 100%;
  img {
    width: 100%;
    padding: 0.4rem;
  }
`

export default ProductImages
