/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function SelectMarket() {
    return (
        <div className="col-lg-3">
            <div className="list-group">
                <button disabled="disabled" className="list-group-item list-group-item-action" style={{ fontSize: '20px', fontWeight: 500 }}>Choose
                             nearest market</button>
                <a href="#" className="list-group-item list-group-item-action ">
                    Oshodi
                                </a>
                <a href="#" className="list-group-item list-group-item-action ">Ikeja</a>
                <a href="#" className="list-group-item list-group-item-action">Ijora</a>
                <a href="#" className="list-group-item list-group-item-action">Computer Village</a>
                <a href="#" className="list-group-item list-group-item-action">Ogunpa</a>
                <a href="#" className="list-group-item list-group-item-action">Dugbe</a>
                <a href="#" className="list-group-item list-group-item-action">Gbagi</a>
            </div>
        </div>
    )
}
