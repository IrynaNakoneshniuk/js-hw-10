// # Завдання 7 - додаткове, виконувати не обов'язково

// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };


  const account = {
    balance: 0,
    transactions: [],

    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
        return {
            amount: amount,
            type:type,
        };
    },
  
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
        this.balance+= amount;
        this.transactions.push( createTransaction(amount,'deposit'));
    },
  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
        if(this.balance>=amount) {
            this.transactions.push(createTransaction(amount, 'withdraw'));
        }
        else{
            console.log(`Зняття суми ${amount} не можливо, недостатньо коштів`);
        }
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        return this.transactions.find(trans=>
            trans.id===id);
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        return this.transactions.filter(trans=>trans.type===type).length;
    },
  };

  