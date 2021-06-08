import React from 'react'
import { useTranslation } from 'react-i18next';
import NavBar from '../../components/NavBar/NavBar'

const Messenger = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h2>{ t("messenger") }</h2>
                <h3>{ t("comming_soon") }</h3>
            </div>

            <NavBar />
        </div>
    )
}

export default Messenger
