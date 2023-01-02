import React, { useState } from "react";
import './FAQQuestion.scss'

interface IProps {
    title: string,
    description: string,
    questionIsOpen: boolean
}

const FAQQuestion: React.FC<IProps> = ({ title, description, questionIsOpen }) => {

    const [isOpen, setOpen] = useState<boolean>(questionIsOpen)

    return (
        <div className={'faq-question'}>
            <div className={'faq-question__header'}>
                <h3 className={'faq-question__title'}>{title}</h3>
                <button className={'faq-question__btn'} onClick={() => setOpen(prev => !prev)}>
                    <div className={
                        isOpen
                            ? 'faq-question__btn-icon faq-question__btn-icon_open'
                            : 'faq-question__btn-icon'
                    }>{ }</div>
                </button>
            </div>
            <div className={
                isOpen
                    ? 'faq-question__content faq-question__content_open'
                    : 'faq-question__content'
            }>
                <p className={'faq-question__description'}>{description}</p>
            </div>
            <hr className={'faq-question__end-line'} />
        </div>
    )
}

export default FAQQuestion;