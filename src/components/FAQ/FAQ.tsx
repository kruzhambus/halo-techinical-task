import React from "react";
import './FAQ.scss'
import uuid from 'react-uuid'
import FAQQuestion from "src/components/FAQ/FAQQuestion/FAQQuestion";

const FAQ: React.FC = () => {

    const questions: Array<{
        title: string,
        description: string,
        questionIsOpen: boolean
    }> = [
            {
                title: 'What can I do to protect our planet?',
                description: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
                questionIsOpen: true
            },
            {
                title: 'How to save nature ecology?',
                description: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
                questionIsOpen: false
            },
            {
                title: 'What is nature conservation?',
                description: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
                questionIsOpen: false
            }
        ]

    return (
        <div className={'faq'} id={'faq'}>
            <div className={'faq__text'}>
                <h2 className={'faq__title'}>Ready to Get started?</h2>
                <p className={'faq__description'}>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
                <a href="#footer">
                    <button className={'faq__contact-us-btn'}>Contact us</button>
                </a>
            </div>
            <div className={'faq__questions'}>
                {questions.map(question => {
                    return <FAQQuestion key={uuid()} title={question.title} description={question.description} questionIsOpen={question.questionIsOpen} />
                })}
            </div>
        </div>
    )
}

export default FAQ;