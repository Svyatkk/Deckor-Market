
import './BanerBookBlock.css'
import { books } from '../../Data/book'


export type BanerProps = {
    textBaner: 'Акція' | 'Новинка' | 'Ексклюзив'
}

export default function BanerBookBlock({ textBaner }: BanerProps) {
    if (!textBaner) return null

    return (
        <>

            <section className={`baner_block baner_${textBaner}`}>
                {textBaner}

            </section>
        </>
    )
}