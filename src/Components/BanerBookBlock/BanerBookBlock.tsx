
import './BanerBookBlock.css'
import { books } from '../../Data/book'



type BanerProps = {
    textBaner: 'Акція' | 'Новинка' | 'Ексклюзив'


}

export default function BanerBookBlock({ textBaner }: BanerProps) {

    return (
        <>

            <section className="baner_block">


                {textBaner}

            </section>
        </>
    )
}