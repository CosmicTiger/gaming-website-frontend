import React from 'react'
import ChangeNameForm from "./ChangeNameForm";

const Configuration = (props) => {

    const { user, logout } = props;

    return (
        <div className="Account-configuration">
            <div className="title">Configuración</div>
            <div className="data">
                <ChangeNameForm user={user} logout={logout} />
            </div>
        </div>
    )
}

export default Configuration
