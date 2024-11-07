import React from "react";

function AlertMessage({message})
{
    const hasSuccess = message.success ? true : false;
    const hasError = message.error ? true : false;

    if(!hasSuccess && !hasError) return null;

    const alertStyles = hasSuccess ? {
        bg: 'bg-green-50',
        text: 'text-green-800',
        content: message.success
    } : {
        bg: 'bg-red-50',
        text: 'text-red-800',
        content: message.error
    }

    return (
        <div className={`p-3 m-3 text-sm rounded-lg ${alertStyles.text} ${alertStyles.bg}`}>
            {alertStyles.content}
        </div>
    )
}

export default AlertMessage;