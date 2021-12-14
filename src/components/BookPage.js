import React from "react"
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import Sidebar from "components/Sidebar"
import AddToCartButton from "components/AddToCartButton"

const Wrapper = styled.div`
  display: flex;
`

const BookDetails = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: flex-start;
  max-width: 700px;
  font: 15px/1.5 'PT Sans';
`

const CoverColumn = styled.div``

const Cover = styled.img`
  border-radius: 4px;
  margin-right: 30px;
  max-width: fit-content;
  object-fit: contain;
`

const InfoBlock = styled.div``

const Title = styled.h1`
  font-family: 'PT Sans';
  margin: 0 auto;
  margin-top: -11px;
`

const Author = styled.h2`
  font: normal 21px 'PT Sans';
  margin: 0 auto;
  color: #595959;
`

const Description = styled.p`
  line-height: 1.6;
`

const PriceBlock = styled.div`
  margin-top: 12px;
  margin-bottom: 5px;
`

const CurrentPrice = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin-right: 12px;
`

const OldPriceWrapper = styled.span`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: line-through;
`

const DiscountBlockWrapper = styled.div`
  margin: 8px auto;
  margin-bottom: 24px;
`

const DiscountPercent = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #ec0002;
  border-radius: 4px;
  color: white;
  transform: rotate(-4deg);
  font: 14px "PT Sans";
  margin-right: 10px;
`

const DiscountDuration = styled.span`
  font: bold 11px "PT Sans";
`

const SecondaryInfoLineWrapper = styled.p`
  color: #888;
  font-size: 13px;
  margin: 0 auto;
  font-style: all-small-caps;
`

function SecondaryInfoLine({ name, value }) {
  if (value) {
    return (
      <SecondaryInfoLineWrapper>
        <b>{name}</b>: {value}
      </SecondaryInfoLineWrapper>
    )
  } else {
    return <></>
  }
}

function DiscountBlock({ discount }) {
  if (discount) {
    return (
      <DiscountBlockWrapper>
        <DiscountPercent>{ "−" + discount.percent + "%" }</DiscountPercent>
        <DiscountDuration>{"ЕЩЕ " + discount.duration + " ДНЯ"}</DiscountDuration>
      </DiscountBlockWrapper>
    )
  } else {
    return <></>
  }
}

function OldPrice({ oldPrice }) {
  if (oldPrice)
    return <OldPriceWrapper>{oldPrice}</OldPriceWrapper>
  else
    return <></>
}

export default function BookPage(props) {
    const params = useParams()
    // eslint-disable-next-line
    const book = props.books.find((b) => b.id == params.bookId)
    const {
      id,
      cover,
      currentPrice,
      oldPrice,
      discount,
      title,
      author,
      description,
      isbn,
      pageCount,
      weight,
      dimensions
    } = book

    return (
      <Wrapper>
        <Sidebar />

        <BookDetails>
          <CoverColumn>
            <Cover src={cover}></Cover>

            <PriceBlock>
              <CurrentPrice>{currentPrice} ₽</CurrentPrice>
              <OldPrice oldPrice={oldPrice}></OldPrice>
            </PriceBlock>

            <DiscountBlock discount={discount} />

            <AddToCartButton icon={true} />
          </CoverColumn>

          <InfoBlock>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Description>{description}</Description>

            <SecondaryInfoLine name="ID товара" value={id} />
            <SecondaryInfoLine name="ISBN" value={isbn} />
            <SecondaryInfoLine name="Страниц" value={pageCount} />
            <SecondaryInfoLine name="Масса" value={weight ? weight + " г" : undefined} />
            <SecondaryInfoLine name="Размеры" value={dimensions} />
          </InfoBlock>
        </BookDetails>
      </Wrapper>
    )
}
