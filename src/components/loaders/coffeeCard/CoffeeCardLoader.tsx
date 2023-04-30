import Skeleton from 'react-loading-skeleton'
import {
  CoffeeCardLoaderContainer,
  CoffeeCardLoaderContent,
  LoaderImage,
} from './styles'

export function CoffeeCardLoader() {
  const cardLoaders = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
    'card7',
    'card8',
  ]
  return (
    <CoffeeCardLoaderContainer>
      {cardLoaders.map((card) => (
        <CoffeeCardLoaderContent key={card}>
          <LoaderImage width={115} height={115} circle={true} />
          <Skeleton width={80} height={15} />
          <Skeleton width={180} height={20} />
          <Skeleton width={190} height={10} />
          <Skeleton width={100} height={10} />
          <Skeleton width={115} height={38} />
        </CoffeeCardLoaderContent>
      ))}
    </CoffeeCardLoaderContainer>
  )
}
