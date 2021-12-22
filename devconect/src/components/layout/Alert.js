import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeAlert, setAlert } from '../../features/alert/alertSlice'

export default function Alert() {
    const dispatch = useDispatch()
    const alerts = useSelector(state => state.alert)
    return (
        <div className="alert-wrapper d-flex justify-content-end">
            {alerts.map((alert) => (
                <div key={alert.id} className={` col-3 alert alert-${alert.alertType} d-flex  justify-content-between`}>
                    {alert.msg} <span onClick={() => {
                        dispatch(removeAlert(alert?.id))
                    }}><i class="far fa-trash-alt"></i></span>
                </div>
            ))}
        </div>
    )
}
