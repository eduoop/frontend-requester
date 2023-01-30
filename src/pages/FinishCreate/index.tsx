import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CompleteCreate } from '../../components/CompleteCreate'
import { Create } from '../../components/Create'
import { ForgotPassword } from '../../components/ForgotPassword'
import { Login } from '../../components/Login'
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
