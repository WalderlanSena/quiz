import { useI18n } from '../../../../hooks'

import { GameQuestionComponentsProps } from '../GamePlaySessionQuestion.tsx'
import { Celebrate } from '../../GameImage.tsx'

export function GamePlaySessionQuestionCorrect ({ finishQuestion }: GameQuestionComponentsProps) {
  const $t = useI18n('pages.game.play.session')
  return (
    <>
      <Celebrate />
      <div className="pt-1 pb-2">
        <h1 className="text-center"> {$t('correct.title')}</h1>
        <p className="text-center">{$t('correct.description')}</p>
      </div>
      <div className="d-grid">
        <button
          className="btn btn-lg btn-primary"
          onClick={finishQuestion}
        >
          {$t('next')}
        </button>
      </div>
    </>
  )
}
