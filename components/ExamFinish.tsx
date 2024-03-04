'use client'

type ExamFinishPopupType = {
  score: number,
  maxScore: number,
  passScore: number
}

const ExamFinishPopup = ({ score, maxScore, passScore } : ExamFinishPopupType) => {
  const isPass = score >= passScore
  const textColor = isPass ? 'text-green-500' : 'text-red-500'

  return (
    <div className='flex flex-col items-center justify-center gap-12 rounded-3xl'>
      <p className={textColor}>{score}/{maxScore} (Zaliczenie od {passScore})</p>
      {isPass && <p className='p-2 text-green-500 underline'>Gratulacje! Zdałeś egzamin!</p>}
      {isPass && <p className='p-2 text-green-500'>W twoim profilu zmienił się status egzaminu na zdany. Dziękujemy.</p>}
      {!isPass && <p className='p-2 text-red-500'>Niezdany. Wymagana liczba punktów do zaliczenia egzaminu wynosi 25</p>}
      {!isPass && <p className='border rounded-3xl p-2 hover:cursor-pointer hover:bg-yellow-500' onClick={() => location.reload()}>Spróbuj ponownie</p>}
    </div>
  )
}

export default ExamFinishPopup