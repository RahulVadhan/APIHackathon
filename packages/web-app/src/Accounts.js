import React from 'react'

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
} from '@openbanking/ui-data/lib/services/account-service'
import InfoDisplay from '@openbanking/ui-common/lib/InfoDisplay'
import SubscriptionDisplay from '@openbanking/ui-common/lib/SubscriptionDisplay'
import TableDisplay from '@openbanking/ui-common/lib/TableDisplay'
import './Accounts.css'

//accounts api list
const Accounts = () => {
    const data = useSelector((state) => state.app.data)
    const accountId = useSelector((state) => state.account.accountId)

    const dispatch = useDispatch()

    return (
        <div className="mainContainer">
            <h2 className="pageTitle"></h2>
            <div className="apiContainer">
                <div className="btnContainer">
                <button
                    className="btn-primary"
                    onClick={() => getSubscriptionByAccountId(dispatch, accountId)}
                    >
                    Subscribe for Insta Loan
                    </button>

                    <button
                        className="btn-primary"
                        onClick={() => getAccountBalances(dispatch, accountId)}
                    >
                        Get Account Balances
                    </button>

                    <button
                        className="btn-primary"
                        onClick={() =>
                            getAccountTransactions(dispatch, accountId)
                        }
                    >
                        Get Account Transactions
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => getAccountList(dispatch)}
                    >
                        Get Account List
                    </button>
                </div>
                <div className="displayInfo">
                 <SubscriptionDisplay data={data}/>
                </div>
                <div className="displayInfo">
                                    <InfoDisplay data={data} />
                                </div>
            </div>
        </div>
    )
}

export default Accounts
