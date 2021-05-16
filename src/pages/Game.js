import React from 'react'
import { StyledCharacter, Styledgame, StyledScore, StyledTimer } from '../styled/Game'
import { Strong } from '../styled/Random'

function Game() {
    return (
        <Styledgame>
            <StyledScore>Score: <Strong>0</Strong></StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyledTimer>Time: <Strong>00:000</Strong> </StyledTimer>
        </Styledgame>
    )
}

export default Game
