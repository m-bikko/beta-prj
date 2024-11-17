import './Specification.css';

function Specification() {
    return (
        <div className={`specification`}>

            <div className={`top-container`}>
                <div className={`info-container`}>
                    <h2>Характеристики</h2>

                    <p>Силовой кабель используют, чтобы передавать переменный ток от энергетических установок потребителям. Его устройство зависит от сферы использования, но обязательно присутствуют токопроводящие жилы и их изоляция, внешняя оболочка. Жил может быть одна или несколько, они, как правило, имеют сечение в виде круга, треугольника. Жила состоит из одного провода или нескольких, которые переплетаются между собой.</p>

                    <p>Силовые кабели отличаются по таким критериям:</p>

                    <ol>
                        <li>Количество жил. Большинство имеет от 1 до 4, некоторые типы производят с 5-6 жилами.</li>
                        <li>Материал жилы – медь, алюминий. Цена изделий из алюминия ниже. Медь дороже, но она более пластичная и не ломается при перегибах. У нее лучше проводимость, она выдерживает более высокие нагрузки. Медные контакты не оплавляются.</li>
                        <li>Сечение. Минимальное сечение каждой жилы - 1,5 мм2, максимальное - 240 мм2. Если кабель двужильный, то его элементы имеют одинаковое сечение. Для фабрикатов с числом жил 3-5 одна из них может быть меньшего сечения (нулевая или для заземления). У кабеля с 6 жилами 4 имеют одинаковое сечение, две – меньшее.</li>
                        <li>Материал изоляции. Чаще всего используют резину или полимеры, которые могут быть дополнены металлической оплеткой.</li>
                    </ol>

                    <p>От этих характеристик зависит напряжение, которое выдерживает силовой кабель. Основная доля электротехнической продукции такого типа рассчитана на 660В или 1 кВ. Специальные виды – на 3 и 6 кВ. Изделия выдерживают температуру от -50 до +50С.</p>
                </div>

                <div className={`info-container`}>
                    <h2>Маркировка</h2>

                    <p>
                        Для обозначения используют буквенную маркировку из 3 или 4 символов. Если первой указана буква А, то жила алюминиевая. В остальных случаях подразумевается, что маркированный провод медный. Вторая и третьи буквы обозначают материал общей изоляции и отдельно для жил. Р – это резиновая обмотка, В – виниловая или из поливинилхлорида.
                    </p>

                    <p>
                        Дополнительно в маркировке четвертой буквой обозначают особый тип продукта: Б означает бронированный кабель, Г – голый, без защиты. Если в конце имеются маленькие буквы нг, то кабель относится к негорючим.
                    </p>

                    <p>
                        Чаще применяют два типа кабеля:
                    </p>
                    <ul>
                        <li>ВВГ: гибкий кабель, у которого изоляция каждой жилы и общая обмотка изготовлены из поливинилхлорида. Такие кабели рассчитаны на напряжение до 1кВ, их прокладывают внутри жилых зданий, промышленных предприятий. В кабеле 2-10 жил с сечением от 1,5 до 240 мм2.</li>
                        <li>АВВГ: кабель с жилами из алюминия сечением от 2,5 до 50 мм2. Изоляция и общая оплетка выполнены из поливинилхлорида.</li>
                        Силовые кабели с пластмассовой оплеткой выпускают по ГОСТ 16442-80.
                    </ul>
                </div>
            </div>

            <div className={`info-container`}>
                <h2>Типы изоляции</h2>
                <p>
                    Каждая жила имеет слой изоляции, предназначенный для защиты от пробоя и воздействия неблагоприятных факторов окружающей среды. Поверх формируется общая или поясная обмотка. Ранее для защиты использовалась бумага с пропиткой, сейчас силовые кабели имеют изоляцию из полимерных материалов, резины. Это делает провода легкими, гибкими. Для оплетки применяется поливинилхлорид или полиэтилен. Огнестойкие аналоги не поддерживают горение при контакте с открытым огнем.
                </p>
                <p>
                    В тех местах, где присутствует высокий риск механического повреждения проводов, рекомендуется приобрести бронированные кабели. Их покрывают специальной оплеткой из проволоки. Такие изделия выдерживают серьезные механические повреждения – от ударов инструмента до обрушения горной породы. Металлическую обмотку не прогрызают грызуны. Под броней укладывают подушку, чтобы оплетка при поломке не повредила жилы.
                </p>
            </div>
        </div>
    );
}

export default Specification;