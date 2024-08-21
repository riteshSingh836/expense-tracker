import { useRef } from 'react';
import styles from './ExpenseForm.module.css'

function ExpenseForm(props) {
    const {addExpense} = props;

    // using useRef()
    const expenseTextInput = useRef();
    const expenseAmountInput = useRef();


    return(
        <>
            <form className={styles.form}>

                <h3>Add new Transaction</h3>

                {/* TEXT INPUT */}
                <label>Text</label>
                <input type='text'
                        placeholder='Enter text...'
                        ref={expenseTextInput}
                        id='expenseText'
                        className={styles.input}/>

                {/* AMOUNT INPUT */}
                <label>Amount</label>
                <input type='amount'
                        placeholder='Enter amount...'
                        ref={expenseAmountInput}
                        id='expenseAmount'
                        className={styles.input}/>

                <button className={styles.submitBtn}>Add Transaction</button>
            </form>
        </>
    )
}

export default ExpenseForm;