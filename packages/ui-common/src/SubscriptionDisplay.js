import React from 'react'
import './common.css'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAccountList,
    getAccountById,
    getAccountBalances,
    getAccountTransactions,
    getAccountDirectDebits,
    getAccountProducts,
    getAccountStandingOrders,
    getSubscriptionByAccountId,
    Subscription,
} from '@openbanking/ui-data/lib/services/account-service'

// Unhandled routes view
export default function SubscriptionDisplay(data) {
if (!data) {
        return null
    }
    return (
        <div className="infoContainer">
            <div className="txtCenter">
            <h2>Subscription &nbsp;<input type="checkbox" id="chkbox" /></h2>
            <p>By Subscribing to this service you will get 25% of your salary as credit from the Bank</p>
            <p>which will be debited from your next month salary.</p>
            <p> If you are unable to pay the amount a nominal interest would be charged.</p>
            <button
            className="btn-success"
            onClick={() => Subscription()}
            >
            Submit
        </button>
         </div>
        </div>
    )

}
