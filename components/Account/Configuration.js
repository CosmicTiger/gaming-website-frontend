import React from 'react'
import ChangeNameForm from "./ChangeNameForm";

const Configuration = (props) => {

    const { user } = props;

    return (
        <div className="Account-configuration">
            <div className="title">Configuración</div>
            <div className="data">
                <ChangeNameForm user={user} />
            </div>
        </div>
    )
}

export default Configuration
