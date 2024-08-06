import React, { useEffect, useState } from 'react'
import './Form.css'

export default function Form() {

    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
const {tg} = useTelegram()

    useEffect(() => {
tg.MainButton.setParams({
    text: 'send data'
})
    }, [])

    useEffect(() => {
if(!country, !street) {
    tg.MainButton.hide()
} else{
    th.MainButton.show()
}
    }, [country, street])

    
    const onChangeCountry = (e) => {
setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
            }

            const onChangeSubject = (e) => {
                setSubject(e.target.value)
                    }
    return (
        <div className={'form'}>
            <h3>Input your data</h3>
            <input className={'input'} type="text" placeholder={'country'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type="text" placeholder={'street'} value={street} onChange={onChangeStreet}/>
            <select name="select" value={subject} onChange={onChangeSubject}>
            <option value={'physical'}>ph. person</option>
                <option value={'legal'}>legal person</option>
            </select>
        </div>
    )
}