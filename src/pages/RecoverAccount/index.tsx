import { CompleteRecover } from '../../components/CompleteRecover'
import { CardContainer, CardSide, HomeContainer, ImageSide } from './styles'

export const RecoverAccount = () => {

    return (
        <HomeContainer>
            <ImageSide />
            <CardSide>
                <div className='h-full w-full px-8 flex justify-center'>
                    <CardContainer>
                        <CompleteRecover />
                    </CardContainer>
                </div>
            </CardSide>
        </HomeContainer>
    )
}
