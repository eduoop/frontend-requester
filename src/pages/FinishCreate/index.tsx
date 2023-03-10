import { CompleteCreate } from '../../components/CompleteCreate'
import { CardContainer, CardSide, HomeContainer, ImageSide } from './styles'

export const FinishCreate = () => {


    return (
        <HomeContainer>
            <ImageSide />
            <CardSide>
                <div className='h-full w-full px-8 flex justify-center'>
                    <CardContainer>
                        <CompleteCreate />
                    </CardContainer>
                </div>
            </CardSide>
        </HomeContainer>
    )
}
