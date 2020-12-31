import React from 'react'
import ChangeNameForm from "./ChangeNameForm";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm";

const Configuration = (props) => {

    const { user, logout, setReloadUser } = props;

    return (
        <div className="Account-configuration">
            <div className="title">Configuración</div>
            <div className="data">
                <ChangeNameForm 
                    user={user} 
                    logout={logout} 
                    setReloadUser={setReloadUser} 
                />
                <ChangeEmailForm 
                    user={user} 
                    logout={logout} 
                    setReloadUser={setReloadUser} 
                />
                <ChangePasswordForm 
                    user={user} 
                    logout={logout} 
                    setReloadUser={setReloadUser} 
                />
            </div>
        </div>
    )
}

export default Configuration
